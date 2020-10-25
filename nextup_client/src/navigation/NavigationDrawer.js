import React from "react"
import { Text, View } from 'react-native'
import { createDrawerNavigator } from "@react-navigation/drawer"
// routes
import Home from './../app/home/Index'
import Category from './../app/categories/Index'


const Drawer = createDrawerNavigator()
export default props => (
    <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen {...props} name="Home" component={Home} />
        <Drawer.Screen {...props} name="Category" component={Category} />
    </Drawer.Navigator>
)