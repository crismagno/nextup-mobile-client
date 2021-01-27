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
import ButtonB1 from "./../../../components/defaults/buttons/ButtonB1";

export default props => {

    const [showEventChange, setShowEventChange] = useState(false)

    const execChange = () => {
        setShowEventChange(true)
    }

    const execChangeTime = () => {
        props && props.execChangeTime && props.execChangeTime()
    }

    const execCancel = () => {
        props && props.execCancel && props.execCancel()
    }

    const renderButtonsEventChange = <>
        <ButtonB1 
            style={{ marginBottom: 10 }}
            backgroundColor={generalStyles.colors.colorA3} 
            typeWidthBtn="small"
            label="CHANGE TIME"
            execEvent={() => execChangeTime()}
        />
        <TouchableOpacity style={styles.btnBack} onPress={() => execCancel()}>
            <Text style={styles.textFormat(12, generalStyles.colors.colorA3)}>CANCEL</Text>
        </TouchableOpacity>
    </>

    return <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.containerTop} >
            <SimpleLineIcons style={styles.iconClock} name="clock" color={generalStyles.colors.colorA10} size={50} />
            <View >
                <Text style={[styles.textFormat(25, generalStyles.colors.colorA2, "bold"), { width: 150 }]}>Confirmed</Text>
                <View style={{ marginTop: 10}}>
                    <Text style={styles.textFormat(16, generalStyles.colors.colorA2)}>{"Party of: 5"}</Text>
                    <Text style={styles.textFormat(16, generalStyles.colors.colorA2, "bold")}>Spot: {"12:00 PM"}</Text>
                </View>
            </View>
        </View>
        <View style={styles.containerCenter}>
            {
                !showEventChange && 
                <Text style={[styles.textFormat(25, generalStyles.colors.colorA4, "bold"), { width: 170, textAlign: "center" }]}>
                    You´re next up in {"15 minutes"}
                </Text> 
                || 
                renderButtonsEventChange
            }
        </View>
        <View style={styles.containerBottom}>
            {
                !showEventChange && <TouchableOpacity style={styles.btnBack} onPress={() => execChange()}>
                    <Text style={styles.textFormat(12, generalStyles.colors.colorA3)}>CHANGE</Text>
                </TouchableOpacity>
            }
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

    containerCenter: { 
        justifyContent: "center", 
        alignItems: "center"
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
