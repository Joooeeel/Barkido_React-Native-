import React from 'react';
import {Button, Text} from './styled'


export default (props) => {

    return(
        <Button onPress={()=>props.click()}>
            <Text>Entrar</Text>
        </Button>             
    )
}