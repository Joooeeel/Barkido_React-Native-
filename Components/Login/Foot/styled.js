import styled from 'styled-components/native';
import { Dimensions } from 'react-native'

export const Image = styled.Image`
    width: ${Dimensions.get("window").width+'px'};
    height: 150px;
    z-index: -1;
`