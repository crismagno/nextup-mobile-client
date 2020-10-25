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
        flex: 1,
    },

    containerTop: {
        flex: 1,
		flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingTop: 5
        // borderWidth: 1
    },

    containerCenter: {
        flex: 1.7,
        paddingHorizontal: 50
    },

    containerBottom: {
        flex: 1.5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
		borderBottomLeftRadius: 85,
		paddingVertical: 10,
		paddingHorizontal: 20
    },

    textFormat() {
        return {
            alignItems: 'center',
            fontSize: 25,
            fontWeight: 'bold',
            marginTop: 10

        }
    },

    btnDefault: {
        // borderWidth: 1,
        paddingVertical: 7,
        paddingHorizontal: 20,
        borderRadius: 50
    },

    btnHome: {
		backgroundColor: '#8A56AC',
		marginRight: 20
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
