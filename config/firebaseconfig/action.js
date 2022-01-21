import auth from '@react-native-firebase/auth';
import { firebase } from '@react-native-firebase/database';
import database from '@react-native-firebase/database';

const setSignUp = (obj, reference, dispatch, navigation) => {
    if (obj?.username && obj?.img) {
        auth()
            .createUserWithEmailAndPassword(obj.email, obj.password)
            .then((user) => {
                obj.uid = user.user.uid
                reference.child(obj.uid).set(obj).then(() => {
                    dispatch({
                        type: "USERS",
                        payload: obj
                    })
                    navigation.navigate("DashBoard")
                })
            })
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                    console.log('That email address is already in use!');
                }
                else if (error.code === 'auth/invalid-email') {
                    console.log('That email address is invalid!');
                }
                console.log(error);
            });
    }
    else {
        // console.log(error);
    }
}

const imageGallery = (obj, launchImageLibrary, setImage) => {
    let options = {
        mediaType: 'photo'
    }
    launchImageLibrary(options, (res) => {
        // console.log(res, "ghfghfgg");
        if (res.didCancel === true) {
            alert("choose a Image");
        }
        else {
            console.log(res.assets[0].uri, "uri");
            console.log(res.assets, "assets");
            console.log(res, "res");
            obj.img = res.assets[0].uri
        }
    })
}
const getUserid = (setUserId, dispatch, navigation) => {
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            console.log("User is signed in, see docs for a list of available properties")
            // https://firebase.google.com/docs/reference/js/firebase.User
            setUserId(user.uid);
            let obj = { uid: user.uid }
            console.log("jhjhjhjhjh");
            if (obj.uid) {
                const onValueChange = database()
                    .ref(`/users/`)
                    .on('value', snapshot => {
                        // console.log(snapshot.val());
                        let data = Object.values(snapshot.val())
                        if (data) {
                            for (let i = 0; i < data.length; i++) {
                                if (data[i].uid === obj.uid) {
                                    // console.log(i);
                                    // console.log(obj.uid,"hsxghgjhcgsjk")
                                    let userObj = data.splice(i, 1)
                                    dispatch({
                                        type: "USERS",
                                        payload: userObj,
                                    })
                                } else {
                                    // console.log(data);
                                    dispatch({
                                        type: "USERSALLDATA",
                                        payload: data,
                                    })
                                }
                            }
                        }
                        else {
                            // console.log("getUseridgetUseridgetUserid","ererre")
                        }
                    });

            }
            // ...
        } else {
            // navigation.navigate("login")
        }
    })
};
const getlogin = (navigation, obj) => {
    auth()
        .signInWithEmailAndPassword(obj.email, obj.password)
        .then(() => {
            navigation.navigate("DashBoard")
        })
        .catch(error => {
            console.error(error);
        });
}
const getUserid2data = (setUserId) => {
    firebase.auth().onAuthStateChanged((user) => {
        console.log(user?.uid);
        if (user?.uid) {
            setUserId(user.uid)
        } else {
            setUserId("")
        }
    })
}
const sendmessages = (dispatch, obj, myuserdata) => {
    if (obj.text||obj.image.img) {
        auth()
        const reference = database().ref(`/messages/`).push()
            .set(obj).then(() => {
                console.log(obj);
            })
    } else {
        console.log("please enter Text First");
    }
}
const getuidData = (result, dispatch) => {
    auth()
    const reference = database()
        .ref(`/users/${result}`)
        .on('value', snapshot => {
            console.log(snapshot.val());
            dispatch({
                type: "RECEIVER",
                payload: snapshot.val(),
            })
        });
}
const getMessagingData = (dispatch) => {
    auth()
    const reference = database()
        .ref(`/messages/`)
        .on('value', snapshot => {
            console.log(snapshot.val());
            if(snapshot.val()){

                let data =(Object.values(snapshot.val()))
                dispatch({
                    type: "MESSAGES",
                    payload: data,
                })
            }else{
                null
            }
        })
}
export {
    setSignUp,
    imageGallery,
    getUserid,
    getlogin,
    getUserid2data,
    sendmessages,
    getuidData,
    getMessagingData
}