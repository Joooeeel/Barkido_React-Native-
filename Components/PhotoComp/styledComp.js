import React from 'react';
import styled from 'styled-components/native';
import { Dimensions, LogBox } from 'react-native';

export const ImgContainer = styled.View`
    width: ${({ScreenWidthComp}) => ScreenWidthComp};
    max-height: ${({ScreenHeightComp}) => ScreenHeightComp*1.4};
`
export const AnimalImages = styled.View`
    width: 100%;
    max-height: 85%; 
` 
export const WallImageContainer = styled.View`
    height: ${({ScreenHeightComp}) => ScreenHeightComp*0.53};
    width: 100%;
    display: flex;
    align-items: center;
    
`
export const WallImage = styled.Image`
    height: 100%;
    width: 90%;
    border-radius: 10px;
` 

export const CanvaLikeContainer = styled.View`
    position: absolute;
    bottom: 0%;
    right:5%;
    z-index: 9;
` 
export const CanvaLike = styled.Image`

`
export const Heart = styled.Image`
    z-index: 10;
    height: 100%;
    width: 100%;
    
`
export const HeartContainer = styled.TouchableOpacity`
    z-index: 10;
    bottom: 28%;
    left: 60%;
    height: 24%;
    width: 24%;
`
export const LikeCounter = styled.Text`
    top: 63%;
    z-index: 10;
    left: 27%;
    font-size: 35px;
    font-weight: bold;
    color: #FBC02D;
`

export const WallTextContainer = styled.View`
    max-height: 45%;
    width: 100%;
    margin-top: 5%;
    padding-bottom: 20%;
`
export const WallText = styled.Text`
    margin-right: 8%;
    margin-left: 8%;
    font-size: 15px
`