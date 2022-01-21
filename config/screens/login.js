import React, { useState } from 'react'
import auth from '@react-native-firebase/auth';
import { StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native'
import styling from '../../styling'
import { useDispatch } from 'react-redux';
import { getlogin } from '../firebaseconfig/action';
const Login = ({navigation}) => {
    const [obj ,setObj]=useState({})
    // console.log(obj);
    const dispatch=useDispatch()
    const login = () => {
        dispatch(()=>getlogin(navigation,obj))
    }
    const signup=()=>{
        navigation.navigate("signup")
    }
    return (
        <View>
            <View style={styles.header}>
                <View style={styles}>
                    <Text style={styles.textCenter}>Login</Text>
                </View>
                <View>
                    <View style={styles}>
                        <TextInput style={styles.input} onChangeText={(e)=>setObj({...obj,email:e})} />
                    </View>
                    <View>
                        <TextInput style={styles.input} secureTextEntry={true} onChangeText={(e)=>setObj({...obj,password:e})} />
                    </View>
                </View>
                    <View>
                        <TouchableOpacity onPress={login} style={styles.btn}>
                            <Text>login</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={signup} style={styles.btn}>
                            <Text>go to sign up</Text>
                        </TouchableOpacity>
                    </View>
            </View>
        </View>
    )
}
export default Login
const styles = StyleSheet.create({ ...styling })