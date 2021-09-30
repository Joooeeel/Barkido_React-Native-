import React from 'react';
import {Container, TextQuestion, TextDescription, BottomView, Button, TextButton, TextButtonOption} from './styled';

const DENOUNCED = 'Denounced';

export default ({setIsActive, setUserState, nextState, currentText, thisContentIsVisible})=>{

    return(
        <Container thisContentIsVisible={thisContentIsVisible}>
            <TextQuestion> {currentText.question} </TextQuestion>
            <TextDescription> {currentText.description} </TextDescription>
            <BottomView>
                <Button onPress={()=> setIsActive(false)}>
                    <TextButton>CANCELAR</TextButton>
                </Button>
                <Button onPress={() => {
                    setUserState(nextState);
                    setIsActive(nextState === DENOUNCED ? true : false);
                }}>
                    <TextButtonOption > {currentText.button} </TextButtonOption>
                </Button>
            </BottomView> 
        </Container>
    )
}