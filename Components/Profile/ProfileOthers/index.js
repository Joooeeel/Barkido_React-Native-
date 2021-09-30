import React, { useState, useContext, useEffect } from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import GoBack from '../../TurnBack/index'
import { Container, Head, View, ButtonHead, Image, TopContainer, Button, Line, Text, Body, InfoContainer, NameText, PhotosCampContainer, TopBody, LineH, PhotoHumanView, CircleContainer, HumanImage, ViewContainer } from './styled';
import PhotoCamp from '../Photos';
import ProfileImage from '../Resources/golden.jpg';
import HeartImage from '../Resources/Heart.png';
import PawImage from '../Resources/PawFriend.png';
import Options from '../Resources/vertical-dots.png';
import GenderImg from '../Resources/male.png';
import Limit from '../../TopLimitScreen'

import Dropper from './DropDown/index';
import ButtonOption from './DropDown/button';
import Pop from './Popups';
import DenouncedPop from './Popups/contents/DenouncedOptions';
import FirstOptionsPop from './Popups/contents/FirstOptions';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { GlobalContext } from '../../../provider';

import { firebase } from '../../../database/firebase';

const MUTED = 'Muted', BLOCKED = 'Blocked', DENOUNCED = 'Denounced';
const textsPop = {
    toMute: {
        button: 'Silenciar',
        question: '¿Desea silenciar a este usuario?',
        description: 'Para dejar de tener a este usuario silenciado, vuelva a clicar en su perfil'
    },
    toBlock: {
        button: 'Bloquear',
        question: '¿Desea bloquear a este usuario?',
        description: 'No podrá ver dónde te encuentras ni tus publicaciones'
    },
    toDenounce: {
        button: 'Denunciar',
        question: '¿Desea denunciar a este usuario?',
        description: 'Tu denuncia será anónima. Si crees que te puedes encontrar en peligro, llama a la policia directamente.'
    }
}

