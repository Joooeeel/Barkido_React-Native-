import styled from 'styled-components/native';

export const VerticalContainer = styled.View`
    width: ${(props)=>props.width+"px"};
    height: ${(props)=>props.height+"px"};
    margin: 15px;
`
export const ElementVertical = styled.ImageBackground`
    width: ${(props)=>props.width+"px"};
    height: ${(props)=>props.height+"px"};
    justify-content: flex-end;
    display: flex;
    align-items: flex-end;
    border-radius: 10px;
    align-self: baseline;
    overflow: hidden;
`
export const View = styled.ImageBackground`
    width: 40%;
    height: 20%;
    align-self: flex-end;
`
export const Text = styled.Text`
    margin-top: 10px;
`
// export const View = styled.View`
//     width: 40%;
//     height: 40%;
//     align-self: flex-end;
//     background-color: green;
// `
export const Image = styled.Image`

`