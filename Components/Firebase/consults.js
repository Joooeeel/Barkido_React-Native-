import React from 'react';

import { firebase } from '../../database/firebase';

export const getUserById = (id) => {
    const userRef = firebase
        .firestore()
        .collection('users')
        .doc(id)

    return userRef.get();

    /*console.log("====================");
    console.log(user);
    return user;*/
}
/*
    const [user, setUser] = useState(null);

    const defaultId = 'Z5AHUuDrseydiIZOVSOO';

    useEffect(() => {
        getUserById(defaultId).then(doc => {
            if (doc.exists) {
                const userTemp = doc.data();
                setUser(userTemp);
                console.log("======================")
                console.log(user.name);
            } else {
                console.log("doc dont exists");
            }
        }).catch(err => {
            console.log('Error getting document', err);
        });
*/
