import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import generalStyles from './../../../helpers/styles/general'

export default props => {

    return (
        <View style={styles.container}>
            <View style={styles.containerTop}>
                <TouchableOpacity style={styles.btnMini} onPress={() => props.navigation.goBack()}>
                    <MaterialCommunityIcons name="arrow-left" color="#000" size={23} />      
                </TouchableOpacity>      
                <TouchableOpacity style={styles.btnMini} onPress={() => props.navigation.openDrawer()}>
                    <MaterialCommunityIcons name="cog-outline" color="#0005" size={23} />
                </TouchableOpacity>
            </View>
            <View style={styles.containerCenter}>
                <Text style={styles.textFormat()} >Categories</Text>
                <Text style={[styles.textFont(12, '#0008'), {marginTop: 2}]}>Book your spot</Text>
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
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        marginTop: 10,

        shadowColor: '#000',
        shadowOffset: { width: 10, height: 2 },
        shadowOpacity: 1,
        shadowRadius: 2,
        elevation: 5
    },

    containerCenter: {
        paddingHorizontal: 55
    },

    textFormat() {
        return {
            alignItems: 'center',
            fontSize: 25,
            fontWeight: 'bold',
            marginTop: 10,
            fontFamily: generalStyles.fontFamily1
        }
    },

    //text------------
    textFont(fts, color, fontWeight) {
        return {
            color: color || '#FFF',
            fontSize: fts || 13,
            fontWeight: fontWeight && 'bold',
            fontFamily: generalStyles.fontFamily1
        }
    },

    btnMini: {
        padding: 7
    }

})
