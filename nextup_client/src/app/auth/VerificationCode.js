import React, { useState, useEffect, useRef } from 'react'
import {
	StyleSheet,
	View,
	Text,
	Dimensions,
    TouchableOpacity,
    ToastAndroid,
    Image
} from 'react-native'
import Feather from "react-native-vector-icons/Feather";
import Ionicons from 'react-native-vector-icons/Ionicons'
import generalStyles from './../../helpers/styles/general'

const { width: WIDTH, height: HEIGHT } = Dimensions.get('window')

export default props => {

    const [code, setCode] = useState([])
    const [load, setLoad] = useState(false)
    
    const showToast = text => {
        ToastAndroid.show(String(text), ToastAndroid.SHORT)
    }

    const verifyCode = () => {
        try {
            if (code.length < 3) {
                showToast('code invalid!')
                return false
            }

            
            setLoad(true)
            
			setTimeout(() => {
                showToast('Verification Code')
                props.navigation.navigate('Steps')
				setLoad(false)
			}, 1000)

        } catch (error) {
            
        }
    }

    const resendCode = () => {
        try {
            
            showToast('resend code')

        } catch (error) {
            
        }
    }

    const setMessageCode = val => {
        let newCode = [...code]
        if (code.length <= 3) {
            newCode.push(val)
            setCode(newCode)
            code.length > 2 && verifyCode()
        }

    }

    const clearCode = () => {
        if (code.length > 0) {
            let newCode = [...code]
            newCode.pop()
            setCode(newCode)
        }
    }

    const renderButtons = () => {

        const buttons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'empty', 0, 'clear']
        const btnsRender = buttons.map((btn, key) => {

            if (btn == 'empty') {
                return (
                    <TouchableOpacity style={styles.btnKeyBoard} key={key}>
                        <Text style={styles.textFont(35, '#000')}>{''}</Text>
                    </TouchableOpacity>
                )
            } else if (btn == 'clear') {
                return (
                    <TouchableOpacity style={styles.btnKeyBoard} key={key} 
                        onPress={() => clearCode()}>
                            <Feather name="delete" size={25} color="#0009" />
                    </TouchableOpacity>
                )
            } else {
                return (
                    <TouchableOpacity style={styles.btnKeyBoard} key={key} 
                        onPress={() => setMessageCode(btn)}>
                        <Text style={styles.textFont(35, '#000')}>{btn}</Text>
                    </TouchableOpacity>
                )
            }
        })

        return btnsRender
    }

	return <View style={styles.viewDefault}>
        <View style={styles.viewTop}>
            <TouchableOpacity style={styles.btnGoBack}
                onPress={() => props.navigation.goBack()} >
                <Ionicons name='arrow-back' color='#0006' size={22}/>
            </TouchableOpacity>
            <Text style={[styles.textFont(25, '#000', 'bold'), { marginBottom: 30}]}>Verification Code</Text>
        </View>
        <View style={styles.viewCenter}>
            <View style={styles.viewCode}>
                <Text style={styles.boxTextCode}>{code[0]}</Text>
                <Text style={styles.boxTextCode}>{code[1]}</Text>
                <Text style={styles.boxTextCode}>{code[2]}</Text>
                <Text style={styles.boxTextCode}>{code[3]}</Text>
            </View>
            <TouchableOpacity style={styles.btnResendCode}
                onPress={() => resendCode()} >
                <Text style={styles.textFont(12, '#8A56AC')}>Resend Code</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.viewBottom}>
            <TouchableOpacity style={styles.btnVerify}
                onPress={() => verifyCode()}>
                {
                    load ? <Image style={{ width: 30, height: 30 }} 
                        source={generalStyles.loadRing} /> :
                    <Text style={styles.textFont(15, '#FFF')}>VERIFY</Text>
                }
            </TouchableOpacity>
            <View style={styles.keyboardCode}>
                {renderButtons()}
            </View>
        </View>
    </View>
}
		  
const styles = StyleSheet.create({
	viewDefault: {
        flex: 1,
        justifyContent: 'center',
		alignItems: 'center',
		height: HEIGHT,
		width: WIDTH,
		backgroundColor: '#F1F0F2'
	},
	viewTop: {
		justifyContent: 'flex-end',
		alignItems: 'center',
		height: HEIGHT * 0.17,
		width: WIDTH,
		backgroundColor: '#FFF',
		borderBottomLeftRadius: 85
	},
	viewCenter: {
        justifyContent: 'center',
		alignItems: 'center',
		height: HEIGHT * 0.25,
		width: WIDTH,
    },
    
    viewBottom: {
        flex: 1,
		justifyContent: 'flex-end',
		alignItems: 'center',
		// height: HEIGHT * 0.18,
		width: WIDTH,
		backgroundColor: '#8A56AC',
		borderTopLeftRadius: 85
    },
    
    keyboardCode: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap', 
        justifyContent: 'center',
		alignItems: 'stretch',
		// height: 310,
		width: WIDTH,
		backgroundColor: '#FFF',
        borderTopLeftRadius: 85,
        padding: 20
    },

    btnKeyBoard: {
        justifyContent: 'center',
		alignItems: 'center',
        // borderWidth: 1, 
        padding: 10,
        margin: 5,
        paddingHorizontal: 20,
        width: WIDTH/4,
    },

    viewCode: {
        flexDirection: 'row',
        justifyContent: 'center',
		alignItems: 'center',
		// height: 340,
		width: WIDTH,
    },

    boxTextCode: {
        paddingVertical: 25,
        paddingHorizontal: 25,
        marginHorizontal: 5,
        backgroundColor: "#FFF",
        borderRadius: 15,
        color: '#8A56AC',
        fontFamily: generalStyles.fontFamily1
    },

    btnResendCode: {
        // borderWidth: 1,
        marginTop: 15
    },

    btnVerify: {
        alignItems: 'center',
        // borderWidth: 1,
        marginBottom: 6,
        paddingVertical: 14,
        paddingHorizontal: 10,
        width: WIDTH,
    },

    btnGoBack: {
        flex: 1,
        justifyContent: 'center', 
        width: WIDTH,
        // borderWidth: 1,
        paddingLeft: 20
    },

	//text------------
	textFont(fts, color, fontWeight) {
		return {
			color: color ||'#FFF',
            fontSize: fts || 13,
            fontWeight: fontWeight || 'normal',
            fontFamily: generalStyles.fontFamily1,
		}
	}
})
