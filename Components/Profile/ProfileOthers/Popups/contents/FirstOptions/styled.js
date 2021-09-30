import styled from 'styled-components/native';

export const Container = styled.View`
    margin: 20px;
    width: 280px;
    display: ${({thisContentIsVisible}) => thisContentIsVisible == false ? 'flex' : 'none'};
`
export const TextQuestion = styled.Text`
    font-weight: bold;
    font-size: 20px;
    margin-bottom:12px;
`
export const TextDescription = styled.Text`
    /* text-align: justify; */
    font-size: 16px;
    margin-bottom: 40px;
`
export const BottomView = styled.View`
    padding: 10px;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-self: flex-end;
`
export const Button = styled.TouchableOpacity`
    margin-left: 20px;
`
export const TextButton = styled.Text`
    color: grey;
    text-transform: uppercase;
`
export const TextButtonOption = styled.Text`
    font-weight: bold;
    color: black;
    text-transform: uppercase;
`
