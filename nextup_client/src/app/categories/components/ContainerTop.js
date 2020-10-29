import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Dimensions,
    Button,
    SafeAreaView,
    TextInput
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
const { width: WIDTH, height: HEIGHT } = Dimensions.get('window')

export default props => {

    return (
        <View style={styles.container}>
            <View style={styles.containerTop}>
                <TouchableOpacity onPress={() => props.navigation.goBack()}>
                    <MaterialCommunityIcons style={{marginTop: 20}} name="arrow-left" color="#000" size={23} />      
                </TouchableOpacity>      
                <MaterialCommunityIcons style={{marginTop: 20}} name="cog-outline" color="#000" size={23} />
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
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingTop: 5,

        shadowColor: '#000',
        shadowOffset: { width: 10, height: 2 },
        shadowOpacity: 1,
        shadowRadius: 2,
        elevation: 5
    },

    containerCenter: {
        paddingHorizontal: 55,
        borderBottomLeftRadius: 85
    },

    textFormat() {
        return {
            alignItems: 'center',
            fontSize: 25,
            fontWeight: 'bold',
            marginTop: 10

        }
    },

    //text------------
    textFont(fts, color, fontWeight) {
        return {
            color: color || '#FFF',
            fontSize: fts || 13,
            fontWeight: fontWeight && 'bold'
        }
    }

})
