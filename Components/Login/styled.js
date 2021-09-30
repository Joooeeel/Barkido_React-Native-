import styled from 'styled-components/native'

export const Container = styled.View`
    /* justify-content: center;
    align-items: center;   */
    background-color: white;  
    flex: 1;
`
export const Body = styled.View`
    justify-content: center;
    align-items: center;
    flex: 1;
`
export const View = styled.View`
    padding-left: 50px;
    margin-top:-90px;
    margin-bottom: 20px;
    z-index: 1;
`
export const ViewTitle = styled.View`
    padding-left: 50px;
    margin-top:-90px;
    margin-bottom: 20px;
    z-index: 1;
`
export const Text = styled.Text`
    font-size:28px;
    font-weight: bold;
    text-align: left;
    /* margin-left: 20px; */
`
export const Button = styled.TouchableOpacity`
    width: 200px;
    height: 48px;
    align-items: center;
    justify-content:center;
    border-color: #ffc500;
    border-width: 1px;
    border-radius: 100px;
`