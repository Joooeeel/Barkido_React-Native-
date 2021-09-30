import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView, BackHandler } from 'react-native';

import { firebase } from '../../database/firebase';
import { GlobalContext } from '../../provider';
import Limit from '../TopLimitScreen'

//Photo Component
import Post from './Components/photo';

export default ({ navigation }) => {
    const [data, setData] = useContext(GlobalContext);

    const [post, setPosts] = useState([]);
    const [orderPost, setOrderedPost] = useState([]);



    useEffect(() => {
        (async () => {
            let pubToSet = [];
            await firebase
                .firestore()
                .collection('users')
                .doc(data.id)
                .collection('friends')
                .onSnapshot((friendList) => {
                    friendList.forEach((friend) => {
                        const currentFriend = friend.data();
                        let pubAux = [];
                        firebase
                            .firestore()
                            .collection('users')
                            .doc(currentFriend.createdBy)
                            .collection('publications')
                            .onSnapshot((publicationsList) => {
                                let pubTemp = [];

                                publicationsList.forEach((publication) => {
                                    const currentPub = {
                                        userId: currentFriend.createdBy,
                                        idPublication: publication.id,
                                        info: publication.data(),
                                    }
                                    pubTemp.push(currentPub);
                                })

                                if (pubToSet.length < 1) {
                                    pubToSet = pubTemp;
                                    setPosts(pubToSet);
                                } else {
                                    pubAux = pubToSet;
                                    pubToSet = pubAux.concat(pubTemp);
                                    setPosts(pubToSet);
                                }
                            })
                    })
                }).catch(e => {
                    console.log('error getting the users', e);
                })
        })();
    }, []);

    const orderingPosts = _ => {
        console.log('........................')
        let orderTemp = post.sort((a, b) => b.info.createdAt.seconds - a.info.createdAt.seconds);
        return orderTemp;
    }

    const postOrder = post ? orderingPosts() : undefined;

    console.log(postOrder);
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <Limit />
            <View style={styles.titleView}>
                <Text style={styles.title}>BARKIDO</Text>
            </View>
            <ScrollView style={styles.container} >


                {postOrder &&
                    postOrder.map((currPost, key) => {
                        if (currPost.info.createdBy) {
                            console.log(currPost)
                            return <Post key={key}
                                userName={currPost.info.createdBy}
                                photoProfile={currPost.info.photoProfile}
                                photoPub={currPost.info.photo}
                                id={currPost.userId}
                                navigation={navigation}
                            ></Post>
                        }
                    })
                }

            </ScrollView>
        </View>
    );
}

/*post.map((currPost, key) => {
                    if (currPost.info.createdBy) {
                        console.log(currPost)
                        return <Post key={key}
                            userName={currPost.info.createdBy}
                            photoProfile={currPost.info.photoProfile}
                            photoPub={currPost.info.photo}
                        ></Post>
                    }
                })*/

/*orderPost ?
                orderPost.map((currPost, key) => {
                    if (currPost.info.createdBy) {
                        console.log(currPost)
                        return <Post key={key}
                            userName={currPost.info.createdBy}
                            photoProfile={currPost.info.photoProfile}
                            photoPub={currPost.info.photo}
                        ></Post>
                    }
                }) : orderingPosts()*/
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        flexDirection: 'column',
        flexGrow: 1,

    },
    title: {
        fontSize: 22,
        textTransform: 'uppercase',
    },
    titleView: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 70,
        borderBottomWidth: 2,
        borderColor: '#abd7e3',
    },
})