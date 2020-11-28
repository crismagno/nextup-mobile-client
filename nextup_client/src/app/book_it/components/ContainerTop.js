import React, { useState } from 'react'
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Dimensions,
    Image
} from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import generalStyles from './../../../helpers/styles/general'

export default props => {

    const avatar = require('./../../../assets/images/avatar.png')

    return (
        <View style={styles.container}>
            <View style={styles.containerTop}>
                <TouchableOpacity onPress={() => props.navigation.goBack()}>
                    <MaterialCommunityIcons style={{marginTop: 20}} name="arrow-left" color="#000" size={23} />      
                </TouchableOpacity>   
                <TouchableOpacity onPress={() => props.navigation.openDrawer()}>
                    <MaterialCommunityIcons style={{marginTop: 20}} name="cog-outline" color="#000" size={23} />
                </TouchableOpacity>   
            </View>
            <View style={styles.containerCenter}>
                <Text style={styles.textFormat(23, '#000', 'bold')} >THAI THAI</Text>
                <View sytle={styles.viewImg}>
                    <Image style={styles.imgAvatar} source={avatar} />
                    <View style={styles.iconStar}>
                        <MaterialCommunityIcons name="star" color="#FFF" size={12} />
                    </View>
                </View>
                
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderBottomLeftRadius: 85,
    },

    containerTop: {
		flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingTop: 0,

        shadowColor: '#000',
        shadowOffset: { width: 10, height: 2 },
        shadowOpacity: 1,
        shadowRadius: 2,
        elevation: 5
    },

    containerCenter: {
        alignItems: 'center'
    },

    textFormat(fts, color, fontWeight) {
        return {
            color: color || '#FFF',
            fontSize: fts || 13,
            fontWeight: fontWeight || 'normal',
            marginTop: 5,
            fontFamily: generalStyles.fontFamily1
        }
    },

    viewImg: {
        position: 'relative',
        marginTop: 10
    },

    iconStar: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        right: 0,
        bottom: 0,
        borderWidth: 1,
        borderRadius: 1000,
        width: 17,
        height: 17,
        backgroundColor: '#8A56AC'
    },

    imgAvatar: {
        borderWidth: 2,
        borderColor: '#8A56AC',
        width: 55,
        height: 55,
        borderRadius: 1000
    }

})
