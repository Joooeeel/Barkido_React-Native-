import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

export const Container = styled.View`
   justify-content: center;
   align-items: center;
`
export const DarkView = styled.View`
    background-color: #333333aa;
    justify-content: center;
    align-items: center;
    height: ${Dimensions.get('window').height + 'px'};
`
export const LightView = styled.View`
    background-color: white;
    border-radius: 10px;
    /* flex:1 */
    display:flex;
    
`