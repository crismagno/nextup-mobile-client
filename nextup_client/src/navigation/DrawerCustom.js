import React from 'react'
import { View, Text, Image, StyleSheet, AsyncStorage } from 'react-native'
import { DrawerItems } from '@react-navigation/drawer'


export default props => {

    return (
        <View style={styles.container}>
            <Text>tessssttttt</Text>

            {/* <DrawerItems {...props} /> */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // marginTop: 30,
        backgroundColor: '#0002',
        borderTopRightRadius: 150
    },

    containerHeader: {
        position: 'relative'
    },

    imageAvatar: {
        width: 290,
        height: 200,
    },

    infoUser: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        padding: 3,
        width: 300,
        backgroundColor: '#0002'
    },

    infoUserName: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    infoText: {
        color: '#FFF',
        fontSize: 11
    },

    status: {
        width: 8,
        height: 8,
        borderColor: '#FFF',
        borderWidth: 0.5,
        borderRadius: 20,
        marginLeft: 4
    },

    statusOn: {
        backgroundColor: '#00e676',
    },

    statusOff: {
        backgroundColor: 'red',
    }

})