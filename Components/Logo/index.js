import React from 'react';
import {Logo, ImageLog} from './styled';



export default ()=> {

    return(
        <Logo>
            <ImageLog source={require('../../assets/Logo.png') } style={{resizeMode: "stretch"}}/>

        </Logo>
        
    )

}