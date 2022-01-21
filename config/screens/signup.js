import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import database from '@react-native-firebase/database';
import styling from '../../styling'
import { useDispatch } from 'react-redux';
import { imageGallery, setSignUp } from '../firebaseconfig/action';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
const SignUp = ({navigation }) => {
    const [obj, setObj] = useState({})
    const dispatch=useDispatch()
    const reference = database().ref('/users/');
    const signup = () => {
        obj.date=new Date().toLocaleString()
        dispatch((dispatch)=>setSignUp(obj,reference,dispatch,navigation ))
            setObj({})
    }
    const galleryImage =()=>{
        dispatch(()=>imageGallery(obj,launchImageLibrary))
    }
    const login=()=>{
        navigation.navigate("login")
    }
    return (
        <View>
            <View style={styles.header}>
                <View >
                    <Text style={styles.textCenter}>SignUp</Text>
                </View>
                <View>
                    <View>
                        <TouchableOpacity onPress={galleryImage}>
                            <Text>Pick a Image</Text>
                            {/* {image?
                            :
                            <Text>Image Selected</Text>
                        } */}
                        </TouchableOpacity>
                    </View>
                    <View style={styles}>
                        <TextInput style={styles.input} placeholder='Enter Your Name' value={obj.username} onChangeText={(e) => setObj({ ...obj, username: e })} />
                    </View>
                    <View style={styles}>
                        <TextInput style={styles.input} placeholder='enter Email' value={obj.email} onChangeText={(e) => setObj({ ...obj, email: e })} />
                    </View>
                    <View>
                        <TextInput style={styles.input} secureTextEntry={true} value={obj.password} placeholder='Password' onChangeText={(e) => setObj({ ...obj, password: e })} />
                    </View>
                </View>
                <View>
                    <TouchableOpacity style={styles.btn} onPress={signup}>
                        <Text>SignUp</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn} onPress={login}>
                        <Text>go to login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
export default SignUp
const styles = StyleSheet.create({ ...styling })