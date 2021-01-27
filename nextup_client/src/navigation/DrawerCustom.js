import React from 'react';
import { 
    View, 
    Text, 
    Image, 
    StyleSheet, 
    ImageBackground,
    TouchableOpacity
} from 'react-native'
import generalStyles from '../assets/styles/general'

import { DrawerContentScrollView } from '@react-navigation/drawer'
import Feather from 'react-native-vector-icons/Feather'

export default props => {

    const imgBackground = require('./../assets/images/background1.png')
    const avatar = require('./../assets/images/avatar2.png')

    const isCurrentRoute = nameRoute => {
        const {index, routes} = props.navigation.dangerouslyGetState();
        const currentRoute = routes[index].name;
        return nameRoute == currentRoute
    }

    const arrayListDrawer = [
        {
            icon: <Feather name="home" size={18} color={isCurrentRoute('Home') ? '#FFF' : '#B4AFB9'} />,
            route: 'Home',
            label: 'Home'
        },
        {
            icon: <Feather name="users" size={18} color={isCurrentRoute('Category') ? '#FFF' : '#B4AFB9'} />,
            route: 'Category',
            label: 'Categories'
        },
        {
            icon: <Feather name="calendar" size={18} color={isCurrentRoute('Trending') ? '#FFF' : '#B4AFB9'} />,
            route: 'Trending',
            label: 'My queue'
        },
        {
            icon: <Feather name="user" size={18} color={isCurrentRoute('Contact') ? '#FFF' : '#B4AFB9'} />,
            route: 'Contact',
            label: 'Contact Us'
        },
        {
            icon: <Feather name="info" size={18} color={isCurrentRoute('About') ? '#FFF' : '#B4AFB9'} />,
            route: 'About',
            label: 'About Us'
        }
    ]

    const renderItemsDrawer = () => {
        return arrayListDrawer.map((item, index) => {
            const active = isCurrentRoute(item.route)
            return <TouchableOpacity onPress={() => props.navigation.navigate(item.route)} key={`${item.Route}_${index}`}>
                <View style={[styles.itemMenu, active && styles.colorMenuActive]}>
                    {item.icon}
                    <Text style={[styles.textFormat(17, (!active && '#463851'), '600', 0, 10), { fontFamily: generalStyles.fonts.fontFamily1}]}>{item.label}</Text>
                </View>
            </TouchableOpacity>
        })
    }


    return <View style={styles.container}>
        <View style={styles.containerTop}>
            <ImageBackground source={imgBackground}
                style={styles.imgBackgroundHeader}
                imageStyle={{
                    borderBottomLeftRadius: 100,
                    borderTopRightRadius: 100
                }}
            />
            <View style={styles.containerTopOpacity}>
                <Image  style={styles.avatar} source={avatar} />
                <Text style={[styles.textFormat(25, '#FFF', 'bold', 20), { letterSpacing: 1 }]}>{'Aurélien Salomon'}</Text>
                <Text style={styles.textFormat(15, '#99939E', 'normal', 5)}>{'@aureliensalomon'}</Text>
            </View>
        </View>

        <DrawerContentScrollView 
            showsVerticalScrollIndicator={false} 
            style={{ 
                paddingVertical: 17,
                paddingHorizontal: 20, 
                flex: 1
            }} {...props}
        >
            {renderItemsDrawer()}
        </DrawerContentScrollView>

        <View style={{paddingHorizontal: 20, marginTop: 5}}>
            <TouchableOpacity onPress={() => props.navigation.navigate('Open')}>
                <View style={styles.itemMenu}>
                    <Feather name="log-out" size={18} color='#B3AEB8' />
                    <Text style={[styles.textFormat(17, '#463851', '600', 0, 10), { fontFamily: generalStyles.fonts.fontFamily1}]}>Log Out</Text>
                </View>
            </TouchableOpacity>
        </View>


    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        borderTopRightRadius: 100,
        ...generalStyles.shadowButtons({ elevation: 10 })
    },

    containerTop: {
        position: 'relative',
        width: '100%',
        height: 270,
        borderBottomLeftRadius: 100,
        borderTopRightRadius: 100
    },

    containerTopOpacity: {
        position: 'absolute',
        paddingTop: 60,
        paddingHorizontal: 40,
        left: 0,
        top: 0,
        width: '100%',
        height: 270,
        borderBottomLeftRadius: 100,
        borderTopRightRadius: 100,
        zIndex: 200,
        backgroundColor: 'rgba(36,19,50, 0.75)',
    },

    imgBackgroundHeader: {
        width: '100%',
        height: 270,
        opacity: 0.7
    },

    avatar: {
        width: 75,
        height: 75,
        borderRadius: 100
    },

    textFormat(fts, color, fontWeight, mt, ml) {
        return {
            color: color || '#FFF',
            fontSize: fts || 13,
            fontWeight: fontWeight || 'normal',
            marginTop: mt || 0,
            marginLeft: ml || 0,
            fontFamily: generalStyles.fonts.fontFamily1
        }
    },
    
    itemDrawer: {
        // flexDirection: 'row',
        // justifyContent: 'center',
        // alignItems: 'center',
        borderRadius: 50,
        // width: 160,
        // height: 42,
        borderBottomWidth: 0,
        padding: 0,
        paddingLeft: 7
    },

    itemMenu: {
        backgroundColor: '#FFF',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 50,
        width: 170,
        paddingHorizontal: 18,
        paddingVertical: 8,
        marginVertical: 8
    },

    colorMenuActive: {
        backgroundColor: '#8A56AC',
    }
})

// <DrawerItem key={`${item.label}_${index}`}
//     style={styles.itemDrawer}
//     labelStyle={{
//         fontSize: 18, 
//         fontFamily: generalStyles.fontFamily1,
//         padding: 0
//     }}
//     icon={({ color, size }) => {
//         <Feather 

//             name="home"
//             color="red"
//             size={20}
//         />
//     }}
//     activeBackgroundColor="#8A56AC"
//     activeTintColor="#FFF"
//     inactiveTintColor="#000"
//     focused={isCurrentRoute(item.route)}
//     label={item.label}
//     onPress={() => props.navigation.navigate(item.route)}
// />