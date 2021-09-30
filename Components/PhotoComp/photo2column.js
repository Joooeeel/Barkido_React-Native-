import * as React from 'react';
import { useContext, useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { TwoColumnsRow, ImgContainer, AnimalImages, WallImageContainer, WallImage, CanvaLikeContainer, CanvaLike, Heart, HeartContainer, LikeCounter } from './styledComp2column';
import golden1 from './resources/gr1.jpg';
import { Dimensions } from 'react-native';
import CanvaImg from './resources/canvaLike.png';
import HeartImgIcon from './resources/Heart.png';
import YHeartImgIcon from './resources/yellowHeart.png';
import { useLinkProps } from '@react-navigation/native';
import { CommonActions, useNavigation } from '@react-navigation/native';





export default ({ navigation }) => {
    const screen = Dimensions.get("screen");
    const [likeIcon, setLikeIcon] = useState(HeartImgIcon);
    const [like, setLike] = useState(0);



    return (

        <TwoColumnsRow>
            <ImgContainer
                ScreenHeightComp={screen.height}
                ScreenWidthComp={screen.width}
                onPress={() => navigation.navigate('profileImgName')}
            >
                <AnimalImages ScreenHeightComp={screen.height}>
                    <WallImageContainer ScreenHeightComp={screen.height}>
                        <WallImage
                            source={golden1}
                        />
                    </WallImageContainer>
                </AnimalImages>
            </ImgContainer>
        </TwoColumnsRow>
    )

}

