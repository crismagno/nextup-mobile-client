import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import ScreenDefault from '../defaults/ScreenDefault'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather'
import generalStyles from "./../../helpers/styles/general"
import * as Animatable from 'react-native-animatable'

const { width: WIDTH, height: HEIGHT } = Dimensions.get('window')

export default props => {

    const [step, setStep] = useState(1)

    const nextStep = () => {
        if (step == 1) setStep(2)
        else if (step == 2) setStep(3)
        else props.navigation.navigate('App')
    }

    return <ScreenDefault showCircle stylePass={{ backgroundColor: '#FFF'}}>
        <View>
            <TouchableOpacity
                style={styles.btnCenter}
                onPress={() => nextStep()}>
                <View style={styles.stepsText}>
                    {step == 1 &&  <Animatable.Text animation="fadeIn" duration={500} style={styles.textCenter}>Your virtual line</Animatable.Text>}
                    {step == 2 &&  <Animatable.Text animation="slideInRight" duration={500} style={styles.textCenter}>Check-in, book your spot, manage your line.</Animatable.Text>}
                    {step == 3 &&  <Animatable.Text animation="slideInRight" duration={500} style={[styles.textCenter, { fontWeight: 'bold'}]}>Welcome to NextUp!</Animatable.Text>}
                    {step == 4 &&  <Animatable.Text animation="slideInRight" duration={500} style={styles.textCenter}></Animatable.Text>}
                </View>
                <View style={styles.steps}>
                    <View/>
                    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                        <FontAwesome style={{marginHorizontal: 10}}
                            name={ step == 1 ? 'circle' : 'circle-o' } color="#0008" size={9} />
                        <FontAwesome style={{marginHorizontal: 10}}
                            name={ step == 2 ? 'circle' : 'circle-o' } color="#0008" size={9} />
                        <FontAwesome style={{marginHorizontal: 10}}
                            name={ step == 3 ? 'circle' : 'circle-o' } color="#0008" size={9} />
                    </View>
                    {step === 3 ? <Feather name="arrow-right" color="#0006" size={22}/> : <View />}
                </View>
            </TouchableOpacity>
        </View>
    </ScreenDefault>
}

const styles = StyleSheet.create({
    btnDefault(color) {
        return {
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: 1,
            marginVertical: 12,
            paddingVertical: 14,
            width: WIDTH / 1.8,
            borderRadius: 25,
            backgroundColor: color || '#FFF' 
        }
    },

    stepsText: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 40,
        paddingHorizontal: 20
    },

    // text--------------
    steps: {
        width: WIDTH,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 70,
    },

    textCenter: {
        textAlign: 'center',
        fontSize: 23,
        fontFamily: generalStyles.fontFamily1
    }
});
