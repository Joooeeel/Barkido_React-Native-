import React from 'react';
import styled from 'styled-components/native'

export default ({setPopupIsActive, defaultContentIsVisible}) =>{
    return(
        <Container defaultContentIsVisible={defaultContentIsVisible}>
            <Text>Gracias por su denuncia. Nuestro equipo revisará el contenido de la cuenta.</Text>
            <Button onPress={()=> setPopupIsActive()}>
                <TextButton>
                    Aceptar
                </TextButton>
            </Button>
        </Container>
    )
}

export const Text= styled.Text`
    font-weight:bold;
    font-size: 18px;
    color: black;  
    padding-left: 20px;

`;
export const Button = styled.TouchableOpacity`
    
`;

export const Container = styled.View`
    display: ${({defaultContentIsVisible}) => defaultContentIsVisible ? 'none' : 'flex'};
    width: 280px;
`;
export const TextButton = styled.Text`
    text-transform: uppercase;
    color: grey;
    font-weight:bold;
    align-self: flex-end;
    margin-top: 40px;
    margin-right: 20px;
`

