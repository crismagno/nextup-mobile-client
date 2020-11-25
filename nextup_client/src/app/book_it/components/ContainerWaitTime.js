import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Dimensions
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import generalStyles from './../../../helpers/styles/general'
const { width: WIDTH, height: HEIGHT } = Dimensions.get('window')

export default props => {

    const waitTimeOk = () => {
        props && props.waitTimeOk && props.waitTimeOk()
    }

    return <View style={styles.container}>

        <Text style={[styles.textFormat(30, '#000', 'bold'), { marginTop: 40 }]}>Waiting time</Text>
        <Text style={styles.textFormat(30, '#000', 'bold')}>is up!</Text>
        <Text style={[styles.textFormat(13, '#000', 'normal'), { marginTop: 25 }]}>Please come in now.</Text>

        <View style={styles.containerMaps}>
            <View style={styles.viewTop}>

                <View style={styles.viewTopLeft}>
                    <Ionicons name="location-outline" size={25} color="#65596F" />
                </View>

                <View style={styles.viewTopCenter}>
                    <Text style={styles.textFormat(13.5, '#000', 'bold')}>Asian Thai</Text>
                    <Text style={styles.textFormat(11.5, '#65596F')}>78GT N Pine Island Rd, </Text>
                    <Text style={styles.textFormat(11.5, '#65596F')}>Plantation, FL 33322</Text>
                </View>

            </View>
            <View style={styles.viewBottom}>
                <View style={styles.viewLocale}>
                </View>
            </View>
        </View>

        <TouchableOpacity onPress={() => waitTimeOk()}
            style={styles.btnBookIt}>
            <Text style={styles.textFormat(14, '#FFF', 'bold')}>OK</Text>
        </TouchableOpacity>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 70,
        backgroundColor: '#FFF',
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderTopLeftRadius: 85,
        paddingVertical: 3
    },

    containerMaps: {
        flex: 1,
        marginTop: 20
    },

    btnBookIt: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        // borderWidth: 1,
        borderRadius: 50,
        width: 180,
        marginVertical: 15,
        backgroundColor: '#8A56AC'
    },

    textFormat(fts, color, fontWeight, mh, fontFamily) {
        return {
            color: color || '#FFF',
            fontSize: fts || 13,
            fontWeight: fontWeight || 'normal',
            marginHorizontal: mh || 0,
            fontFamily: generalStyles.fontFamily1
        }
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

    viewBottom: {
        flex: 1.7,
        alignItems: 'center',
        // borderWidth: 1,
        borderColor: 'red',
        paddingHorizontal: 20
    },

    viewLocale: {
        borderWidth: 1,
        borderColor: '#fff',
        backgroundColor: '#241332',
        width: WIDTH/1.3,
        height: 110,
        borderTopRightRadius: 55,
        borderBottomLeftRadius: 55
    },

})
