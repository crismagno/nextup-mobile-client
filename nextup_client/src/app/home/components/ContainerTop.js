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
                <MaterialCommunityIcons style={{marginTop: 20}} name="cog-outline" color="#000" size={23} />
            </View>
            <View style={styles.containerCenter}>
                <Text style={styles.textFormat()} >My NextUp!</Text>
            </View>
            <View style={styles.containerBottom}>
                <TouchableOpacity style={[styles.btnDefault, styles.btnHome]}>
                    <Text style={styles.textFont(11, "#FFF")}>HOME</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnDefault}
                    onPress={() => props.navigation.navigate("Category")}>
                    <Text style={styles.textFont(11, "#0007")}>SEARCH</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnDefault}
                    onPress={() => props.navigation.navigate("Category")}>
                    <Text style={styles.textFont(11, "#0007")}>CATEGORIES</Text>
                </TouchableOpacity>
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
		alignItems: 'center',
        justifyContent: 'flex-end',
        alignItems: 'center',
		paddingHorizontal: 20
    },

    containerCenter: {
        flex: 1,
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
