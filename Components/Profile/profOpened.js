import React, { useContext, useState, useEffect } from 'react'
import { StyleSheet } from 'react-native'
import { Container, Head, ButtonHead, Image, View, TopContainer, Button, Line, Text, Body, TopBody, InfoContainer, NameText, PhotosCampVerticalContainer, ViewContainer, CircleContainer, HumanImage, PhotoHumanView, ImageView } from './styled'
import GoBack from '../TurnBack'
import PhotoCampVert from './Photos/vertical';
import Limit from '../TopLimitScreen'

import Settings from '../Profile/Resources/settings.png'
import ProfileImage from './Resources/golden2.jpg'
import AddPhoto from './Resources/camera.png'
import PawImage from './Resources/PawFriend.png'
import GenderImg from './Resources/male.png';
import male from './Resources/male.png'
import female from './Resources/female.png'

import { firebase } from '../../database/firebase';
import { GlobalContext } from '../../provider';

import * as ImagePicker from 'expo-image-picker';
import { BottomSheet, ListItem } from 'react-native-elements';
import { uploadImageAsync } from '../cloud/uploadphoto';
import { createGlobalStyle } from 'styled-components';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';





export default ({ navigation, route }) => {

    const { user, animal, publications } = route.params;



    const [gender, setGender] = useState(GenderImg);
    const [years, setYears] = useState('3');


    const [data, setData] = useContext(GlobalContext);

    //...............................................
    const [isVisible, setVisible] = useState(false);
    const bottomList = [
        {
            title: 'Haz foto con la camara',
            onPress: () => takePhoto()
        },
        {
            title: 'Selecciona de la libreria',
            onPress: () => selectPhoto()
        },
        {
            title: 'Cancelar',
            containerStyle: { backgroundColor: 'red', justifyContent: 'center' },
            titleStyle: { color: 'white' },
            onPress: () => setVisible(false),
        }
    ]

    /*useEffect(() => {

        //TAKE USER INFO
        (async () => {
            await firebase
                .firestore()
                .collection('users')
                .doc(data.id)
                .get()
                .then((doc) => {
                    if (doc.exists) {
                        setUser(doc.data());
                    } else {
                        console.log('Document dont exist');
                    }
                }).catch((error) => {
                    console.log(error);
                })
        })();

        //TAKE ANIMALS INFO
        (async () => {
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
                    setAnimal(animals);
                })
                .catch((error) => {
                    console.log(error);
                })
        })();


        //TAKE PUBLICATIONS
        (async () => {
            await firebase
                .firestore()
                .collection('users')
                .doc(data.id)
                .collection('publications')
                .orderBy('createdAt', 'desc')
                .onSnapshot((querySnapshot) => {
                    const newPublications = [];
                    querySnapshot.forEach((doc) => {
                        newPublications.push(doc.data());
                    })

                    setPublications(newPublications);
                })
                .catch((e) => {
                    console.log(e)
                })
        })();

        //FINAL USEEFFECT----------------
    }, []);*/

    //Take a photo
    const selectPhoto = async () => {
        const permision = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (permision.granted === false) {
            alert("permission required")
            return;
        }

        const pickResult = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            aspect: [4, 3]
        });

        if (!pickResult.cancelled) {
            uploadPhoto(pickResult.uri);
            setVisible(false);
        } else {

        }
    }

    const takePhoto = async () => {
        const cameraPermision = await ImagePicker.requestCameraPermissionsAsync();

        if (cameraPermision.granted === false) {
            alert('perimso requerido');
        }

        const photoResult = await ImagePicker.launchCameraAsync();
        console.log(photoResult);

        if (!photoResult.cancelled) {
            uploadPhoto(photoResult.uri);
            setVisible(false);
        }
    }

    console.log(animal[0]);

    const uploadPhoto = async (photoUri) => {
        let uploadURL = '';
        try {
            if (photoUri != null || photoUri != "") {
                uploadURL = await uploadImageAsync(photoUri, data.id);
            }
        } catch (e) {
            console.log('Upload Failed');
        } finally {

        }
        try {
            await firebase
                .firestore()
                .collection('users')
                .doc(data.id)
                .collection('publications')
                .add({
                    photo: uploadURL,
                    description: "",
                    likes: 0,
                    createdBy: user.userName,
                    photoProfile: user.photoProfile,
                    createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                })
        } catch (e) {
            console.log(e);
        }
    }

    const changeVisibility = _ => {
        let visbility = isVisible;
        visbility = !visbility;
        setVisible(visbility);
    }

    return (
        <ViewContainer>
            <Limit />
            <Container>
                <GoBack navigation={navigation} />
                {animal.length > 0 &&
                    <Head source={{ uri: animal[0].photoPortada }}>
                        <View>
                            <ButtonHead onPress={() => navigation.navigate("Configuration")}>
                                <Image source={Settings} resizeMode='contain' />
                            </ButtonHead>
                        </View>
                    </Head>
                }
                <TopContainer>
                    <Button>
                        <ButtonHead onPress={changeVisibility}>
                            {/* <Image source={AddPhoto} resizeMode='stretch' /> */}
                            <ImageView>
                                <MaterialCommunityIcons name="camera-plus" color="#ffc500" size={30} />
                            </ImageView>
                        </ButtonHead>
                    </Button>
                    <Line />
                    <Button>
                        <ButtonHead>
                            <Image source={PawImage} resizeMode='stretch' />
                        </ButtonHead>
                        <Text>32</Text>
                    </Button>
                    <Line />
                    {user &&
                        <PhotoHumanView>
                            <CircleContainer style={styles.shadowContainer}>
                                <HumanImage source={{ uri: user.photoProfile }} />
                            </CircleContainer>
                            <Text>@{user.userName}</Text>
                        </PhotoHumanView>
                    }
                </TopContainer>

                <Body style={styles.shadowContainer}>
                    <TopBody>
                        {animal.length > 0 &&
                            <InfoContainer>
                                <NameText>
                                    {animal[0].name}
                                </NameText>
                                <Text>{years + ' ' + 'Años'}  |  {animal[0].breed}</Text>
                                <Text />
                                <Text>{animal[0].description}</Text>
                            </InfoContainer>
                        }
                    </TopBody>

                    <PhotosCampVerticalContainer>
                        {
                            //elements.map(element => element)
                            publications.length > 0 &&
                            publications.map((currentPublication, i) => <PhotoCampVert key={i} imageSource={currentPublication.photo} />
                            )
                        }
                    </PhotosCampVerticalContainer>
                </Body>

                <BottomSheet
                    isVisible={isVisible}
                    containerStyle={{ backgroundColor: 'rgba(0.5, 0.25, 0, 0.75)' }}
                >
                    {bottomList.map((l, i) => (
                        <ListItem key={i} containerStyle={l.containerStyle} onPress={l.onPress}>
                            <ListItem.Content>
                                <ListItem.Title style={l.titleStyle}>{l.title}</ListItem.Title>
                            </ListItem.Content>
                        </ListItem>
                    ))}
                </BottomSheet>

            </Container>
        </ViewContainer>
    )
}


const styles = StyleSheet.create({
    shadowContainer: {
        elevation: 10,
    }
});