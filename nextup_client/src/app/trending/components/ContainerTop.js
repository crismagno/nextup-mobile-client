import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux'
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import generalStyles from './../../../helpers/styles/general'

export default props => {

    const dispatch = useDispatch({})

    const goCategorySearch = () => {
        dispatch({
			type: 'CHANGE_MODE_SEARCH',
			payload: true
		})
    }

    return (
        <View style={styles.container}>
            <View style={styles.containerTop}>
                <TouchableOpacity onPress={() => props.navigation.goBack()}>
                    <MaterialCommunityIcons style={{marginTop: 20, }} name="arrow-left" color="#000" size={25} />      
                </TouchableOpacity>      
            </View>
            <View style={styles.containerCenter}>
                <View style={styles.viewBtn}>
                    <TouchableOpacity style={styles.btnDefault}>
                        <MaterialCommunityIcons name="heart-outline" color="#0008" size={20} />
                    </TouchableOpacity>
                    <Text style={styles.textFormat(11, '#0006')}>FAVOURITE</Text>
                </View>
                <View style={styles.viewBtn}>
                    <TouchableOpacity style={[styles.btnDefault, { borderColor: '#D47FA9', borderWidth: 2}]}>
                        <MaterialCommunityIcons name="trending-up" color="#000" size={25} />
                    </TouchableOpacity>
                    <Text style={styles.textFormat(11, '#000')}>TRENDING</Text>
                </View>
                <View style={styles.viewBtn}>
                    <TouchableOpacity onPress={() => goCategorySearch()}
                        style={styles.btnDefault}>
                        <AntDesign name="search1" color="#0008" size={20} />
                    </TouchableOpacity>
                    <Text style={styles.textFormat(11, '#0006')}>SEARCH</Text>
                </View>
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
        flex: 4,
        flexDirection: 'row',
        justifyContent: 'center',
        paddingHorizontal: 40
    },

    viewBtn: {
        flex: 1,
        // borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    btnDefault: {
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 50,
        width: 45,
        height: 45,
        marginBottom: 5,
        borderColor: '#0004'
    },

    textFormat(fts, color) {
        return {
            fontSize: fts || 10,
            color: color || '#000',
            fontWeight: 'bold',
            fontFamily: generalStyles.fontFamily1
        }
    }

})
