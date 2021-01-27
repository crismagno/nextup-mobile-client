import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import generalStyles from "../../../assets/styles/general";

export default props => {

    const execGoBack = () => {
        props && props.execEvent && props.execEvent()
    }

    return <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.containerTop} >
            <SimpleLineIcons style={styles.iconClock} name="clock" color={generalStyles.colors.colorA10} size={50} />
            <View >
                <Text style={[styles.textFormat(25, generalStyles.colors.colorA2, "bold"), { width: 150 }]}>Pending confirmation</Text>
                <View style={{ marginTop: 10}}>
                    <Text style={styles.textFormat(16, generalStyles.colors.colorA2)}>{"Party of: 5"}</Text>
                    <Text style={styles.textFormat(16, generalStyles.colors.colorA2, "bold")}>Spot: {"12:00 PM"}</Text>
                </View>
            </View>
        </View>
        <View style={styles.containerBottom}>
            <TouchableOpacity style={styles.btnBack} onPress={() => execGoBack()}>
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
        marginTop: 70
    },

    containerBottom: {
        justifyContent: 'center',
        alignItems: 'center',
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
    },

    iconClock: { 
        marginRight: 10,
        marginTop: 10
    }
})
