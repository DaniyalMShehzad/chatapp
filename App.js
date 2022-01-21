import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import store from './config/firebaseconfig/store'
import styling from './styling'
import { Provider } from 'react-redux';
import AppRouter from './config/router/router'
import DashBoard from './config/screens/dashboard';
const App = () => {
  return (
      <Provider store={store}>
        <AppRouter />
      </Provider>
  )
}

export default App

const styles = StyleSheet.create({
  ...styling
})