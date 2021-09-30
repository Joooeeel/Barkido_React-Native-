import styled from 'styled-components/native'
import {Dimensions} from 'react-native';


const WINDOW = 'window';
const {width} = Dimensions.get(WINDOW);
const {height} = Dimensions.get(WINDOW);

//padding: 35px === padding: ${width*0.075+'px'}

export const Container = styled.ScrollView`
    flex: 1;
    background-color: white;
`
export const Body = styled.View`
    align-items: center;
    flex: 1;
    padding: ${width*0.085+'px'};
`
export const Button = styled.TouchableOpacity`
    align-items: center;
    flex-direction: row;
    justify-content: flex-start;
    /* margin-left: 35px; */
    margin-bottom: 25px;
    width: 60%;
`
export const Title = styled.Text`
    font-size: 22px;
    text-transform: uppercase;
`
export const ImageView = styled.View`
    width: 35px;    
    height: 35px;
    margin-right: 30px;

`
export const Text = styled.Text`

`
export const ViewTitle = styled.View`
    align-items: center;
    justify-content: center;
    height: 70px;
    border-bottom-width: 2px;
    border-color: #abd7e3;
`
export const TextDescription = styled.Text`
    color: gray;
    font-size: 12px;
`
export const Box = styled.View`
`
