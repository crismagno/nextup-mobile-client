import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Dimensions,
    ScrollView,
    Image
} from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto'
import generalStyles from "./../../../assets/styles/general";
const { width: WIDTH, height: HEIGHT } = Dimensions.get('window')

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
    const [dateBook, setDateBook] = useState('')
    const [load, setLoad] = useState(false)

    const renderDatesBookIt = () => {
        const buttonsFormat = allHours().map((dateBookIt, index) => {
            let activeButton = `${dateBookIt.hours}_${dateBookIt.type}` !== dateBook ? styles.buttonDateBookIt : styles.buttonDateBookItActive
            let activeText = `${dateBookIt.hours}_${dateBookIt.type}` !== dateBook ? styles.textFormat(12.5, '#0008', 'bold') : styles.textFormat(12.5, '#000', 'bold')
            return <TouchableOpacity key={`${dateBookIt.hours}_${index}`} onPress={() => setDateBook(`${dateBookIt.hours}_${dateBookIt.type}`)}
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
        setLoad(true)

        setTimeout(() => {
            setLoad(false)
            props && props.executeBookIt && props.executeBookIt()
        }, 1000)
    }

    return <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.textFormat(28, '#000', 'bold')}>How many people?</Text>
        <View style={styles.viewManyMinusPeople}>
            <TouchableOpacity onPress={() => numPeople > 0 && setNumPeople(numPeople - 1)} 
                style={styles.defaultButton()}>
                <Fontisto name="minus-a" size={20} color="#9599B3" />
            </TouchableOpacity>
            <Text style={styles.textFormat(40, '#0004', null, 20)}>{numPeople}</Text>
            <TouchableOpacity onPress={() => setNumPeople(numPeople + 1)}
                style={styles.defaultButton('#9599B3')}>
                <Fontisto name="plus-a" size={20} color="#FFF" />
            </TouchableOpacity>
        </View>
        <View style={styles.viewTime} >
            <Text style={styles.textFormat(15, '#000')}>Time</Text>

            {renderDatesBookIt()}

        </View>
        <View style={styles.viewButtonsBottom}>
            <TouchableOpacity onPress={() => executeBookIt()}
                style={styles.btnBookIt}>
                {
                    load ? <Image style={{ width: 25, height: 25 }} 
                        source={generalStyles.loadRing} /> :
                    <Text style={styles.textFormat(14, '#FFF')}>BOOK IT</Text>
                }
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnBack} onPress={() => props.navigation.goBack()}>
                <Text style={styles.textFormat(12, '#AC66D9')}>GO BACK</Text>
            </TouchableOpacity>
        </View>
    </ScrollView>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderTopLeftRadius: 85,
        paddingVertical: 3
    },

    viewManyMinusPeople: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: WIDTH,
        marginTop: 10,
        marginTop: 5,
        paddingHorizontal: 20
    },

    viewTime: {
        flex: 2,
        flexDirection: 'column',
        alignItems: 'center',
        // borderWidth: 1,
        width: WIDTH,
        marginBottom: 10
    },

    viewButtonsBottom: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    btnBookIt: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        height: 50,
        // borderWidth: 1,
        borderRadius: 50,
        width: WIDTH/1.2,
        marginBottom: 10,
        backgroundColor: '#8A56AC',
        ...generalStyles.shadowButtons()
    },

    btnBack: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 5,
        borderWidth: 1,
        borderColor: '#969696',
        backgroundColor: '#F8F8F8',
        borderRadius: 50,
        width: 150,
        marginBottom: 10,
        ...generalStyles.shadowButtons()
    },  

    textFormat(fts, color, fontWeight, mh) {
        return {
            color: color || '#FFF',
            fontSize: fts || 13,
            fontWeight: fontWeight || 'normal',
            marginHorizontal: mh || 0,
            fontFamily: generalStyles.fontFamily1
        }
    },

    defaultButton(color) {
        return {
            borderWidth: 1,
            borderRadius: 1000,
            marginHorizontal: 15,
            padding: 15,
            borderColor: '#9599B3',
            backgroundColor: color || '#FFF'
        }
    },

    scrollTime: {
        // borderWidth: 1,
        width: WIDTH / 2,
    },

    buttonDateBookIt: {
        flexDirection: 'row',
        justifyContent: 'center',
        borderWidth: 0.5,
        borderColor: '#0003',
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
        borderColor: '#241332'
    }

})
