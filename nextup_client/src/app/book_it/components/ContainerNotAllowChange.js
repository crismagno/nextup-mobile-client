import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    ScrollView
} from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import generalStyles from "../../../assets/styles/general";
import {
    ButtonDefault1
} from "./styledComponents";

export default props => {

    const execAcceptedChangeBookIt = () => {
        props && props.execAcceptedChangeBookIt && props.execAcceptedChangeBookIt()
    }

    const execCancel = () => {
        props && props.execCancel && props.execCancel()
    }

    return <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.containerTop} >
            <SimpleLineIcons style={styles.iconClock} name="clock" color={generalStyles.colors.colorA10} size={50} />
            <View >
                <Text style={[styles.textFormat(20, generalStyles.colors.colorA2), { width: 250 }]}>Change request wasn´t accepted</Text>
            </View>
        </View>
        <View style={styles.containerCenter}>
            <Text style={[styles.textFormat(20, generalStyles.colors.colorA4), { width: 250, textAlign: "center", marginTop: 20 }]}>
                The next avaliable spot is at {"3:30 PM"}.
            </Text>
            <Text style={[styles.textFormat(20, generalStyles.colors.colorA4, "bold"), { textAlign: "center", marginTop: 40 }]}>
                Do you wish to book it?
            </Text>
        </View>
        <View style={styles.contanierBottom}>
            <ButtonDefault1 onPress={() => execAcceptedChangeBookIt()} 
                background={generalStyles.colors.colorA3}>
                <MaterialCommunityIcons name="check" color={generalStyles.colors.colorA1} size={20} />      
            </ButtonDefault1>
            <ButtonDefault1 onPress={() => execCancel()} 
                background={generalStyles.colors.colorA11}>
                <MaterialCommunityIcons name="close" color={generalStyles.colors.colorA1} size={20} />      
            </ButtonDefault1>
        </View>
    </ScrollView>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: generalStyles.colors.colorA1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderTopLeftRadius: 85,
        paddingVertical: 3
    },

    containerTop: { 
        flexDirection: "row", 
        marginTop: 30 
    },

    containerCenter: {},

    contanierBottom: {
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    },

    textFormat(fts, color, fontWeight, mh) {
        return {
            color: color || generalStyles.colors.colorA1,
            fontSize: fts || 13,
            fontWeight: fontWeight || 'normal',
            marginHorizontal: mh || 0,
            fontFamily: generalStyles.fonts.fontFamily1,
            textAlign: "center"
        }
    },

    iconClock: { 
        marginRight: 10,
        marginTop: 5
    }
})
