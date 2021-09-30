import styled from 'styled-components/native'

export const View = styled.TouchableOpacity`
    display: ${({isUndefined}) => isUndefined ? 'none' : 'flex'};
    position: ${({isUndefined}) => isUndefined ? 'relative' : 'absolute'};;
    top: 90px;
    left: 15px;
    width: 25px;
    height: 25px;
    z-index: 3;
    /* background-color: red; */
`
export const Image = styled.Image`
    width: 100%;
    height: 100%;
`