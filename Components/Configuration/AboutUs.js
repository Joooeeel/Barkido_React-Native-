import React, { useCallback }  from 'react';
import Limit from '../TopLimitScreen'
import GoBack from './GoBack'
import {Container, Title, Body, ViewTitle} from './styled'
import {StyleSheet, Image, TouchableOpacity, TextInput, View, Linking, Text} from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const instagramURL = "https://www.instagram.com/barkido.app/";
const twitterURL = "https://twitter.com/barkido_app";
const facebookURL = "https://www.facebook.com/Barkido-App-107314781533555";
const barkidoWeb = "https://www.barkido.com";
const OpenURLButton = ({url, children}) => {
    const handlePress = useCallback(async () =>  {
        const supported = await Linking.canOpenURL(url);
        if (supported) {
        await Linking.openURL(url);
        }
    }, [url]);
    return (
        <TouchableOpacity style={styles.link} onPress={handlePress}>
            <MaterialCommunityIcons name={children} color="#ffc500" size={35} />
        </TouchableOpacity>
    )
};
const OpenURLweb = ({url, children}) => {
    const handlePress = useCallback(async () =>  {
        const supported = await Linking.canOpenURL(url);
        if (supported) {
        await Linking.openURL(url);
        }
    }, [url]);
    return (
        <TouchableOpacity onPress={handlePress} style={{flexDirection: 'row', alignItems:'center'}}>
            <MaterialCommunityIcons name={children} color="#ffc500" size={35} />
            <Text style={{color:"#ffc500", fontSize:20, marginLeft: 5}}>barkido</Text>
        </TouchableOpacity>
    )
};
export default (props)=>{
    
    return (
        <Container>
            <Limit/>
            <GoBack navigation={props.navigation} />
            <ViewTitle>
                <Title>About us</Title>
            </ViewTitle>
            
            <Body>
                <Text>BARK te ofrece la posibilidad de pertenecer a una nueva comunidad de personas con animales de compañía. </Text>
                <Text>¡Aquí tú y tus animales podéis conectar con otros usuarios, evitar perderos y mucho más!</Text>
                <Text/>
                <Text>BARK no es posible sin usuarios como tú y tus animales, es por ello, por lo que la igualdad animal y la interacción positiva son la base del proyecto.</Text>
                <View style={styles.view}>
                    <Text>CONTACTO</Text>
                    <Text/>
                    <Text>info.barkido@gmail.com</Text>
                    <View style={styles.row}>
                        <OpenURLButton url={instagramURL} children="instagram"/>
                        <View style={styles.line}/>
                        <OpenURLButton url={twitterURL} children="twitter"/>
                        <View style={styles.line}/>
                        <OpenURLButton url={facebookURL} children="facebook"/>
                        <View style={styles.line}/>
                        <OpenURLweb url={barkidoWeb} children="web"/>
                    </View>
                </View>
                
                <TouchableOpacity>
                    
                </TouchableOpacity>
            </Body>
        </Container>
    )
}
const styles = StyleSheet.create({
    view:{paddingTop:40, width:"100%"},
    row:{flexDirection: "row", marginBottom:30, marginTop:30, justifyContent:"space-between"},
    link:{width:35, height:35},
    line:{borderWidth:0.5, borderColor: "#abd7e3", height:'50%', alignSelf:'center'},
})








// import React, { useCallback } from "react";
// import { Alert, Button, Linking, StyleSheet, View, Text, SafeAreaView } from "react-native";
// const supportedURL = "https://www.educba.com/";
// const unsupportedURL = "sms: +123456789";
// const OpenURLButton = ({url, children}) => {
//     const handlePress
//     = useCallback(async () =>
//     {
//     const supported = await Linking.canOpenURL(url);
//     if (supported) {
//     await Linking.openURL(url);
//     }
//     }, [url]);
//     return <Button title={children} onPress={handlePress} color= "#922ce6"/>;
// };
// const Separator = () => (<View style={styles.separator} />);

// const App = () => {
//     return (
//         <SafeAreaView style={styles.container}>
//             <View>
//                 <Text style={styles.title}>
//                     For Getting More Information about Us:
//                 </Text>
//                 <OpenURLButton url={supportedURL}>Click to Visit our Website</OpenURLButton>
//             </View>
//             <Separator />
//             <View>
//                 <Text style={styles.title}>
//                     For Getting Assistance over Chat:
//                 </Text>
//                 <OpenURLButton url={unsupportedURL}>Click to Send us SMS</OpenURLButton>
//             </View>
//         </SafeAreaView>
//     );
// };


// const styles = StyleSheet.create({
// container: { flex: 1
// , justifyContent: "center"
// , alignItems: "center"
// , backgroundColor:"#faed75"
// },
// title: {
// textAlign: 'center',
// marginVertical: 10,
// },
// separator: {
// marginVertical: 200,
// borderBottomColor: '#d94e9a',
// borderBottomWidth: StyleSheet.hairlineWidth,
// },
// });
// export default  App;