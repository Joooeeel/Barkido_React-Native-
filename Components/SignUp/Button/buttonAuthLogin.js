import React, { useContext, useState } from 'react';
import { Button, Text } from './styled';

import { firebase } from '../../../database/firebase';
import { GlobalContext } from '../../../provider';

export default ({ navigation, info, text }) => {

    let mail = "";
    let password = "";
    const [data, setData] = useContext(GlobalContext);

    const procesData = e => {
        mail = info.mail; password = info.password;
        logIn(mail, password);
    }

    //admin@admin.com ---> woofwoof

    const logIn = React.useCallback(async (mail, password) => {
        let isMounted = true
        try {
            const res = await firebase
                .auth()
                .signInWithEmailAndPassword(mail, password);
            setData({ ...data, id: res.user.uid });
            navigation.navigate("Bienvenido")
        } catch (error) {
            alert(error)
            if (error.code === 'auth/invalid-email') {
                alert('Email no existe');
                return;
            } else if (error.code === 'auth/wrong-password') {
                alert('Contraseña incorrecta');
                return;
            }
        }

    }, [mail, password])


    return (
        <Button onPress={() => procesData()}>
            <Text>{text}</Text>
        </Button>
    )
}
