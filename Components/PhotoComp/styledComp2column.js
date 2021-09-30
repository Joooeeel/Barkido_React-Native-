import React from 'react';
import styled from 'styled-components/native';
import { Dimensions, LogBox } from 'react-native';

export  const TwoColumnsRow = styled.View`
    flex-direction: row;
`
export const ImgContainer = styled.TouchableOpacity`
    width: ${({ScreenWidthComp}) => ScreenWidthComp*0.50};
    max-height: ${({ScreenHeightComp}) => ScreenHeightComp*0.8};
    

`
export const AnimalImages = styled.View`
    width: 100%;
    max-height: 85%; 
` 
export const WallImageContainer = styled.View`
    height: ${({ScreenHeightComp}) => ScreenHeightComp*0.3};
    width: 100%;
    display: flex;
    align-items: center;
    margin-bottom: 35%;
`
export const WallImage = styled.Image`
    height: 100%;
    width: 90%;
    border-radius: 10px;

` 

