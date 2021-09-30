import React from 'react';
import {Button, Text} from './styled'


export default (props) => {

    return(
        <Button visible={props.visible} onPress={()=>props.click()}>
            <Text>Entrar</Text>
        </Button>             
    )
}