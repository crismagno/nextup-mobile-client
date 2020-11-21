import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Dimensions,
    ScrollView,
    Image
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Entypo from 'react-native-vector-icons/Entypo'
const { width: WIDTH, height: HEIGHT } = Dimensions.get('window')

export default props => {

    return (
        <View style={styles.container}>
            <View style={styles.viewTop}>

                <View style={styles.viewTopLeft}>
                    <Ionicons name="location-outline" size={25} color="#65596F" />
                </View>

                <View style={styles.viewTopCenter}>
                    <Text style={styles.textFormat(13.5, '#FFF', 'bold')}>Asian Thai</Text>
                    <Text style={styles.textFormat(11.5, '#65596F')}>78GT N Pine Island Rd, </Text>
                    <Text style={styles.textFormat(11.5, '#65596F')}>Plantation, FL 33322</Text>
                </View>

                <TouchableOpacity style={styles.viewTopRight}>
                    <Entypo name="chevron-thin-right" size={15} color="#FFF" />
                </TouchableOpacity>

            </View>
            <View style={styles.viewBottom}>
                <View style={styles.viewLocale}>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    viewTop: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'stretch'
    },

    viewTopLeft: {
        width: 40,
        paddingBottom: 10,
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },

    viewTopCenter: {
        flex: 1,
        padding: 10,
        justifyContent: 'flex-end',
        alignItems: 'flex-start'
    },

    viewTopRight: {
        width: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },

    viewBottom: {
        flex: 1.7,
        alignItems: 'center',
        // borderWidth: 1,
        borderColor: 'red',
        paddingHorizontal: 20
    },

    viewLocale: {
        // borderWidth: 1,
        borderColor: '#fff',
        backgroundColor: '#FFF',
        width: WIDTH/1.3,
        height: 110,
        borderTopRightRadius: 55,
        borderBottomLeftRadius: 55
    },

    textFormat(fontSize = 10, color = '#FFF', fontWeight = 'normal') {
        return {
            fontSize,
            color,
            fontWeight
        }
    }
})
