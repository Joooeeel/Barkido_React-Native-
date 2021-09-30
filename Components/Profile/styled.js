import styled from 'styled-components/native';
import {Dimensions} from 'react-native';


const WINDOW = 'window';
const {width} = Dimensions.get(WINDOW);
const {height} = Dimensions.get(WINDOW);

export const Container = styled.ScrollView`
    height: ${height + 'px'};
    width :${width + 'px'};
    background-color: white;
`
export const Head = styled.ImageBackground`
    height: 300px;
`
export const ViewContainer = styled.View`
    flex: 1;
`
export const View = styled.View`
    margin-top: 15px;
    padding: 10px;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
`
export const ButtonHead= styled.TouchableOpacity`
    width: 30px;
    height: 30px;
    align-items: center;
`
export const Image= styled.Image`
    width: 100%;
    height: 100%;
` 
export const TopContainer = styled.View`
    height: 80px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    margin-top: -40px;
    background-color: white; 
`
export const Button = styled.TouchableOpacity`  
    flex: 1;
    align-items: center;
    padding: 20px;
`
export const PhotoHumanView = styled.View`
    flex: 1;
    align-items: center;
    padding: 20px;
`
export const Line = styled.View`
    width: 1px;
    height: 40px;
    border-left-width: 1px;
    border-color: grey;
`
export const Text = styled.Text`

`
export const Body = styled.View`
    border-radius: 10px;
    background-color: white; 
`
export const TopBody = styled.View`
    padding-top: 20px;
    padding-left: 20px;
    padding-right: 20px;
`

export const InfoContainer = styled.View`
    padding: 10px;
`
export const NameText = styled.Text`
    font-size: 20px;
    font-weight: bold;
`
export const PhotosCampContainer = styled.View`
    background-color: white;
    flex-direction: row;
    flex-wrap: wrap;
`
export const PhotosCampVerticalContainer = styled.View`
    align-items: center;
    
`

export const CircleContainer = styled.View`
    z-index: 10;
    height: 70px;
    width: 70px;
    margin-top: -60px;
`
export const HumanImage = styled.Image`
    width: 100%;
    height: 100%;
    border-radius: 90px;
    border: 2px solid rgb(255,255,255);
    
`
export const FriendsNumber = styled.Text`
    /* margin-top: 5px; */
`
export const ImageView = styled.Text`
    width: 100%;    
    height: 100%;
    /* margin-right: 30px; */
`