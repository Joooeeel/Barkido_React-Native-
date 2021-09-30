import React, { useState, useContext } from 'react';
import { StyleSheet, Image, TouchableOpacity, TextInput, Text, View, ScrollView, Platform, Dimensions } from 'react-native'
import Limit from '../TopLimitScreen'
import GoBack from '../Configuration/GoBack'
// import {Container, Title, Body, ViewTitle} from './styled'
import * as ImagePicker from 'expo-image-picker';
import DefImg from '../../assets/Login/png/profile.png';
import TextArea from 'react-native-textarea';
import DateTimePicker from '@react-native-community/datetimepicker';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

//Lost animal alert to firebase
import { firebase } from '../../database/firebase';
import { uploadImageAsync } from '../cloud/uploadphoto';
import { GlobalContext } from '../../provider';



export default (props) => {

    const [data, setData] = useContext(GlobalContext);

    const [date, setDate] = useState(new Date(1598051730000));
    const [show, setShow] = useState(false);

    const [photoTemp, setPhotoTemp] = useState('');

    const [buttonSelected, setButtonSeclected] = useState("");

    //User Information
    const [alertInfo, setAlertInfo] = useState({
        photo: '',
        animal: '',
        zone: '',
        city: '',
        date: '',
        description: '',
        sex: '',
        race: '',
        years: '',
    })

    const addNewAlert = async () => {
        await firebase
            .firestore()
            .collection('animalAlert')
            .add({
                photo: '',
                animal: alertInfo.animal,
                zone: alertInfo.zone,
                city: alertInfo.city,
                date: alertInfo.date,
                description: alertInfo.description,
                race: alertInfo.race,
                createdBy: data.id,
                createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            }).then(function (docRef) {
                if (photoTemp.photoUri != '') uploadPhoto(docRef.id); else props.navigation.goBack();
            })
    }

    const uploadPhoto = async (id) => {
        let uploadUrl = '';
        try {
            uploadUrl = await uploadImageAsync(photoTemp.photoUri, id);
            setAlertInfo({ ...alertInfo, photo: uploadUrl });
        } catch (e) {
            alert('Uploaded photo failed');
        } finally {
            updateURL(id, uploadUrl);
        }
    }

    const updateURL = async (id, photoURL) => {
        try {
            await firebase
                .firestore()
                .collection('animalAlert')
                .doc(id)
                .update({
                    photo: photoURL
                })
        } catch (e) {
            alert('Updated error');
        } finally {
            props.navigation.goBack();
        }
    }

    //Save Inputs
    const changeInfo = (info, value) => {
        setAlertInfo({ ...alertInfo, [info]: value });
        console.log(alertInfo);
    }

    const activateCalendar = _ => {
        setShow(true);
    }

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        if (Platform.OS === 'android') {
            setShow(false);
        }
        setDate(currentDate);
        console.log(date);
    }

    const openImageAsync = async () => {
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
            setPhotoTemp({ photoUri: pickResult.uri });
        } else {
            setAlertInfo({ ...alertInfo, photo: '' });
        }
    }

    console.log(photoTemp);
    return (
        <View style={styles.container}>
            <Limit />
            <GoBack navigation={props.navigation} />
            <View style={styles.titleView}><Text style={styles.title}>Crear anuncio</Text></View>
            <ScrollView style={styles.container}>
                <View style={styles.body}>
                    <TouchableOpacity style={styles.addPhoto}
                        onPress={openImageAsync}
                    >
                        {photoTemp.photoUri == "" ? null : <Image source={{
                            uri: photoTemp.photoUri
                        }} style={styles.photoCont} />
                        }

                    </TouchableOpacity>

                    <TextInput style={styles.enter}
                        placeholder="Nombre del animal"
                        onChangeText={(e) => changeInfo("animal", e)}
                    />
                    <TextInput style={styles.enter}
                        placeholder="Años"
                        onChangeText={(e) => changeInfo("years", e)}
                    />
                    <TextInput style={styles.enter}
                        placeholder="Raza"
                        // onChangeText={(e) => changeInfo("raza", e)}
                    />
                    <View style={styles.rowView}>
                        <Text style={{color: 'grey', padding:5}}>Sexo</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity style={buttonSelected == "male" ? styles.btnsPressed : styles.btns} onPress={() => { setAlertInfo({ ...alertInfo, sex: "male" }); setButtonSeclected("male") }}>
                                <MaterialCommunityIcons name="gender-male" color={'#707070'} size={30} />
                            </TouchableOpacity>
                            <TouchableOpacity style={buttonSelected == "female" ? styles.btnsPressed : styles.btns} onPress={() => { setAlertInfo({ ...alertInfo, sex: "female" }); setButtonSeclected("female") }}>
                                <MaterialCommunityIcons name="gender-female" color={'#707070'} size={30} />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <TextInput style={styles.enter}
                        placeholder="Zona"
                        onChangeText={(e) => changeInfo("zone", e)}
                    />
                    <TextInput style={styles.enter}
                        placeholder="Ciudad"
                        onChangeText={(e) => changeInfo("city", e)}
                    />
                    <TouchableOpacity onPress={() => activateCalendar()} style={styles.calendar}>
                        <Text style={styles.grayText}>Dia que se perdió</Text>
                    </TouchableOpacity>
                    {show && (<DateTimePicker
                        testID="dateTimePicker"
                        mode="date"
                        value={date}
                        display="spinner"
                        onChange={onChange}
                        disabled="true"
                    />
                    )}
                    <TextArea
                        containerStyle={styles.description}
                        maxLength={400}
                        placeholder="Descripción (0/400)"
                        onChangeText={(e) => changeInfo("description", e)}
                    />

                    <TouchableOpacity style={styles.button} onPress={() => addNewAlert()}>
                        <Text style={styles.text}>Aceptar</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
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
    body: {
        alignItems: 'center',
        flex: 1,
        // padding: 35,
        padding: Platform.OS === 'android' ? '8%' : '8%',
    },
    enter: {
        width: '100%',
        height: 40,
        borderBottomWidth: 1,
        borderColor: 'lightgrey',
        marginBottom: 20,
        padding: 5,
        paddingBottom: 15,
        alignItems: 'center',
    },
    rowView:{
        width: '100%',
        height: 40,
        // margin:20,
        marginBottom: 20,
        display: 'flex',
        flexDirection:'row',
        // flow: 'nowrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: 'lightgrey',
    },
    addPhoto: {
        width: 200,
        height: 123,
        marginBottom: 33,
        borderColor: 'lightgrey',
        borderWidth: 1,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
    },
    description: {
        height: 160,
        borderWidth: 1,
        borderColor: 'lightgrey',
        marginTop: 20,
        borderRadius: 10,
        padding: 10,
    },
    grayText: {
        color: 'grey',
        padding: 5,
    },
    calendar: {
        width: '100%',
        height: 40,
        borderBottomWidth: 1,
        borderColor: 'lightgrey',
        justifyContent: 'center',
    },
    button: {
        width: 200,
        height: 48,
        backgroundColor: "#ffc500",
        borderRadius: 100,
        padding: 10,
        marginTop: 30,
        marginBottom: Platform.OS === 'android' ? '8%' : '40%',
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        color: "white",
    },
    photoCont: {
        width: 200,
        height: 125,
    },
    btnsPressed: {
        borderRadius: 10,
        padding: 1,
        marginRight: 10,
        marginBottom: 1,
        backgroundColor: '#ffc500',
    },
    btns: {
        borderRadius: 10,
        padding: 1,
        marginRight: 10,
        marginBottom: 1,
    },
})