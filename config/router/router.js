import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DashBoard from '../screens/dashboard';
import SignUp from '../screens/signup';
import Login from '../screens/login';
import { useDispatch } from 'react-redux';
import { getUserid, getUserid2data } from '../firebaseconfig/action';
import Message from '../screens/message';
const AppRouter = ({ navigation }) => {
    const [userid, setUserId] = useState("")
    const Stack = createNativeStackNavigator();
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(() => getUserid2data(setUserId))
    }, [])
    console.log(userid);
    return (
        <NavigationContainer>
            {/* {(userid) ? */}
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="DashBoard" component={DashBoard} />
                <Stack.Screen name="messages" component={Message} />
                {/* </Stack.Navigator>
                :
                <Stack.Navigator screenOptions={{ headerShown: false }}> */}
                <Stack.Screen name="login" component={Login} />
                <Stack.Screen name="signup" component={SignUp} />
            </Stack.Navigator>
            {/* } */}
        </NavigationContainer>
    );
}
export default AppRouter
const styles = StyleSheet.create({})