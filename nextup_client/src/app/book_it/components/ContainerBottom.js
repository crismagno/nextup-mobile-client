import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto'
import generalStyles from "./../../../assets/styles/general";
import ButtonB1 from "./../../../components/defaults/buttons/ButtonB1";

export default props => {

    const allHours = () => {
        let arrayPM = []
        let hours = 0
        let sumTemp = 0.20

        while(hours <= 12) {

            arrayPM.push({
                hours: hours.toFixed(2)+"",
                type: 'PM'
            })

            hours += sumTemp
        }

        hours = 0

        while(hours <= 12) {

            arrayPM.push({
                hours: hours.toFixed(2)+"",
                type: 'AM'
            })
                        
            hours += sumTemp
        }

        return arrayPM

    }
    const [numPeople, setNumPeople] = useState(0)
    const [requestTime, setRequestTime] = useState('')
    const [load, setLoad] = useState(false)

    const renderDatesBookIt = () => {
        const buttonsFormat = allHours().map((dateBookIt, index) => {
            let activeButton = `${dateBookIt.hours}_${dateBookIt.type}` !== requestTime ? styles.buttonDateBookIt : styles.buttonDateBookItActive
            let activeText = `${dateBookIt.hours}_${dateBookIt.type}` !== requestTime ? styles.textFormat(12.5, generalStyles.colors.colorA6, 'bold') : styles.textFormat(12.5, generalStyles.colors.colorA2, 'bold')
            return <TouchableOpacity key={`${dateBookIt.hours}_${index}`} onPress={() => setRequestTime(`${dateBookIt.hours}_${dateBookIt.type}`)}
                style={activeButton}>
                <Text style={[activeText, { marginRight: 5 }]}>{String(dateBookIt.hours).replace('.', ':')}</Text>
                <Text style={activeText}>{dateBookIt.type}</Text>
            </TouchableOpacity>
        })

        return <ScrollView  contentContainerStyle={styles.scrollTime} 
            horizontal={false}
            showsVerticalScrollIndicator={false}>
            {buttonsFormat}
        </ScrollView>
    }

    const executeBookIt = () => {

        if (numPeople == 0 || requestTime == "") {
            return false
        }

        setLoad(true)

        setTimeout(() => {
            setLoad(false)
            const values = { numPeople, requestTime }
            props && props.execBookIt && props.execBookIt(values)
        }, 1000)
    }

    const execGoBack = () => {
        props.navigation.goBack()
    }

    return <ScrollView contentContainerStyle={styles.container}>
        <Text style={[styles.textFormat(28, generalStyles.colors.colorA2, 'bold'), { marginVertical: 10 }]}>How many people?</Text>
        <View style={styles.viewManyMinusPeople}>
            <TouchableOpacity onPress={() => numPeople > 0 && setNumPeople(numPeople - 1)} 
                style={styles.defaultButton()}>
                <Fontisto name="minus-a" size={20} color={generalStyles.colors.colorA2} />
            </TouchableOpacity>
            <Text style={styles.textFormat(40, generalStyles.colors.colorA8, null, 20)}>{numPeople}</Text>
            <TouchableOpacity onPress={() => setNumPeople(numPeople + 1)}
                style={styles.defaultButton(generalStyles.colors.colorA15)}>
                <Fontisto name="plus-a" size={20} color={generalStyles.colors.colorA1} />
            </TouchableOpacity>
        </View>
        <View style={styles.viewTime} >
            <Text style={styles.textFormat(15, generalStyles.colors.colorA2)}>Time</Text>

            {renderDatesBookIt()}

        </View>
        <View style={styles.viewButtonsBottom}>
            <ButtonB1 
                style={{ marginBottom: 10 }}
                backgroundColor={generalStyles.colors.colorA3} 
                typeWidthBtn="large"
                label="BOOK IT"
                loadIsValid={load}
                execEvent={() => executeBookIt()}
            />
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
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderTopLeftRadius: 85,
        paddingVertical: 3
    },

    viewManyMinusPeople: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: generalStyles.WIDTH,
        marginTop: 10,
        marginTop: 5,
        paddingHorizontal: 20
    },

    viewTime: {
        flex: 2,
        flexDirection: 'column',
        alignItems: 'center',
        width: generalStyles.WIDTH,
        marginBottom: 10
    },

    viewButtonsBottom: {
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

    defaultButton(color) {
        return {
            borderWidth: 1,
            borderRadius: 1000,
            marginHorizontal: 15,
            padding: 15,
            borderColor: generalStyles.colors.colorA15,
            backgroundColor: color || generalStyles.colors.colorA1
        }
    },

    scrollTime: {
        width: generalStyles.WIDTH / 2,
    },

    buttonDateBookIt: {
        flexDirection: 'row',
        justifyContent: 'center',
        borderWidth: 0.5,
        borderColor: generalStyles.colors.colorA8,
        marginHorizontal: 60,
        marginVertical: 5,
        borderRadius: 20,
        padding: 4
    },

    buttonDateBookItActive: {
        flexDirection: 'row',
        justifyContent: 'center',
        borderWidth: 1,
        marginHorizontal: 40,
        marginVertical: 5,
        borderRadius: 20,
        paddingVertical: 6,
        paddingHorizontal: 10,
        borderColor: generalStyles.colors.colorA4
    }

})
