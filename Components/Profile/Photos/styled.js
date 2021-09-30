import styled from 'styled-components/native';


export const Container = styled.View`
    width: ${(props)=>props.width+"px"};
    height: 265px;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`

export const Element = styled.TouchableOpacity`
    width: ${(props)=>props.width+"px"};
    justify-content: center;
    align-items: center;
    margin-top: 15px;
    border-radius: 10px;
    overflow: hidden;
    /* background-color: green; */
`

export const Image = styled.Image`
    width: 100%;
    height: 100%;
`