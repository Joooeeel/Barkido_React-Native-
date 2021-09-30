import React, { useState }  from 'react';
import Limit from '../TopLimitScreen'
import GoBack from './GoBack'
import {Container, Title, Body, Text, ViewTitle} from './styled'
import {StyleSheet, Image, TouchableOpacity, TextInput, View, Linking} from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


export default (props)=>{
    const [locActive, setLocActive] = useState(false);
    const [entityActive, setEntityActive] = useState(false);
    const [alertActive, setAlertActive] = useState(false);
    const [userActive, setUserActive] = useState(false);
    const [friendsActive, setFriendsActive] = useState(false);
    const [premiumActive, setPremiumActive] = useState(false);

    const [locQ1Active, setLocQ1Active] = useState(false);
    const [locQ2Active, setLocQ2Active] = useState(false);
    const [locQ3Active, setLocQ3Active] = useState(false);
    const [alertQ1Active, setAlertQ1Active] = useState(false);
    const [alertQ2Active, setAlertQ2Active] = useState(false);
    const [alertQ3Active, setAlertQ3Active] = useState(false);
    const [userQ1Active, setUserQ1Active] = useState(false);
    const [friendsQ1Active, setFriendsQ1Active] = useState(false);
    const [friendsQ2Active, setFriendsQ2Active] = useState(false);
    const [friendsQ3Active, setFriendsQ3Active] = useState(false);
    const [friendsQ4Active, setFriendsQ4Active] = useState(false);


    return (
        <Container>
            <Limit/>
            <GoBack navigation={props.navigation} />
            <ViewTitle>
                <Title>Preguntas frecuentes</Title> 
            </ViewTitle>
                       
            <View style={{padding: 35}}>
                <TouchableOpacity style={styles.rowCont} onPress={()=>setLocActive(!locActive)}>
                    <Text>Localización</Text>
                    <MaterialCommunityIcons name="bat" color="#ffc500" size={30} />
                </TouchableOpacity>
                <View style={{display: locActive ? "flex":"none", flex:1, paddingLeft:30}}>
                    <TouchableOpacity style={styles.rowCont} onPress={()=>setLocQ1Active(!locQ1Active)}>
                        <Text>¿Puedo desactivar mi localización?</Text>
                        <MaterialCommunityIcons name="bat" color="#ffc500" size={30} />
                    </TouchableOpacity>
                    <View style={{display: locQ1Active ? "flex":"none", flex:1, marginLeft: 20, marginBottom:20}}>
                        <Text>Sí, desde el menú de Ajustes de la misma aplicación podrás encontrar la opción para activar/desactivar la geolocalicación. También lo puedes hacer desde los ajustes de tu dispositivo móvil</Text>
                    </View>
                    <TouchableOpacity style={styles.rowCont} onPress={()=>setLocQ2Active(!locQ2Active)}>
                        <Text>¿Quienes pueden ver mi localización?</Text>
                        <MaterialCommunityIcons name="bat" color="#ffc500" size={30} />
                    </TouchableOpacity>
                    <View style={{display: locQ2Active ? "flex":"none", flex:1, marginLeft: 20, marginBottom:20}}>
                        <Text>Tu localización se mostrará a todas aquellas personas que estén en el mismo parque o zona habilitada por nosotros. Fuera de esta zona, sólamente los perfiles que has añadido como amistades podrán saber si estas en un parque, pero sólo si tu estas dentro de éste.</Text>
                    </View>
                    <TouchableOpacity style={styles.rowCont} onPress={()=>setLocQ3Active(!locQ3Active)}>
                        <Text>¿Cuáles son los puntos de encuentro?</Text>
                        <MaterialCommunityIcons name="bat" color="#ffc500" size={30} />
                    </TouchableOpacity>
                    <View style={{display: locQ3Active ? "flex":"none", flex:1, marginLeft: 20, marginBottom:20}}>
                        <Text>Éstos son delimitados por el equipo Barkido, de manera que serán en su gran mayoría: parques de la ciudad y espacios abiertos.</Text>
                    </View>
                </View>

                <TouchableOpacity style={styles.rowCont} onPress={()=>setEntityActive(!entityActive)}>
                    <Text>Protectoras</Text>
                    <MaterialCommunityIcons name="bat" color="#ffc500" size={30} />
                </TouchableOpacity>
                <View style={{display: entityActive ? "flex":"none", flex:1, paddingLeft:30}}>
                    <Text>Próximamente, Barkido pondrá a disposición perfiles de entidades como protectoras o refugios para que puedan tener una vía más accesible hacia las personas y que adoptar sea fácil y de una manera sencilla.</Text>
                    <Text style={{marginTop: 10, marginBottom:10}}>Las entidades sólo podrán comunicarse con el usuario o la usuaria una vez le hayan abierto una conversación, de tal forma que contestarán dirigiendose a la persona interesada.</Text>
                </View>

                <TouchableOpacity style={styles.rowCont} onPress={()=>setAlertActive(!alertActive)}>
                    <Text>Alertas</Text>
                    <MaterialCommunityIcons name="bat" color="#ffc500" size={30} />
                </TouchableOpacity>
                <View style={{display: alertActive ? "flex":"none", flex:1, paddingLeft:30}}>
                    <TouchableOpacity style={styles.rowCont} onPress={()=>setAlertQ1Active(!alertQ1Active)}>
                        <Text>¿Cómo puedo crear una alerta?</Text>
                        <MaterialCommunityIcons name="bat" color="#ffc500" size={30} />
                    </TouchableOpacity>
                    <View style={{display: alertQ1Active ? "flex":"none", flex:1, marginLeft: 20, marginBottom:20}}>
                        <Text>Anunciar una pérdida, ya sea tanto para encontrar a tu amiga/o querida/o o para ayudar a encontrar a un animalito ajeno, es muy facil!</Text>
                        <Text style={{marginTop: 10, marginBottom:10}}>En la Aplicación encontrarás en el menú principal el apartado de alertas. En éste veras un botón amarillo de forma redonda y un signo positivo, con el que podrás crear y añadir tu anuncio. </Text>
                    </View>

                    <TouchableOpacity style={styles.rowCont} onPress={()=>setAlertQ2Active(!alertQ2Active)}>
                        <Text>¿Cuanto tiempo dura una alerta?</Text>
                        <MaterialCommunityIcons name="bat" color="#ffc500" size={30} />
                    </TouchableOpacity>
                    <View style={{display: alertQ2Active ? "flex":"none", flex:1, marginLeft: 20, marginBottom:20}}>
                        <Text>Encontrar un animalito a veces es rápido y desafortunadamente hay otras veces que no es tan fácil.</Text>
                        <Text>Barkido intentará mantener actualizadas las alertas, de manera que estaremos en contacto con el anunciante para saber el progreso de la búsqueda.</Text>
                        <Text>Cuando un animal ha sido encontrado, el anunciante podrá eliminar el anuncio con un sólo paso!</Text>
                    </View>
                    <TouchableOpacity style={styles.rowCont} onPress={()=>setAlertQ3Active(!alertQ3Active)}>
                        <Text>¿Cómo eliminar un anuncio propio?</Text>
                        <MaterialCommunityIcons name="bat" color="#ffc500" size={30} />
                    </TouchableOpacity>
                    <View style={{display: alertQ3Active ? "flex":"none", flex:1, marginLeft: 20, marginBottom:20}}>
                        <Text>Si has encontrado a tu animal de compañía o simplemente quieres eliminar el anuncio para que no esté públicado, has de ir al apartado de alertas, buscar tu anuncio y darle al botón de eliminar. Te haremos unas preguntas para evitar que elimines tu anuncio por error.</Text>
                    </View>
                </View>

                <TouchableOpacity style={styles.rowCont} onPress={()=>setUserActive(!userActive)}>
                    <Text>Usuario</Text>
                    <MaterialCommunityIcons name="bat" color="#ffc500" size={30} />
                </TouchableOpacity>
                <View style={{display: userActive ? "flex":"none", flex:1, paddingLeft:30}}>
                    <TouchableOpacity style={styles.rowCont} onPress={()=>setUserQ1Active(!userQ1Active)}>
                        <Text>¿Existe algun perfil del usuario?</Text>
                        <MaterialCommunityIcons name="bat" color="#ffc500" size={30} />
                    </TouchableOpacity>
                    <View style={{display: userQ1Active ? "flex":"none", flex:1, marginLeft: 20, marginBottom:20}}>
                        <Text>Nuestro enfoque es para y por los animales.</Text>
                        <Text style={{marginTop: 10, marginBottom:10}}>Barkido quiere proteger toda información detallada del usuario de manera que la importancia recaiga en el animal.</Text>
                    </View>
                    {/* <TouchableOpacity style={styles.rowCont} onPress={()=>setUserQ2Active(!userQ2Active)}>
                        <Text></Text>
                        <MaterialCommunityIcons name="bat" color="#ffc500" size={30} />
                    </TouchableOpacity>
                    <View style={{display: userQ2Active ? "flex":"none", flex:1, marginLeft: 20, marginBottom:20}}>
                        <Text></Text>
                    </View>
                    <TouchableOpacity style={styles.rowCont} onPress={()=>setUserQ3Active(!userQ3Active)}>
                        <Text></Text>
                        <MaterialCommunityIcons name="bat" color="#ffc500" size={30} />
                    </TouchableOpacity>
                    <View style={{display: userQ3Active ? "flex":"none", flex:1, marginLeft: 20, marginBottom:20}}>
                        <Text></Text>
                    </View> */}
                </View>

                <TouchableOpacity style={styles.rowCont} onPress={()=>setFriendsActive(!friendsActive)}>
                    <Text>Amistades</Text>
                    <MaterialCommunityIcons name="bat" color="#ffc500" size={30} />
                </TouchableOpacity>
                <View style={{display: friendsActive ? "flex":"none", flex:1, paddingLeft:30}}>
                    <TouchableOpacity style={styles.rowCont} onPress={()=>setFriendsQ1Active(!friendsQ1Active)}>
                        <Text>¿Cómo añado a una amistad?</Text>
                        <MaterialCommunityIcons name="bat" color="#ffc500" size={30} />
                    </TouchableOpacity>
                    <View style={{display: friendsQ1Active ? "flex":"none", flex:1, marginLeft: 20, marginBottom:20}}>
                        <Text>Cuando te encuentres en una zona habilitada de Barkido, podrás ver las personas que hay a tu alrededor en el mapa. En el mapa verás que aparecerán la foto de cada animal que tenga un perfil en Barkido.</Text>
                        <Text>Si haces click en la foto del animal, aparecerá una pequeña información de ése perfil, y ahí encontrarás la opción de solicitud de amistad.</Text>
                    </View>
                    <TouchableOpacity style={styles.rowCont} onPress={()=>setFriendsQ2Active(!friendsQ2Active)}>
                        <Text>¿Mis amistades pueden ver dónde estoy?</Text>
                        <MaterialCommunityIcons name="bat" color="#ffc500" size={30} />
                    </TouchableOpacity>
                    <View style={{display: friendsQ2Active ? "flex":"none", flex:1, marginLeft: 20, marginBottom:20}}>
                        <Text>Sólo podrán verte si estás dentro de una zona habilitada por Barkido y si tienes activada tu visibilidad.</Text>
                        <Text style={{marginTop: 10, marginBottom:10}}>En ningún momento daremos información de dónde te encuentras exactamente.</Text>
                    </View>
                    <TouchableOpacity style={styles.rowCont} onPress={()=>setFriendsQ3Active(!friendsQ3Active)}>
                        <Text>¿Cómo puedo eliminar una amistad?</Text>
                        <MaterialCommunityIcons name="bat" color="#ffc500" size={30} />
                    </TouchableOpacity>
                    <View style={{display: friendsQ3Active ? "flex":"none", flex:1, marginLeft: 20, marginBottom:20}}>
                        <Text>Si visitas el perfil de tu amistad, podrás eliminar el vínculo entre perfiles.</Text>
                        <Text>Una vez ya no sois amistad en Barkido, no saldrán tus publicaciones en el feed del otro usuario al igual que tampoco se mostrarán las suyas en tu muro de noticias.</Text>
                    </View>
                    <TouchableOpacity style={styles.rowCont} onPress={()=>setFriendsQ4Active(!friendsQ4Active)}>
                        <Text>Bloquear o denunciar a otro usuario</Text>
                        <MaterialCommunityIcons name="bat" color="#ffc500" size={30} />
                    </TouchableOpacity>
                    <View style={{display: friendsQ4Active ? "flex":"none", flex:1, marginLeft: 20, marginBottom:20}}>
                        <Text>Barkido es una aplicación para crear una comunidad enfocada en el Bienestar Animal.</Text>
                        <Text style={{marginTop: 10, marginBottom:10}}>Si deseas bloquear o silenciar a un usuario, podrás hacerlo visitando su perfil y verás en la parte superior un menú de opciones.</Text>
                        <Text style={{marginTop: 10, marginBottom:10}}>Cuando silencias a una amistad, sus publicaciones no aparecerán en tu apartado del feed, pero tus publicaciones seguirán siendo visuales en el de la otra persona</Text>
                        <Text style={{marginTop: 10, marginBottom:10}}>Cuando bloqueas a una amistad, a diferencia de la opción eliminar la amistad, el perfil de tu animalito ya no será visible para este usuario y tampoco aparecerá tu localizacion ni foto de perfil si os encontrais en el mismo lugar.</Text>
                        <Text style={{marginTop: 10, marginBottom:10}}>Si por algún motivo ves que lo mejor es denunciar a un usuario, nosotros recibiremos tu solicitud y estudiaremos el caso para poder actuar y agradecemos tu colaboración.</Text>
                        <Text style={{marginTop: 10, marginBottom:10}}>En ningún momento notificaremos al usuario sobre tus acciones.</Text>
                    </View>
                </View>

                <TouchableOpacity style={styles.rowCont} onPress={()=>setPremiumActive(!premiumActive)}>
                    <Text>Premium</Text>
                    <MaterialCommunityIcons name="bat" color="#ffc500" size={30} />
                </TouchableOpacity>
                <View style={{display: premiumActive ? "flex":"none", flex:1, paddingLeft:30}}>
                    <Text>Barkido está creciendo y trabajando para poderte ofrecer una mejor experiencia.</Text>
                    <Text>Para más información visitanos en nuestra página web</Text>
                </View>
            </View>
        </Container>
    )
}

export const styles = StyleSheet.create({
    rowCont:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 18,
    }
})