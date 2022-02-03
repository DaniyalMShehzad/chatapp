import React, { useEffect, useState } from 'react'
import { FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import Filter from 'react-native-vector-icons/AntDesign';
import Camera from "react-native-vector-icons/FontAwesome"
import styling from '../../styling'
import image from "../../image.jpg"
import auth from '@react-native-firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { getUserid } from '../firebaseconfig/action';
const DashBoard = ({ route, navigation }) => {
    const [userid, setUserId] = useState("")
    const [data, setData] = useState([])
    const [chats,setChats]=useState("Chats")
    const dispatch = useDispatch()
    const state = useSelector(e => e)
    // const arr = (state?.alluser?.userid)
    console.log(state)
    useEffect(() => {
        if (route.name === "DashBoard") {
            dispatch({
                type: "MESSAGES",
                payload: [],
            })
        }
    }, [route.name])
    useEffect(() => {
        let arr = []
        arr.push(state?.alluser)
        setData(arr[0])
        console.log(arr);
    }, [state?.alluser])
    useEffect(() => {
        console.log("change", route)
        dispatch((dispatch) => getUserid(setUserId, dispatch, navigation))
    }, [route])
    const Item = ({ img, username, date, uid }) => (
        <View style={styles.card}>
            <View style={styles.imgparent}>
                <Image source={{ uri: img }} resizeMode='contain' />
            </View>
            <TouchableOpacity style={styles.txtprimeparent2} onPress={() => {
                // console.log(uid, "dataUid")
                console.log(img) 
                // navigation.navigate('messages', {
                //     uid: uid,
                // });
            }
            }>
                <View style={styles.txtprimeparent} >
                    <View style={styles.name}>
                        <Text numberOfLines={1} style={styles.txtprime}>{username}</Text>
                        <Text numberOfLines={1} style={styles.dateText}>{(new Date(date).getDate() === new Date().getDate()) ? new Date(date).toISOString().split("T")[1].split(".")[0] : new Date(date).toISOString().split("T")[0]}</Text>
                    </View>
                    <View style={styles.date}>
                        <Text numberOfLines={1} style={styles.text_white}>you didnot get any messages from this account</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
    const renderItem = ({ item }) => (
        <Item img={item.img}
            username={item.username}
            date={item.date}
            uid={item.uid}
        // prew={item.prew} 
        />
    );
    const logout = () => {
        auth()
            .signOut()
            .then(() => {
                navigation.navigate("signup")
                setData([])
                setUserId("")
            })
            .catch((error) => console.log("error", error))
    }
    // console.log(data);
    console
    return (
        <View style={styles.header}>
            <View style={styles.headerContainer}>
                <View style={styles.container3}>
                    <View style={styles.container7}>
                        <View style={styles.container5} >
                            <Text style={styles.headerTitle}>WhatsApp</Text>
                        </View>
                        <TouchableOpacity style={styles.container4} onPress={logout} >
                            <Text>sign Out</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.container2}>
                        {/* <TouchableOpacity style={[styles.container9]} onPress={()=>setChats("camera")}>
                            <Text style={styles.container10}>
                                <Camera name='camera' size={16} color="#fff" />
                            </Text>
                        </TouchableOpacity> */}
                        <TouchableOpacity style={[styles.container8]}  onPress={()=>setChats("Chats")}>
                            <Text style={styles.headerTitle}>Chats</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.container8]}  onPress={()=>setChats("Status")}>
                            <Text style={styles.headerTitle}>Status</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                {/* <SafeAreaView> */}
                <View style={styles.container6}>
                    <FlatList
                        data={data}
                        renderItem={renderItem}
                        keyExtractor={item => {
                            item.id
                            // console.log(data.uid);
                        }
                        }
                    />
                </View>
                {/* </SafeAreaView> */}
            </View>
        </View>
    )
}

export default DashBoard
const styles = StyleSheet.create({ ...styling })