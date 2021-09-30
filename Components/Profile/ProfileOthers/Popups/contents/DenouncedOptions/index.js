import React, {useState} from 'react';
import {Container, TitleCont, TextCont, RowCont, Text, Arrow, Default, Button, TextButton} from './styled'
import arrow from '../../../../../../assets/Login/png/leftArrow.png'
import Thanks from '../Thanks';
//import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
//import { faCoffee } from '@fortawesome/free-solid-svg-icons'

export default ({thisContentIsVisible, setPopupIsActive, setUserState}) =>{
    const [defaultContentIsVisible, setDefaultContentIsVisible] = useState(true);

    const changePopUpVisibleAndRestartContent = () => {
        setPopupIsActive(false);
        setDefaultContentIsVisible(true);
        setUserState(' ');
    }

    return(
        <Container thisContentIsVisible={thisContentIsVisible}>
            <Default isVisible={defaultContentIsVisible}>
                <TitleCont>
                    Indíquenos el motivo de la denuncia
                </TitleCont>
                <TextCont>
                    <RowCont onPress={() => setDefaultContentIsVisible(false)}>
                        <Text>Cuenta Spam</Text>
                        <Arrow source={arrow} resizeMode="contain"/>
                        {/*<FontAwesomeIcon icon={faCoffee} size={10}/>*/}
                    </RowCont>
                    <RowCont onPress={() => setDefaultContentIsVisible(false)}>
                        <Text>Acoso</Text>
                        <Arrow source={arrow} resizeMode="contain"/>
                    </RowCont>
                    <RowCont onPress={() => setDefaultContentIsVisible(false)}>
                        <Text>Desnudos</Text>
                        <Arrow source={arrow} resizeMode="contain"/>
                    </RowCont>
                    <RowCont onPress={() => setDefaultContentIsVisible(false)}>
                        <Text style={{width: '80%'}}>Lenguaje o símbolos que incitan al odio</Text>
                        <Arrow style={{height:'40%'}} source={arrow} resizeMode="contain"/>
                    </RowCont>
                    <RowCont onPress={() => setDefaultContentIsVisible(false)}>
                        <Text>Venta de animales</Text>
                        <Arrow source={arrow} resizeMode="contain"/>
                    </RowCont>
                    <RowCont onPress={() => setDefaultContentIsVisible(false)}>
                        <Text>Maltrato o negligencia</Text>
                        <Arrow source={arrow} resizeMode="contain"/>
                    </RowCont>
                    <Button>
                    {/* <Button onPress={()=> changePopUpVisibleAndRestartContent}> */}
                        <TextButton>CANCELAR</TextButton>
                    </Button>
                </TextCont>
            </Default>
            <Thanks 
                setPopupIsActive={changePopUpVisibleAndRestartContent}
                defaultContentIsVisible={defaultContentIsVisible}
            />
        </Container>
    )
}