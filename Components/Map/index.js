import React, { useState, useEffect, useContext } from 'react';
import * as Location from 'expo-location';
import * as geolib from 'geolib';

import MapView, { Circle, Marker } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions, ActivityIndicator, BackHandler } from 'react-native';

import { CommonActions } from '@react-navigation/native'
import { firebase } from '../../database/firebase';

import { getUserById } from '../Firebase/consults';
import { GlobalContext } from '../../provider';
import { createGlobalStyle } from 'styled-components';
import InfoBox from './Components/infoBox';
import ProvisionalPin from './resource/provisional.png';

const BLabla = ({ navigation }) => {
  React.useEffect(() => {
    navigation.dispatch((state) => {
      const routes = state.routes.filter(r => r.name !== 'Te damos la bienvenida!');
      return CommonActions.reset({
        ...state, routes, index: routes.length - 1
      })
    })
  })
}


const initialState = {
  latitude: 0,
  longitude: 0,
  latitudeDelta: 0.0050,
  longitudeDelta: 0.0011,
}


export default ({ navigation }) => {

  let INTERVAL_TIME = 500000;

  const [currentPosition, setCurrentPosition] = useState({});
  const [errorMsg, setErrorMsg] = useState(null);
  //......isOnRadius?
  const [isOnRadius, setIsOnRadius] = useState(false);

  const [points, setPoints] = useState({
    latitude: 41.6683,
    longitude: 1.8655,
  })
  const homeCircle = {
    latitude: 41.67370754293435,
    longitude: 1.865476688181122,
  }
  const [interestPoints, setInterestPoints] = useState([]);
  const [usersInPoints, setUsersInPoints] = useState([]);
  const [usersInPointsMarker, setUsersInPointsMarker] = useState([]);
  const [selectedUser, setSelectedUser] = useState({});
  const [selectedUserAnimal, setSelectedUserAnimal] = useState([]);
  const [infoBoxActive, setInfoBox] = useState(false);

  const [usersInPointsChanged, setUsersInPointsChanged] = useState(false)

  //Context Api
  const [data, setData] = useContext(GlobalContext);

  //USER AND ANIMAL INFO
  const [userInfo, setUserInfo] = useState({});
  const [animalInfo, setAnimalInfo] = useState([]);

  const [pipican, setPipican] = useState([]);

  useEffect(() => {

    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }
      //M'agafa la posicio a temps real
      let location = await Location.getCurrentPositionAsync({});
      let finaLocation = getPosition(location.coords.latitude, location.coords.longitude);
      setCurrentPosition(finaLocation);
      isOnPoint(finaLocation.latitude, finaLocation.longitude, 0);
    })();

    (async () => {
      await firebase
        .firestore()
        .collection("Pipicanes")
        .get()
        .then((querySnapshot) => {
          const pipicanTemp = [];
          querySnapshot.forEach((doc) => {
            const infoTemp = {
              id: doc.id,
              info: doc.data()
            }
            pipicanTemp.push(infoTemp);
          })
          setPipican(pipicanTemp);
        }).catch((e) => {
          console.log("error getting documwents: ", e);
        })
    })();

    (async () => {
      await firebase
        .firestore()
        .collection('Pipicanes')
        .onSnapshot((points) => {
          points.forEach((doc) => {
            firebase
              .firestore()
              .collection('Pipicanes')
              .doc(doc.id)
              .collection('users')
              .onSnapshot((users) => {
                let userTemp = [];
                users.forEach((usersDoc) => {
                  const userInfo = {
                    id: usersDoc.id,
                    info: usersDoc.data()
                  }
                  userTemp.push(userInfo);
                })
                setUsersInPointsMarker(userTemp);
              })
          })
        }).catch((e) => {
          console.log('Error getting documents from principal collection');
        })
    })();

    (async () => {
      getUserInfo();
      getAnimalInfo();
    })();

    //...............FINAL USE EFFECT..............
  }, []);

  const getUserInfo = async () => {
    await firebase
      .firestore()
      .collection('users')
      .doc(data.id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setUserInfo(doc.data());
        } else {
          console.log('Document dont exist');
        }
      })
  }

  const getAnimalInfo = async () => {
    await firebase
      .firestore()
      .collection('users')
      .doc(data.id)
      .collection('animals')
      .get()
      .then((querySnapshot) => {
        const animals = [];
        querySnapshot.forEach((doc) => {
          animals.push(doc.data());
        })
        setAnimalInfo(animals);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  const getPosition = (latitude, longitude) => {
    let pos = {
      latitude: latitude,
      longitude: longitude,
      ...Pos
    }
    return pos;
  }

  const changePosition = (latitude, longitude) => {
    setCurrentPosition({ ...currentPosition, latitude: latitude, longitude: longitude });
    //isOnPoint(latitude, longitude);
  }

  const [lastPointId, setLastPointId] = useState(null);

  const isOnPoint = (latitude, longitude) => {
    if (latitude != null) {
      const isOn = pipican.find(p => geolib.isPointWithinRadius(
        { latitude: latitude, longitude: longitude },  //PUNT ON ESTAS TU (USUARI)
        { latitude: p.info.point.latitude, longitude: p.info.point.longitude }, //PUNT CENTRAL ---> PIPICAN
        200  //RADI DE LA RODONA
      ));

      if (!isOnRadius) {
        if (isOn) {
          setIsOnRadius(!isOnRadius);
          setLastPointId(isOn.id);
          const userPos = {
            latitude: latitude,
            longitude: longitude,
          }
          setUserOnDatabase(isOn.id, userPos, true);
        } else {
          //alert('You are not in the circle');
        }
      } else if (isOnRadius && !isOn) {
        setUserOnDatabase(lastPointId, null, false);
        setIsOnRadius(!isOnRadius);
      }
    }
  }

  const setUserOnDatabase = async (pointId, userPos, upload) => {
    if (upload) {
      try {
        await firebase.
          firestore()
          .collection('Pipicanes')
          .doc(pointId)
          .collection('users')
          .doc(data.id)
          .set({
            latitude: userPos.latitude,
            longitude: userPos.longitude,
            time: firebase.firestore.FieldValue.serverTimestamp(),
          })
      } catch (e) {
        console.log(e);
      }
    } else {
      try {
        await firebase
          .firestore()
          .collection('Pipicanes')
          .doc(pointId)
          .collection('users')
          .doc(data.id)
          .delete()
      } catch (e) {
        console.log(e)
      }
    }
  }

  const infoBoxSetUp = idInfo => {

    console.log(idInfo);

    // if (!selectedUser) {
    //      if (selectedUser.id != idInfo) {
    getInfo(idInfo);
    getAnimal(idInfo)
    //      }
    //  }
    setInfoBox(!infoBoxActive);
  }

  const getInfo = async (id) => {
    let user = null;

    await firebase
      .firestore()
      .collection('users')
      .doc(id)
      .get()
      .then((doc) => {
        user = doc.data();
        user.id = id;
      })
      .catch((e) => {
        console.log('error getting user info ->', e);
      })
    setSelectedUser(user);
  }

  const getAnimal = async (id) => {
    let animals = [];

    await firebase
      .firestore()
      .collection('users')
      .doc(id)
      .collection('animals')
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          animals.push(doc.data());
        })
        setSelectedUserAnimal(animals);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  return currentPosition.latitude ? (
    <View style={styles.container}>
      <MapView style={styles.map}
        initialRegion={currentPosition}
        customMapStyle={mapStyle}
        showsUserLocation={true}
        showsMyLocationButton={true}
        followsUserLocation={true}
        onUserLocationChange={locationChange => changePosition(locationChange.nativeEvent.coordinate.latitude, locationChange.nativeEvent.coordinate.longitude, locationChange.nativeEvent.coordinate.timestamp)}
        provider={MapView.PROVIDER_GOOGLE}
        onPress={e => infoBoxActive ? setInfoBox(!infoBoxActive) : null}
      // blabla ={BLabla}
      >

        {pipican.length > 0 &&
          pipican.map((pc, i) => {
            return <Marker
              key={i}
              coordinate={{
                latitude: pc.info.point.latitude,
                longitude: pc.info.point.longitude,
              }}
              title={pc.info.title}
            />
          })
        }

        {//PUNTS DINAMICS DE USUARIS EN EL MAPA
          usersInPointsMarker.length > 0 &&
          usersInPointsMarker.map((elem, key) => {
            if (elem.id != data.id) {
              return <Marker
                key={key}
                coordinate={{
                  latitude: elem.info.latitude,
                  longitude: elem.info.longitude,
                }}
                title={elem.id}
                image={ProvisionalPin}
                onPress={e => infoBoxSetUp(elem.id)}
              ></Marker>
            }
          })
        }
      </MapView>
      {infoBoxActive && <InfoBox isActive={infoBoxActive} userInfo={selectedUser} animalInfo={selectedUserAnimal} myAnimal={animalInfo} navigation={navigation} />}
    </View >
  ) : <MapView></MapView>
}

const mapStyle = [
  {
    "featureType": "administrative",
    "elementType": "geometry",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "geometry",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "landscape.man_made",
    "elementType": "geometry",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "stylers": [
      {
        "visibility": "simplified"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#f5f4d6"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "transit",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "water",
    "stylers": [
      {
        "color": "#abd7e3"
      }
    ]
  }
];

const Pos = {
  latitudeDelta: 0.0050,
  longitudeDelta: 0.0011,
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});