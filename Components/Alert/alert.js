import React, { useContext, useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, BackHandler } from 'react-native';
import PendingRequest from './Components/friendRequest';

import { firebase } from '../../database/firebase';
import { GlobalContext } from '../../provider/index';
import Limit from '../TopLimitScreen';
import { Video } from 'expo-av';
import Barkido from '../../assets/Login/png/BarkidoAnimatSol.mp4'

export default () => {

    

    //Context API
    const [data, setData] = useContext(GlobalContext);

    const [request, setRequest] = useState([]);

    useEffect(() => {
        (async () => {
            await firebase
                .firestore()
                .collection('users')
                .doc(data.id)
                .collection('pendingRequest')
                .onSnapshot((req) => {
                    let reqTemp = [];
                    req.forEach((reqDoc) => {
                        reqTemp.push(reqDoc.data());
                    })
                    setRequest(reqTemp);
                }).catch((e) => {
                    console.log('error getting documents', e);
                })
        })();

    }, []);

    return (
        <View style={styles.containerView}>
            <Limit />
            <View style={styles.titleView}>
                <Text style={styles.title}>NOTIFICACIONES</Text>
            </View>
            <ScrollView style={styles.containerView}>
                <View style={styles.containerScroll}>
                    {request.length > 0 &&
                        request.map((req, key) => {
                            return <PendingRequest
                                name={req.name}
                                photoAnimal={req.photo}
                                userId={data.id}
                                requestId={req.createdBy}
                                key={key}
                            ></PendingRequest>
                        })
                    }

                    {/* //------------------
                    //------------------ */}
                    
                    <Video
                        source={Barkido}
                        shouldPlay
                        resizeMode="cover"
                        style={styles.video}
                    />
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    containerView: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    containerScroll: {
        flex: 1,
        alignItems: 'center',
    },
    title:{
        fontSize: 22,
        textTransform: 'uppercase',
    },
    titleView:{
        alignItems: 'center',
        justifyContent: 'center',
        height: 70,
        borderBottomWidth: 2,
        borderColor: '#abd7e3',
    },
    video:{
        height: 300,
        width: 300,
        borderRadius: 100,
        marginTop:100,
    }
})