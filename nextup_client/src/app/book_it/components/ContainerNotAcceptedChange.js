import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import generalStyles from "../../../assets/styles/general";
import {
    ButtonDefault1
} from "./styledComponents";

export default props => {

    const execEventGoBackNotAcceped = () => {
        props && props.execEventGoBackNotAcceped && props.execEventGoBackNotAcceped()
    }

    return <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.containerTop} >
            <ButtonDefault1
                background={generalStyles.colors.colorA1}
                border={`1px solid ${generalStyles.colors.colorA4}`}>
                <MaterialCommunityIcons name="close" color="red" size={20} />      
            </ButtonDefault1>
            <View >
                <Text style={[styles.textFormat(20, generalStyles.colors.colorA2)]}>Change was not accepted.</Text>
            </View>
        </View>
        <View style={styles.containerCenter}>
            <Text style={[styles.textFormat(20, generalStyles.colors.colorA4)]}>
                You can contact {"Thai Thai"}.
            </Text>
            <View style={styles.containerCenterContact}>
                <MaterialCommunityIcons style={{ marginRight: 5 }} name="phone-outline" color={generalStyles.colors.colorA16} size={25} />     
				<Text style={{ fontSize: 20, marginLeft: 10 }}>{"78435435"}</Text>
            </View>
        </View>
        <View style={styles.containerBottom}>
            <TouchableOpacity style={styles.btnBack} onPress={() => execEventGoBackNotAcceped()}>
                <Text style={styles.textFormat(12, generalStyles.colors.colorA3)}>GO BACK</Text>
            </TouchableOpacity>
        </View>
    </ScrollView>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: generalStyles.colors.colorA1,
        justifyContent: 'space-between',
        alignItems: 'center',
        borderTopLeftRadius: 85,
        paddingVertical: 3,

    },

    containerTop: { 
        flexDirection: "row", 
        marginTop: 30 
    },

    containerCenter: {},

    containerCenterContact: { 
        flexDirection: "row", 
        marginTop: 15, 
        alignItems: "center", 
        justifyContent: "center" 
    },

    containerBottom: {
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    },

    btnBack: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 5,
        borderWidth: 1,
        borderColor: generalStyles.colors.colorA15,
        backgroundColor: generalStyles.colors.colorA5,
        borderRadius: 50,
        width: 150,
        marginBottom: 10,
        ...generalStyles.shadowButtons()
    },  

    textFormat(fts, color, fontWeight, mh) {
        return {
            color: color || generalStyles.colors.colorA1,
            fontSize: fts || 13,
            fontWeight: fontWeight || 'normal',
            marginHorizontal: mh || 0,
            fontFamily: generalStyles.fonts.fontFamily1
        }
    }
})
