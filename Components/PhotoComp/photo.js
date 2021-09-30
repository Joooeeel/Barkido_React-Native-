import * as React from 'react';
import { useContext, useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import {ImgContainer, AnimalImages, WallImageContainer, WallImage,WallTextContainer, WallText,CanvaLikeContainer,CanvaLike,Heart,HeartContainer, LikeCounter} from './styledComp';
import golden1 from './resources/gr1.jpg';
import { Dimensions } from 'react-native';
import CanvaImg from './resources/canvaLike.png';
import HeartImgIcon from './resources/Heart.png';
import YHeartImgIcon from './resources/yellowHeart.png';

export default () =>{
    const screen = Dimensions.get("screen");
    const [likeIcon, setLikeIcon] = useState(HeartImgIcon);
    const [like, setLike] = useState (0);
    console.log(likeIcon);

    const changeColor=()=>
        {
            if(likeIcon === HeartImgIcon)
            {
                console.log(likeIcon);
                setLikeIcon (YHeartImgIcon)
                setLike(like + 1);
            }
            else if(likeIcon === YHeartImgIcon)
            {   
                setLikeIcon (HeartImgIcon);
                setLike(like - 1);
            }
        }

    return (   
        <ImgContainer 
            ScreenHeightComp={screen.height}
            ScreenWidthComp={screen.width}
        >
            <AnimalImages ScreenHeightComp={screen.height}>
                <WallImageContainer ScreenHeightComp={screen.height}>
                    <WallImage
                        source={golden1}                          
                    />
                        <CanvaLikeContainer>
                            <LikeCounter>{like}</LikeCounter>
                            <CanvaLike 
                                source={CanvaImg}
                            />
                            <HeartContainer onPress={() => changeColor()}>
                                
                            <Heart
                                source={likeIcon}
                            />
                            </HeartContainer>
                        </CanvaLikeContainer>
                </WallImageContainer>         
                <WallTextContainer>
                        <WallText>
                        Lorem ipsum dolor sit amet consectetur adipiscing elit, porta nullam inceptos pellentesque enim nulla interdum, habitasse risus urna non ad lobortis quis, semper fusce conubia tellus a mollis.Lorem ipsum dolor sit amet consectetur adipiscing elit, porta nullam inceptos pellentesque enim nulla interdum, habitasse risus urna non ad lobortis quis, semper fusce conubia tellus a mollis.
                        
                        </WallText>
            </WallTextContainer>
            </AnimalImages> 

            
            
        </ImgContainer>
    )

}

