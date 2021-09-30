
import React, { useState, useEffect, useContext } from 'react'
import { View, ScrollView, Text, StyleSheet, BackHandler } from 'react-native'

import Limit from '../TopLimitScreen'
import ActionButton from 'react-native-action-button';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Video } from 'expo-av';

import VideoAnimat from './out.mp4'
import Notifications from './notificationAlert'




import { firebase } from '../../database/firebase';
import { GlobalContext } from '../../provider';

export default ({ navigation }) => {
    const [data, setData] = useContext(GlobalContext);
    const [alert, setAlert] = useState([]);

    useEffect(() => {
        (async () => {
            await firebase
                .firestore()
                .collection('animalAlert')
                .onSnapshot((alertDoc) => {
                    let aTemp = [];
                    alertDoc.forEach((currentAlert) => {
                        const currInfo = {
                            docId: currentAlert.id,
                            info: currentAlert.data(),
                        }

                        aTemp.push(currInfo);
                    })
                    setAlert(aTemp);
                })
                .catch(e => {
                    console.log('Failed to load alerts', e)
                })
        })();
    }, [])

    const printAlert = _ => {
        if (alert) {
            alert.forEach(currAlert => {
                return <Notifications />;
            })
        } else {
            return <Video
                source={VideoAnimat}
                shouldPlay
                resizeMode="cover"
                style={styles.video}
            />;
        }
    }
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <Limit />
            <View style={styles.titleView}><Text style={styles.title}>Animales Perdidos</Text></View>
            <ActionButton buttonColor="#ffc500" onPress={() => { navigation.navigate("Create Animal Alert") }} />
            <ScrollView style={{ flex: 1, zIndex: -1, marginLeft: 30, marginRight: 30 }}>
                {alert < 1 ? <Video
                    source={VideoAnimat}
                    shouldPlay
                    resizeMode="cover"
                    style={styles.video}
                /> : alert.map((curAlert, key) => {
                    return <Notifications
                        key={key}
                        name={curAlert.info.animal}
                        sex={curAlert.info.sex}
                        zone={curAlert.info.zone}
                        photo={curAlert.info.photo}
                        description={curAlert.info.description}
                        navigation={navigation}
                        alertId={curAlert.docId}
                    />
                })}
            </ScrollView>
        </View>
    )
}

export const styles = StyleSheet.create({
    titleView: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 70,
        borderBottomWidth: 2,
        borderColor: '#abd7e3',
    },
    title: {
        fontSize: 22,
        textTransform: 'uppercase',
    },
    video: {
        height: 300,
        width: 300,
        borderRadius: 100,
        marginTop: 100,
        alignSelf: 'center'
    }
})