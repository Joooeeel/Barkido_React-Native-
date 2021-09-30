import React, { useContext, useState } from 'react';
import { Button, Text } from './styled';


import { firebase } from '../../../database/firebase';
import { GlobalContext } from '../../../provider/index';

export default (props) => {

    //Context api guardar la id del user
    const [data, setData] = useContext(GlobalContext);

    const procesData = e => {
        if (!props.data.mail.trim()) {
            alert('Entrar Email');
            return;
        } else if (!props.data.password.trim()) {
            alert('Entrar Password');
            return;
        } else if (props.data.password != props.data.confirmPassword) {
            alert('Password no es igual');
            return;
        } else if (props.data.password.length < 6) {
            alert('Password debe ser mayor a 6 caracteres');
            return;
        } else if (props.check != true) {
            alert('Aceptar los terminos y condiciones del servicio es obligatorio');
            return;
        } else {
            register();
        }
    }

    const register = React.useCallback(async () => {

        try {
            const res = await firebase
                .auth()
                .createUserWithEmailAndPassword(props.data.mail, props.data.password)



            await firebase
                .firestore()
                .collection('users')
                .doc(res.user.uid)
                .set({
                    mail: res.user.email
                })


            await setData({ ...data, id: res.user.uid, isLogged: true });

            props.click();

        } catch (error) {

            if (error.code === 'auth/invalid-email') {
                alert('Formato de email no valido');
                return;
            } else if (error.code === 'auth/email-already-in-use') {
                alert('email ya registrado');
                return;
            }
        }
    }, [props.data.mail, props.data.password])

    return (
        <Button onPress={() => procesData()}>
            <Text>{props.text}</Text>
        </Button>
    )
}