import React, { useContext } from 'react';
import { Button, Text } from './styled';

import { GlobalContext } from '../../../provider';

export default (props) => {

    const [data, setData] = useContext(GlobalContext);

    return (
        <Button onPress={() => setData({ ...data, isLogged: true })}>
            <Text>{props.text}</Text>
        </Button>
    )
}