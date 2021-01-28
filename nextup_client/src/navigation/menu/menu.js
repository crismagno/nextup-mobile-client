import React from 'react';
import Feather from 'react-native-vector-icons/Feather'

const menu = [
    {
        icon: color => <Feather name="home" size={18} color={color} />,
        route: 'Home',
        label: 'Home'
    },
    {
        icon: color => <Feather name="users" size={18} color={color} />,
        route: 'Category',
        label: 'Categories'
    },
    {
        icon: color => <Feather name="calendar" size={18} color={color} />,
        route: 'Trending',
        label: 'My queue'
    },
    {
        icon: color => <Feather name="user" size={18} color={color} />,
        route: 'Contact',
        label: 'Contact Us'
    },
    {
        icon: color => <Feather name="info" size={18} color={color} />,
        route: 'About',
        label: 'About Us'
    }
]

export default menu