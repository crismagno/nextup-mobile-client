import React from "react"
import { Text, View } from 'react-native'
import { createDrawerNavigator } from "@react-navigation/drawer"
// routes
import Home from './../app/home/Index'


const Drawer = createDrawerNavigator()
export default props => (
    <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
    </Drawer.Navigator>
)