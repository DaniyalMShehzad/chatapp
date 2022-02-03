import React, { useEffect, useRef, useState } from 'react'
import { FlatList, Image, KeyboardAvoidingView, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import styling from '../../styling';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getMessagingData, getuidData, sendmessages } from '../firebaseconfig/action';
import { platform } from 'os';
import Camera from "react-native-vector-icons/FontAwesome"
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import Close from 'react-native-vector-icons/AntDesign'
import ImageLogo from 'react-native-vector-icons/EvilIcons'
const Message = ({ route }) => {
    const [text, setText] = useState("")
    const [user, setUser] = useState("")
    const [user2, setUser2] = useState("")
    const [myuserdata, setMyUserData] = useState()
    const [messages, setMessages] = useState([])
    const [assetsuri, setAssetsUri] = useState(false)
    const FlatListRef = useRef(null)
    const ScrollViewRef = useRef(null)
    const { uid } = route.params;
    const dispatch = useDispatch()
    const state = useSelector((e) => e)
    // useEffect(() => {
    //     console.log(route);
    //     if (route.name === "messages") {
    //         setMessages(false)
    //     }
    // }, [route.name])
    useEffect(() => {
        dispatch((dispatch) => getMessagingData(dispatch))
    }, [])
    useEffect(() => {
        setUser(state?.messages)
        console.log(state?.messages);
    }, [state?.messages])
    useEffect(() => {
        if (user.length) {
            let data = user.sort((a, b) =>
                a.date - b.date)
            setMessages(data)
        }
    }, [user])
    useEffect(() => {
        console.log(messages);
    }, [messages])
    useEffect(() => {
        AsyncStorage.setItem('@Usermsfuid', uid)
        // console.log(e)
    }, [])
    useEffect(() => {
        AsyncStorage.getItem('@Usermsfuid', (err, result) => {
            dispatch(() => getuidData(result, dispatch))
        })
    }, [])
    useEffect(() => {
        setMyUserData(state?.receiver)
        console.log(state.receiver);
    }, [state?.receiver])
    useEffect(() => {
        setUser2(state?.reducers[0])
        // console.log(state?.reducers,"users2")
    }, [state?.reducers])
    useEffect(() => {
        console.log(user2, "users2")
    }, [user2])
    useEffect(() => {
        console.log(myuserdata, "myuserdata");
    }, [myuserdata])
    const sendMessage = () => {
        let date = new Date().getTime()
        console.log(date);
        let obj = {
            date: date,
            messageuid: {
                sender: user2.uid,
                receiver: myuserdata.uid,
            },
            uid: user2.uid,
            text: text,
        }
        dispatch((dispatch) => sendmessages(dispatch, obj, myuserdata))
        setText("")
        setTimeout(() => {
            if (messages) {
                console.log("hbgjkhghjghjg");
                ScrollViewRef.current.scrollToEnd()
            }
        }, 500)
    }
    const sendMessage2 = () => {
        let date = new Date().getTime()
        console.log(date);
        let obj = {
            date: date,
            messageuid: {
                sender: user2.uid,
                receiver: myuserdata.uid,
            },
            uid: user2.uid,
            image: {
                img: assetsuri,
                caption: text,
            }
        }
        dispatch((dispatch) => sendmessages(dispatch, obj, myuserdata))
        setText("")
        setAssetsUri(false)
    }
    useEffect(() => {
        setTimeout(() => {
            console.log("hbgjkhghjghjg");
            if (!assetsuri) {
                ScrollViewRef.current.scrollToEnd({ animated: true })
            }
        }, 500)
    }, [messages]
    )
    const openCamera = () => {
        // console.log("openCamerajhjhjhjhjhh",);
        let options = {
            mediaType: 'both',
            // saveToPhotos:true
        }
        launchCamera(options, (res) => {
            if (res.didCancel === true) {
                console.log("null")
            }
            else {
                console.log(res.assets[0].uri);
                setAssetsUri(res.assets[0].uri)
                console.log(assetsuri);
            }
        })
    }
    const openImageGallery = () => {
        let options = {
            // includeBase64: true,
            mediaType: 'mixed'
        }
        launchImageLibrary(options, (res) => {
            if (res.didCancel === true) {
                console.log("null")
            }
            else {
                console.log(res.assets[0].uri);
                setAssetsUri(res.assets[0].uri)
                console.log(assetsuri);
            }
        })
    }
    return (
        assetsuri ?
            <>
                <SafeAreaView style={styles.SafeAreaViewImage}>
                    <KeyboardAvoidingView
                        style={styles.KeyboardAvoidingImage}
                        behavior='height'
                        keyboardVerticalOffset={45}
                    >
                        <View style={styles.ImageView}>
                            <TouchableOpacity style={{ position: "absolute", top: 9, right: 5, elevation: 99, }} onPress={() => setAssetsUri(false)}>
                                <Close name='close' size={30} color="#fff" />
                            </TouchableOpacity>
                            <Image style={styles.ImageView3} source={{ uri: assetsuri }} />
                        </View>
                        <View style={styles.flexRow}>
                            <View style={styles.inputparent}>
                                <TextInput value={text} placeholder='Add Caption' style={styles.input2} onChangeText={(e) => setText(e)} />
                            </View>
                            <View style={styles.flexRow2img}>
                                <TouchableOpacity style={styles.btn2} onPress={sendMessage2} >
                                    <Text style={styles._h2text}>+</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </KeyboardAvoidingView>
                </SafeAreaView>
            </>
            :
            // <>
            <View style={styles.Todos} >
                <View style={styles.container}>
                    {(myuserdata) ?
                        < View style={styles.header2msg}>
                            <View style={{ width: "20%", justifyContent: "flex-start", alignItems: "flex-start", }}>
                                <View style={styles.imgparent2}>
                                    <Image style={styles.img2} source={{ uri: myuserdata.img }} resizeMode='contain' />
                                </View>
                            </View>
                            <View style={styles.txtprimeparent} >
                                <View style={styles.name}>
                                    <Text numberOfLines={1} style={styles.txtprime2}>{myuserdata.username}</Text>
                                </View>
                                <View style={styles.date}>
                                    <Text numberOfLines={1} style={styles.text_white2}>{(new Date(myuserdata.date).getHours <= 24) ? new Date(myuserdata.date).toLocaleString().split(",")[1] : new Date(myuserdata.date).toLocaleString().split(",")[1]}</Text>
                                </View>
                            </View>
                        </View>
                        :
                        null
                    }
                    <SafeAreaView style={styles.SafeAreaView}>
                        <KeyboardAvoidingView
                            style={styles.KeyboardAvoiding}
                            behavior='height'
                            keyboardVerticalOffset={100}
                        >
                            <View style={styles.flexCenter}>
                                <ScrollView ref={ScrollViewRef}>
                                    {(messages) ?
                                        messages?.map((e, i) => {
                                            return (
                                                (e.uid === user2.uid && e.messageuid.receiver === myuserdata.uid) ?
                                                    <View style={styles.name2}>
                                                        {
                                                            (e.text) ?
                                                                <Text style={styles.TextText}>{e.text}</Text>
                                                                :
                                                                (e.image.img) ?
                                                                    <>
                                                                        <Image style={styles.ImageView4} source={{ uri: e.image.img }} />
                                                                        {(e.image.caption) ?
                                                                            <Text >{e.image.caption}</Text>
                                                                            :
                                                                            null}
                                                                    </>
                                                                    :
                                                                    null
                                                        }
                                                        <Text style={styles.dateText2}>{(new Date(e.date).getDate() === new Date().getDate()) ? new Date(e.date).toISOString().split("T")[1].split(".")[0] : new Date(e.date).toISOString().split("T")[0]}</Text>
                                                        {/* <Text style={styles.dateText2}>{new Date(e.date).toLocaleString().split(",")}</Text> */}
                                                    </View>
                                                    :
                                                    (e.messageuid.receiver === uid && e.messageuid.receiver === myuserdata.uid || e.messageuid.sender === uid && e.messageuid.sender === myuserdata.uid) ?
                                                        // null
                                                        <View style={styles.name3}>
                                                            {
                                                                (e.text) ?
                                                                    <Text style={styles.TextText}>{e.text}</Text>
                                                                    :
                                                                    (e.image.img) ?
                                                                        <>
                                                                            <Image style={styles.ImageView4} source={{ uri: e.image.img }} />
                                                                            {(e.image.caption) ?
                                                                                <Text style={styles.Imagetext}>{e.image.caption}</Text>
                                                                                :
                                                                                null}
                                                                        </>
                                                                        :
                                                                        null
                                                            }
                                                            <Text style={styles.dateText2}>{(new Date(e.date).getDate() === new Date().getDate()) ? new Date(e.date).toISOString().split("T")[1].split(".")[0] : new Date(e.date).toISOString().split("T")[0]}</Text>
                                                            {/* <Text style={styles.dateText2} onPress={()=>console.log(new Date(e.date).toISOString().split("T")[0])}>{new Date(e.date).toISOString().split(",")[0]}</Text> */}
                                                        </View>
                                                        :
                                                        null
                                            )
                                        })
                                        :
                                        null
                                    }
                                </ScrollView>
                            </View>
                            <View style={styles.flexRow}>
                                <View style={styles.inputparent}>
                                    <TextInput value={text} placeholder='Enter Text' style={styles.input2} onChangeText={(e) => setText(e)} />
                                    <TouchableOpacity style={styles.container11} onPress={() => openImageGallery()}>
                                        <ImageLogo name='image' size={33} color="#777" />
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.container10} onPress={() => openCamera()}>
                                        <Camera name='camera' size={22} color="#777" />
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.flexRow2}>
                                    <TouchableOpacity style={styles.btn2} onPress={sendMessage} >
                                        <Text style={styles._h2text}>+</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </KeyboardAvoidingView >
                    </SafeAreaView >
                </View >
            </View >
        // </>

    )
}

export default Message

const styles = StyleSheet.create({
    ...styling,
    keyboardavoidingView: { 
        // height: "",
    },
})