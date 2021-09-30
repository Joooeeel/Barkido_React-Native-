import styled from 'styled-components/native';

export const Container = styled.View`
    justify-content: center;
    align-items: center;
    padding: 25px;
    width: 300px;
    display: ${({thisContentIsVisible}) => thisContentIsVisible ? 'flex' : 'none'};
`

export const Default = styled.View`
    display: ${({isVisible}) => isVisible ? 'flex' : 'none'};
`;
export const TitleCont = styled.Text`
    font-weight: bold;
    font-size: 20px;
    margin-bottom: 15px;
`
export const TextCont = styled.View`

`
export const RowCont = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 18px;
`
export const Text = styled.Text`

`
export const Arrow = styled.Image`
    transform: rotate(180deg);
    width: 5%;
    height: 70%;
`
export const Button = styled.TouchableOpacity`
    align-self: flex-end;
`
export const TextButton = styled.Text`
    color: grey;
    text-transform: uppercase;
`
