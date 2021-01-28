import React from 'react';
import { useSelector } from "react-redux";
import { 
    View, 
    Text, 
    Image, 
    StyleSheet, 
    ImageBackground,
    TouchableOpacity
} from 'react-native'

import { DrawerContentScrollView } from '@react-navigation/drawer'
import generalStyles from '../assets/styles/general'
import Feather from 'react-native-vector-icons/Feather'
import menu from './menu/menu'

export default props => {

    // const user1 = useSelector(state => state.user)
    const user = {
        name: 'Aurélien Salomon',
        email: '@aureliensalomon',
        avatar: generalStyles.images.imageA6,
        online_at: false,
        mediaBackground: generalStyles.images.imageA7
    };

    const logOut = () => {
        props.navigation.navigate('Open')
    }

    const isCurrentRoute = nameRoute => {
        const { index, routes } = props.navigation.dangerouslyGetState();
        const currentRoute = routes[index].name;
        return nameRoute == currentRoute
    }

    const renderItemsDrawer = () => {
        return menu.map((item, index) => {
            const active = isCurrentRoute(item.route)
            return <TouchableOpacity onPress={() => props.navigation.navigate(item.route)} key={`${item.Route}_${index}`}>
                <View style={[styles.itemMenu, active && styles.colorMenuActive]}>
                    {item.icon && item.icon(active ? generalStyles.colors.colorA1 : generalStyles.colors.colorA20) || <View/>}
                    <Text style={[styles.textFormat(17, (!active && generalStyles.colors.colorA9), '600', 0, 10), { fontFamily: generalStyles.fonts.fontFamily1}]}>{item.label}</Text>
                </View>
            </TouchableOpacity>
        })
    }

    return <View style={styles.container}>
        <View style={styles.containerTop}>
            <ImageBackground source={user.mediaBackground}
                style={styles.imgBackgroundHeader}
                imageStyle={{
                    borderBottomLeftRadius: 100,
                    borderTopRightRadius: 100
                }}
            />
            <View style={styles.containerTopOpacity}>
                <Image  style={styles.avatar} source={user.avatar} />
                <Text style={[styles.textFormat(25, generalStyles.colors.colorA1, 'bold', 20), { letterSpacing: 1 }]}>{user.name}</Text>
                <Text style={styles.textFormat(15, generalStyles.colors.colorA20, 'normal', 5)}>{user.email}</Text>
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
            <TouchableOpacity onPress={() => logOut()}>
                <View style={styles.itemMenu}>
                    <Feather name="log-out" size={18} color={generalStyles.colors.colorA20} />
                    <Text style={[styles.textFormat(17, generalStyles.colors.colorA9, '600', 0, 10), { fontFamily: generalStyles.fonts.fontFamily1}]}>Log Out</Text>
                </View>
            </TouchableOpacity>
        </View>

    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: generalStyles.colors.colorA1,
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
            color: color || generalStyles.colors.colorA1,
            fontSize: fts || 13,
            fontWeight: fontWeight || 'normal',
            marginTop: mt || 0,
            marginLeft: ml || 0,
            fontFamily: generalStyles.fonts.fontFamily1
        }
    },

    itemMenu: {
        backgroundColor: generalStyles.colors.colorA1,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 50,
        width: 170,
        paddingHorizontal: 18,
        paddingVertical: 8,
        marginVertical: 8
    },

    colorMenuActive: {
        backgroundColor: generalStyles.colors.colorA3,
    }
})
