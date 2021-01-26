import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import generalStyles from './../../assets/styles/general'

export default props => {

    const renderListButtonsMenu = () => {
        let listButtonsMenu = props.listButtonsMenu || []

        return listButtonsMenu.map((btnMenu, key) => {
            return <TouchableOpacity key={`${btnMenu.label}_${key}`}
                onPress={btnMenu.execEvent}
                style={[styles.btnDefault, btnMenu.isActive && styles.btnIsActive]}>
                <Text style={styles.textFont(11, !btnMenu.isActive && generalStyles.colors.colorA6, btnMenu.isActive && "bold") }>{btnMenu.label}</Text>
            </TouchableOpacity>
        })
    }

    return <View style={styles.container}>
        <View style={styles.containerTop}>
            {
                props.showIconLeft && <TouchableOpacity style={styles.btnGoBack}
                    onPress={() => props.navigation.goBack()} >
                    <Ionicons name='arrow-back' color={generalStyles.colors.colorA8} size={22}/>
                </TouchableOpacity> || <View style={styles.btnGoBack}/>
            }
            <Text style={styles.textTitle}>NextUp</Text>
            {
                props.showIconRight && <TouchableOpacity style={styles.btnCog} onPress={() => props.navigation.openDrawer()}>
                    <MaterialCommunityIcons name="cog-outline" color={generalStyles.colors.colorA8} size={23} />
                </TouchableOpacity> || <View style={styles.btnCog}/>
            }
        </View>
        <View style={styles.containerBottom}>
            {renderListButtonsMenu()}
        </View>
    </View>
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        backgroundColor: generalStyles.colors.colorA1,
        borderBottomLeftRadius: 85,
    },

    containerTop: {
        flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        marginTop: 15
    },

    containerBottom: {
        flex: 1.5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 40,
        borderBottomLeftRadius: 85
    },

    textTitle: {
        fontSize: 20,
        fontFamily: generalStyles.fonts.fontFamily4
    },

    btnDefault: {
        paddingVertical: 7,
        paddingHorizontal: 20,
        borderRadius: 50
    },

    btnIsActive: {
		backgroundColor: generalStyles.colors.colorA3,
        marginRight: 20,
        ...generalStyles.shadowButtons()
    },

    textFont(fts, color, fontWeight) {
        return {
            color: color || generalStyles.colors.colorA1,
            fontSize: fts || 13,
            fontWeight: fontWeight || 'normal',
            fontFamily: generalStyles.fonts.fontFamily1
        }
    },

    btnCog: {
        padding: 7
    },

    btnGoBack: {
        paddingLeft: 20
    },

})
