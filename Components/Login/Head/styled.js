import styled from 'styled-components/native';
import {Dimensions} from 'react-native'

export const Image = styled.Image`
    width: ${Dimensions.get("window").width+'px'};
    height: 130px;
    /* position: absolute; */
    z-index: 1;
`