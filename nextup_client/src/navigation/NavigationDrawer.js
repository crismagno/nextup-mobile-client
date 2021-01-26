import React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"
import DrawerCustom from './DrawerCustom'

// routes
import Home from './../app/home/Index'
import Category from './../app/categories/Index'
import Trending from './../app/trending/Index'
import BookIt from './../app/book_it/Index'
import TestDefault from './../app/test/testDefault'

const Drawer = createDrawerNavigator()
export default props => (
    <Drawer.Navigator initialRouteName="Trending"
        drawerStyle={{ width: '80%', borderTopRightRadius: 100 }}
        openByDefault={false}
        drawerContent ={props => DrawerCustom(props)}>
        <Drawer.Screen {...props} name="Home" component={Home} />
        <Drawer.Screen {...props} name="Category" component={Category} />
        <Drawer.Screen {...props} name="Trending" component={Trending} />
        <Drawer.Screen {...props} name="BookIt" component={BookIt} />
        <Drawer.Screen {...props} name="TestDefault" component={TestDefault} />
    </Drawer.Navigator>
)