export default ({ route, navigation }) => {

    const { userId } = route.params;


    const [dimensions, setDimensions] = useState({ x: 0, y: 0, width: 0, height: 0 });
    const [dropperIsActive, setDropperIsActive] = useState(false);
    const [popupIsActive, setPopupIsActive] = useState(false);
    const [userState, setUserState] = useState(' ');
    const [nextState, setNextState] = useState(' ');
    const [currentTextPop, setCurrentTextPop] = useState({});

    const invokeDropper = () => { setDropperIsActive(!dropperIsActive) };
    const changeState = (state) => { setUserState(state); }

    const showPopup = (state) => {
        setPopupIsActive(!popupIsActive);
        setDropperIsActive(!dropperIsActive);
        setNextState(state);

        if (state === MUTED) setCurrentTextPop(textsPop.toMute);
        else if (state === BLOCKED) setCurrentTextPop(textsPop.toBlock);
        else setCurrentTextPop(textsPop.toDenounce);
    };

    const [data, setData] = useContext(GlobalContext);
    const [gender, setGender] = useState(GenderImg);
    const [years, setYears] = useState('3');
    const [breed, setBreed] = useState('Golden Retriever');
    const [mainText, setmainText] = useState('Lorem ipsum dolor sit amet consectetur adipiscing elit nam suspendisse justo est elementum, ad natoque fames et maecenas malesuada curabitur ultricies commodo potenti rutrum orci.');

    const amountElements = 5;
    const elements = [amountElements];
    for (let i = 0; i < amountElements; i++) elements[i] = <PhotoCamp key={i} />

    const [user, setUser] = useState({});
    const [animals, setAnimals] = useState([]);
    const [post, setPost] = useState([]);

    let currentAnimal = 0;

    useEffect(() => {
        (async () => {
            await firebase
                .firestore()
                .collection('users')
                .doc(userId)
                .get()
                .then((doc) => {
                    setUser(doc.data());
                }).catch(e => {
                    console.log(e);
                })
        }
        )();

        (async () => {
            await firebase
                .firestore()
                .collection('users')
                .doc(userId)
                .collection('animals')
                .onSnapshot((animals) => {
                    const animTemp = [];
                    animals.forEach((docu) => {
                        animTemp.push(docu.data());
                    })
                    setAnimals(animTemp);
                }).catch(e =>
                    console.log(e)
                )
        }
        )();

        (async () => {
            await firebase
                .firestore()
                .collection('users')
                .doc(userId)
                .collection('publications')
                .orderBy('createdAt', 'desc')
                .onSnapshot((publications) => {
                    const pubTemp = [];
                    publications.forEach((docu) => {
                        pubTemp.push(docu.data());
                    })
                    setPost(pubTemp);
                }).catch(e =>
                    console.log(e)
                )
        }
        )();
    }, [])

    console.log(animals);
    console.log('-----------------')
    console.log(post)

    return (
        <ViewContainer>
        <Limit />
        <Container>
           
            <GoBack navigation={navigation} />
            <Pop isActive={popupIsActive}>
                <FirstOptionsPop
                    setIsActive={setPopupIsActive}
                    setUserState={changeState}
                    nextState={nextState}
                    currentText={currentTextPop}
                    thisContentIsVisible={userState === DENOUNCED}
                />
                <DenouncedPop
                    setPopupIsActive={setPopupIsActive}
                    thisContentIsVisible={userState === DENOUNCED}
                    setUserState={setUserState}
                />
            </Pop>
            <Head source={animals.length > 0 ? { uri: animals[currentAnimal].photoPortada } : ProfileImage} >
                <View>
                    <ButtonHead
                        onPress={() => invokeDropper()}
                        onLayout={(event) => {
                            const { x, y, width, height } = event.nativeEvent.layout;
                            setDimensions({ x: x, y: y, width: width, height: height });
                        }}
                    >
                        <Image source={Options} resizeMode='contain' />
                    </ButtonHead>

                    {/* onPress={e => dropperIsActive ? setDropperIsActive(!dropperIsActive) : null} */}
                    <Dropper
                        isActive={dropperIsActive}
                        x={dimensions.x}
                        y={dimensions.y}
                        parentWidth={dimensions.width}
                        parentHeight={dimensions.height}
                    >
                        <ButtonOption
                            click={showPopup}
                            state={MUTED}
                        >
                            Silenciar en el Feed
                        </ButtonOption>
                        <LineH />
                        <ButtonOption
                            click={showPopup}
                            state={BLOCKED}
                        >
                            Bloquear usuario
                        </ButtonOption>
                        <LineH />
                        <ButtonOption
                            click={showPopup}
                            state={DENOUNCED}
                        >
                            Denunciar usuario
                        </ButtonOption>
                    </Dropper>
                </View>
            </Head>

            <TopContainer>
                <Button>
                    <ButtonHead onPress={() => alert('hello')}>
                        {/* <MaterialCommunityIcons name="heart" color="#ffc500" size={30} /> */}
                        <MaterialCommunityIcons name="heart-outline" color="#ffc500" size={30} />
                    </ButtonHead>
                </Button>
                <Line />
                <Button><ButtonHead><Image source={PawImage} resizeMode='stretch' /></ButtonHead></Button>
                <Line />
                <PhotoHumanView>
                    <CircleContainer style={styles.shadowContainer}>
                        <HumanImage source={{ uri: user.photoProfile }} />
                    </CircleContainer>
                    {user &&
                        <Text>{user.userName}</Text>}
                </PhotoHumanView>
            </TopContainer>

            <Body style={styles.shadowContainer}>
                <TopBody>
                    <InfoContainer>
                        <NameText>
                            {animals.length > 0 ? animals[currentAnimal].name : 'NOMBRE'}
                        </NameText>
                        <Text>{animals.length > 0 ? animals[currentAnimal].years : 'Edad en' + ' ' + 'Años'}  |  {animals.length > 0 ? animals[currentAnimal].breed : 'Breed (not entered)'}</Text>
                        <Text />
                        <Text>{animals.length > 0 ? animals[currentAnimal].description : mainText}</Text>
                    </InfoContainer>

                </TopBody>

                <PhotosCampContainer>
                    {
                        post.length > 0 &&
                        post.map((currentPost, i) =>
                            <PhotoCamp
                                key={i}
                                imageSource={currentPost.photo}
                                navigation={navigation}
                                onPress={e => navigation.navigate('Open Profile', {
                                    user: user,
                                    animal: animals,
                                    publications: post
                                })}
                            />
                        )
                    }
                </PhotosCampContainer>
                <Button><Text>{userState}</Text></Button>
            </Body>

        </Container>
        </ViewContainer>
    )
}

const styles = StyleSheet.create({
    shadowContainer: {
        elevation: 10,
    }
});

