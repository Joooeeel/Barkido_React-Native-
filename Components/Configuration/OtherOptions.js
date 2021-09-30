import React, {useState, useContext, useEffect} from 'react';
import {StyleSheet, Image, TouchableOpacity, TextInput, Text, View} from 'react-native'
import Limit from '../TopLimitScreen'
import GoBack from './GoBack'
import {Container, Title, Body, ViewTitle} from './styled'

import { firebase } from '../../database/firebase';
import { GlobalContext } from '../../provider';


export default (props)=>{
    
    const [data, setData] = useContext(GlobalContext);
    const [user, setUser] = useState({});
    useEffect(() => {

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

    }, []);

    return (
        <View style={{flex: 1, backgroundColor: "white"}}>
            <Limit/>
            <GoBack navigation={props.navigation} />
            
            <ViewTitle><Title>Otras opciones</Title></ViewTitle>
            <Container>
            
                <Body>
                <Text style={{fontWeight: "bold", width: "100%"}}>E-mail actual:</Text>
                {user && 
                    <Text style={{width: "100%", marginBottom: 20, fontStyle: 'italic'}}>{user.mail}</Text>
                }
                
                {/* <Text style={{width: "100%", marginBottom: 20}}>maaaaiillll</Text> */}
                <TextInput style={styles.enter}
                    placeholder="Nueva dirección de e-mail"
                    // onChangeText={(e) => changeInfo("name", e)}
                />
                <TouchableOpacity style={styles.button} text="Cambiar email">
                    <Text style={styles.text}>Cambair email</Text> 
                </TouchableOpacity>

                <TextInput style={styles.enter}
                    placeholder="Contraseña actual"
                    // onChangeText={(e) => changeInfo("userName", e)}
                />
                <TextInput style={styles.enter}
                    placeholder="Nueva contraseña"
                    // onChangeText={(e) => changeInfo("userName", e)}
                />
                <TextInput style={styles.enter}
                    placeholder="Confirmar contraseña"
                    // onChangeText={(e) => changeInfo("userName", e)}
                />
                <TouchableOpacity style={styles.button} text="Cambiar contraseña">
                    <Text style={styles.text}>Cambair contraseña</Text> 
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonClose} text="Cerrar Sesion"
                    onPress={ () => {
                        firebase.auth().signOut().then(() => {
                            console.log('signed out');
                            setData({ ...data, id: "", isLogged: false });
                        }).catch((error) => {
                            console.log(error);
                        })
                        props.navigation.navigate("Login")
                    }             
                    }
                >
                    <Text style={{color: "#ffc500"}}>Cerrar Sesion</Text> 
                </TouchableOpacity>

                <TouchableOpacity text="Eliminar perfil">
                    <Text style={{fontWeight: "bold"}}>Eliminar Perfil</Text> 
                </TouchableOpacity>
                
                
            </Body>
            </Container>
        </View>
    )
}

const styles = StyleSheet.create({
    enter: {
        width: "100%",
        height: 40,
        borderBottomWidth: 1,
        borderColor: 'lightgrey',
        marginBottom: 20,
        padding: 5,
        paddingBottom:15,
        alignItems: 'center',
    },
    button: {
        width: 200,
        height: 48,
        backgroundColor: "#ffc500",
        borderRadius:  100,
        padding:10,
        marginBottom: 60,
        alignItems: "center",
        justifyContent:"center",
    },
    buttonClose: {
        width: 200,
        height: 48, 
        borderColor:"#ffc500",
        borderRadius:  100,
        borderWidth:1,
        padding:10,
        margin: 25,
        alignItems: "center",
        justifyContent:"center",
    },
    text:{
        color: "white",
    }
});