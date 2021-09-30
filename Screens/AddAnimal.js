import React, { useState, useContext, useEffect } from 'react';
import { StyleSheet, TouchableOpacity, TextInput, Platform, Alert, Image, ScrollView, View, Dimensions } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Head from '../Components/Login/Head/index';
import Foot from '../Components/Login/Foot/index';
import * as ImagePicker from 'expo-image-picker';
import styled from 'styled-components/native'
import TextArea from 'react-native-textarea';
import Limit from '../Components/TopLimitScreen';
//ICONOS IMPORT......
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import DefImg from '../assets/Login/png/GreyBarkido.png';
//IMPORT COMPONENTS
import Button from '../Components/SignUp/Button/buttonUploadAnimal';
import ButonNext from '../Components/SignUp/Button/buttonNoAnimal';
import { GlobalContext } from '../provider';
import { Container, Text, ViewTitle } from '../Components/Login/styled';
import GoBack from '../Components/Menu/TurnBack';

import Selector from '../Components/SignUp/Selector/selector';
import SelectorType from '../Components/SignUp/Selector/selectorType';
import DefaultImageGos from '../assets/Gatigos.jpg'

export default (props) => {


    //const [data, setData] = useContext(GlobalContext);
    const [selectedImage, setSelectedImage] = useState(null);
    const [buttonSelected, setButtonSeclected] = useState("");

    const [animalInfo, setAnimalInfo] = useState({
        name: "",
        type: "",
        breed: "",
        description: "",
        photoUri: "",
        sex: "",
    })

    const setType = param => setAnimalInfo({ ...animalInfo, type: param });
    const setBreed = param => setAnimalInfo({ ...animalInfo, breed: param });


    const [date, setDate] = useState(new Date(1598051730000));
    const [show, setShow] = useState(false);

    const changeInfo = (info, value) => {
        setAnimalInfo({ ...animalInfo, [info]: value });
    }

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        if (Platform.OS === 'android') {
            setShow(false);
        }

        setDate(currentDate);

        console.log(date);

    }

    const activateCalendar = _ => {
        setShow(true);
    }

    const openImageAsync = async () => {
        let permision = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (permision.granted === false) {
            alert("Permiso requerido");
            return;
        }

        const pickResult = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            aspect: [4, 3]
        });

        if (!pickResult.cancelled) {
            //const uploadUrl = await uploadImageAsync(pickResult.uri);
            setAnimalInfo({ ...animalInfo, photoUri: pickResult.uri });
        } else {
            setAnimalInfo({ ...animalInfo, photoUri: DefaultImageGos });
        }
    }

    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <GoBack navigation={props.navigation} />
            <Limit />
            <Head />
            <ViewTitle>
                <Text>Háblanos de tu animal</Text>
            </ViewTitle>
            <ScrollView style={styles.scroll}>


                <View style={styles.body}>

                    <TouchableOpacity style={styles.addPhoto}
                        onPress={openImageAsync}
                    >
                        {animalInfo.photoUri == "" ? <DefaultImage source={DefImg} /> : <Image source={{
                            uri: animalInfo.photoUri
                        }} style={{ width: 190, height: 120, borderRadius: 10 }}></Image>
                        }
                    </TouchableOpacity>
                    <TextInput style={styles.enter}
                        placeholder="Nombre"
                        onChangeText={(e) => changeInfo("name", e)}
                    ></TextInput>
                    <TouchableOpacity onPress={() => activateCalendar()} style={styles.calendar}>
                        <Text2>Fecha de nacimiento</Text2>
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
                    <RowView>
                        <Text2>Sexo</Text2>
                        <View2 style={{ flexDirection: 'row' }}>
                            <TouchableOpacity style={buttonSelected == "male" ? styles.btnsPressed : styles.btns} onPress={() => { setAnimalInfo({ ...animalInfo, sex: "male" }); setButtonSeclected("male") }}>
                                <MaterialCommunityIcons name="gender-male" color={'#707070'} size={30} />
                            </TouchableOpacity>
                            <TouchableOpacity style={buttonSelected == "female" ? styles.btnsPressed : styles.btns} onPress={() => { setAnimalInfo({ ...animalInfo, sex: "female" }); setButtonSeclected("female") }}>
                                <MaterialCommunityIcons name="gender-female" color={'#707070'} size={30} />
                            </TouchableOpacity>
                        </View2>
                    </RowView>

                    <SelectorType onSelect={setType} />

                    {/* <Selector onSelect={setBreed} /> */}
                    <TextInput style={styles.enter}
                        placeholder="Raza"
                        onChangeText={(e) => changeInfo("breed", e)}
                    ></TextInput>



                    <TextArea
                        containerStyle={styles.description}
                        maxLength={400}
                        placeholder="Descripción (0/400)"
                        onChangeText={(e) => changeInfo("description", e)}
                    />
                    <Button text="Añadir otro animal" info={animalInfo} click={() => props.navigation.navigate("Háblanos de tu animal")} />
                    <ButonNext text="Siguiente" info={animalInfo} click={() => props.navigation.navigate("Bienvenido")} />
                </View>
                <Foot />
            </ScrollView>

        </View>
    );
}

export const RowView = styled.View`
    width: 100%;
    margin:20px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    border-bottom-width: 1px;
    border-color: lightgrey;
`
export const View2 = styled.View`
`
export const Text2 = styled.Text`
    color: gray;
    padding: 5px;
`
export const DefaultImage = styled.Image`
    width:60%;
    height:80%;
`
const styles = StyleSheet.create({
    scroll: {
        backgroundColor: '#FFFFFF',
    },
    body:{
        padding: Dimensions.get("screen").width*0.085,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    addPhoto: {
        width: 190,
        height: 120,
        margin: 30,
        borderColor: 'lightgrey',
        borderWidth: 1,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
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
    calendar: {
        width: '100%',
        height: 40,
        borderBottomWidth: 1,
        borderColor: 'lightgrey',
        justifyContent: 'center',
    },
    description: {
        width: '100%',
        height: 120,
        borderWidth: 1,
        borderColor: 'lightgrey',
        marginBottom: 20,
    },
    btns: {
        borderRadius: 10,
        padding: 1,
        marginRight: 10,
        marginBottom: 1,
    },
    btnsPressed: {
        borderRadius: 10,
        padding: 1,
        marginRight: 10,
        marginBottom: 1,
        backgroundColor: '#ffc500',
    },
})