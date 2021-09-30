import React from 'react';
import styled from 'styled-components/native';

export default (props) => {

    return(
        <Container onPress={()=>props.click(props.state)}>
            <Text>
                {props.children}
            </Text>
        </Container>
    )
}

export const Container = styled.TouchableOpacity`

`
export const Text = styled.Text`
    margin: 12px;
`

