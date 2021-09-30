import React from 'react';
import {Container, Button, Title, ImageView, Text, TextDescription, Box, ViewTitle, Body} from './styled'

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Limit from '../TopLimitScreen'
import GoBack from './GoBack'


export default (props) => {
    //podem rebre paràmetres des d'una altre pantalla, doncs a banda de l'atribut per defecte Navigation, hi un altre que es route, amb aquest, podem passar-li tot un Objecte amb dif coses. :)

    // const params = props.route.params;
    // alert(params.NomExacte0 + " - " + params.NomExacte1);

    //que els rebem des de:
    // props.navigation.navigate("Configuration", {
    //     NomExacte0: 'strings',
    //     NomExacte1: xNumber,
    // })

    return(
        <Container>
            <Limit/>
            <GoBack navigation={props.navigation} />
            <ViewTitle><Title>Configuración</Title></ViewTitle>
            <Body style={{alignItems: "flex-start"}}>
            <Button click={() => props.navigation.navigate("Edit Animal Profile")}>
                <ImageView> 
                    <MaterialCommunityIcons name="pencil-outline" color="#ffc500" size={35} />
                </ImageView>
                <Box>
                    <Text>Editar el Perfil de tu Animal</Text>
                    <TextDescription>Editar foto, descripción...</TextDescription>
                </Box>
            </Button>
            <Button onPress={() => props.navigation.navigate("Edit Own Profile")}>
                <ImageView>
                    <MaterialCommunityIcons name="account-outline" color="#ffc500" size={35} />
                </ImageView>
                <Box>
                    <Text>Editar Tu Perfil</Text>
                    <TextDescription>Editar foto, descripción...</TextDescription>
                </Box>
            </Button>
            <Button click={() => props.navigation.navigate("Create Profile")}>
                <ImageView>
                    <MaterialCommunityIcons name="paw" color="#ffc500" size={35} />
                </ImageView>
                <Box>
                    <Text>Crear nuevo perfil animal</Text>
                    <TextDescription>Añadir información</TextDescription>
                </Box>
            </Button>
            <Button onPress={() => props.navigation.navigate("Notifications Config")}>
                <ImageView>
                    <MaterialCommunityIcons name="bell-ring-outline" color="#ffc500" size={35} />
                </ImageView>
                <Box>
                    <Text>Notificaciones</Text>
                    <TextDescription>Tonos de mensajes y vibración</TextDescription>
                </Box>
            </Button>
            <Button onPress={() => props.navigation.navigate("FQ")}>
                <ImageView>
                    <MaterialCommunityIcons name="forum-outline" color="#ffc500" size={35} />
                </ImageView>
                <Box>
                    <Text>Preguntas Frecuentes</Text>
                </Box>
            </Button>
            <Button onPress={() => props.navigation.navigate("About Us")}>
                <ImageView>
                    <MaterialCommunityIcons name="hand-heart" color="#ffc500" size={35} />
                </ImageView>
                <Box>
                    <Text>About Us</Text>
                    <TextDescription>Misión y visión</TextDescription>
                </Box>
            </Button>
            <Button onPress={() => props.navigation.navigate("Privacy")}>
                <ImageView>
                    <MaterialCommunityIcons name="lock-outline" color="#ffc500" size={35} />
                </ImageView>
                <Box>
                    <Text>Privacidad</Text>
                    <TextDescription>Ajustes de visualización</TextDescription>
                </Box>
            </Button>
            <Button onPress={() => props.navigation.navigate("Others Options")}>
                <ImageView>
                    <MaterialCommunityIcons name="account-cog-outline" color="#ffc500" size={35} />
                </ImageView>
                <Box>
                    <Text>Otras opciones</Text>
                    <TextDescription>Ajustes de usuario</TextDescription>
                </Box>
            </Button>
            </Body>            
        </Container>

    )
} 