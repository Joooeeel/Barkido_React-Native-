import * as React from 'react';
import { useContext } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import ImgHeader from './Resources/golden.jpg'
import returnIcon from './Resources/left-arrow.png'
import configIcon from './Resources/settings.png'
import humanImage from './Resources/profile-img.jpg'
import cameraIcon from './Resources/camera.png'
import firendsIcon from './Resources/paw.png'
import { Dimensions } from 'react-native';
import { useState } from 'react'
import { HeadImg, HeadProfile, Container, Return, ReturnIconContainer, ConfigIcon, ConfigIconContainer, HumanImageContainer, HumanImage, MiddlerContainer, MiddlerBoxL, MiddlerBoxC, MiddlerBoxR, CameraIcon, FriendsIcon, MiddlerBoxContainer, FriendsNumber, ProfileName, MainTextContainer, MainName, GenderImg, Years, MainText, DisplayFlex} from './styled'
import male from './Resources/male.png'
import female from './Resources/female.png'
import golden2 from './Resources/golden2.jpg'
import PhotoAnimal from '../PhotoComp/photo'

//.......Imports necessaris per pintar usuari
import { getUserById } from '../Firebase/consults';
import { GlobalContext } from '../../provider'; //ContextApi import
/*
Quan executis la App, comença sempre pel mapa, que es necessari per carregar bé lo del firebase. Ja que pillem tota la info alla, ja que quan fem el loggin o registre ja ens vindrà la info donada des de la apgina principal, que en el cas de la nostre app serà el mapa. i ho passarem a totes les pantalles amb un useContext, que estarà implementat més abaix

Per accedir a la info del context és data.user.[part del objecte que vulguis veure], si fas un console.log(data) veuras com trona el objecte.

T'he deixat un exemple amb el nom del animal i el userName.
*/
export default () => {
    const screen = Dimensions.get("screen");
    const [friendsNumber, setFriendsNumber] = useState(80);
    const [userName, setUserName] = useState('@sdafs');
    const [animalName, setAnimalName] = useState('sdafsd');
    
    const [years, setYears] = useState('');
    const [breed, setBreed] = useState('');
    const [mainText, setmainText] = useState('Lorem ipsum dolor sit amet consectetur adipiscing elit nam suspendisse justo est elementum, ad natoque fames et maecenas malesuada curabitur ultricies commodo potenti rutrum orci.');
    
    

    //declaració del useContext de la app
    const [data, setData] = useContext(GlobalContext);
    
    
   
        
    
    return (
        
        <Container
            ScreenWidth={screen.width}
        >
            <HeadProfile>
                <HeadImg
                    source={ImgHeader}
                    ScreenHeight={screen.height}
                />
                
                <ReturnIconContainer>
                    <Return
                        source={returnIcon}
                        ScreenWidth ={screen.width}
                        ScreenHeight ={screen.height}
                    />
                </ReturnIconContainer>

                <ConfigIconContainer>
                    <ConfigIcon
                        source={configIcon}
                        ScreenWidth ={screen.width}
                        ScreenHeight ={screen.height}
                    />
                </ConfigIconContainer>

                <HumanImageContainer>

                    <HumanImage
                        source={humanImage}  //recoger del Servidor 
                    />
                </HumanImageContainer>
                <MiddlerContainer>
                <MiddlerBoxContainer>
                    <MiddlerBoxL >
                        <CameraIcon
                            source={cameraIcon}
                        />
                    </MiddlerBoxL>
                    <MiddlerBoxC>
                        <FriendsIcon
                            source={firendsIcon}
                        />
                        <FriendsNumber> {data.user.friendsNumb} </FriendsNumber>
                    </MiddlerBoxC>
                    <MiddlerBoxR>
                        <ProfileName>{data.user.userName}</ProfileName>
                    </MiddlerBoxR>
                </MiddlerBoxContainer>
            </MiddlerContainer>

            </HeadProfile>
            

            <MainTextContainer>

                <MainName>{data.user?.animals[0]?.name} { data.user?.animals[0]?.sex == 'male'? <GenderImg source={male} />  :  <GenderImg source={female} /> }
                </MainName>
                
                <Years>{data.user?.animals[0]?.animalOld + ' ' + 'Años'} | {data.user?.animals[0]?.breed}</Years>
                <MainText>{mainText}</MainText>

            </MainTextContainer>    
               
                    <PhotoAnimal></PhotoAnimal>
                    <PhotoAnimal></PhotoAnimal>
                    <PhotoAnimal></PhotoAnimal>
                    <PhotoAnimal></PhotoAnimal>
                    <PhotoAnimal></PhotoAnimal>
                    <PhotoAnimal></PhotoAnimal>
                    <PhotoAnimal></PhotoAnimal>
                    <PhotoAnimal></PhotoAnimal>
 
        </Container>
        
    );
};


