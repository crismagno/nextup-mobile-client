import React, { useState, useEffect, useRef } from 'react'
import {
	StyleSheet,
	View,
	Text,
    TouchableOpacity,
    ToastAndroid,
    Image
} from 'react-native'
import Feather from "react-native-vector-icons/Feather";
import Ionicons from 'react-native-vector-icons/Ionicons'
import generalStyles from './../../assets/styles/general'

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
                        <Text style={styles.textFont(35, generalStyles.colors.colorA2)}>{''}</Text>
                    </TouchableOpacity>
                )
            } else if (btn == 'clear') {
                return (
                    <TouchableOpacity style={styles.btnKeyBoard} key={key} 
                        onPress={() => clearCode()}>
                            <Feather name="delete" size={25} color={generalStyles.colors.colorA6} />
                    </TouchableOpacity>
                )
            } else {
                return (
                    <TouchableOpacity style={styles.btnKeyBoard} key={key} 
                        onPress={() => setMessageCode(btn)}>
                        <Text style={styles.textFont(35, generalStyles.colors.colorA4)}>{btn}</Text>
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
                <Ionicons name='arrow-back' color={generalStyles.colors.colorA8} size={22}/>
            </TouchableOpacity>
            <Text style={[styles.textFont(25, generalStyles.colors.colorA4, 'bold'), { marginBottom: 30}]}>Verification Code</Text>
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
                <Text style={styles.textFont(12, generalStyles.colors.colorA3, "bold")}>Resend Code</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.viewBottom}>
            <TouchableOpacity style={styles.btnVerify}
                onPress={() => verifyCode()}>
                {
                    load ? <Image style={{ width: 25, height: 25 }} 
                        source={generalStyles.loadGif.loadRing} /> :
                    <Text style={styles.textFont(15, generalStyles.colors.colorA1, "bold")}>VERIFY</Text>
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
		height: generalStyles.HEIGHT,
		width: generalStyles.WIDTH,
		backgroundColor: generalStyles.colors.colorA5
	},
	viewTop: {
		justifyContent: 'flex-end',
		alignItems: 'center',
		height: generalStyles.HEIGHT * 0.17,
		width: generalStyles.WIDTH,
		backgroundColor: generalStyles.colors.colorA1,
		borderBottomLeftRadius: 85
	},
	viewCenter: {
        justifyContent: 'center',
		alignItems: 'center',
		height: generalStyles.HEIGHT * 0.25,
		width: generalStyles.WIDTH,
    },
    
    viewBottom: {
        flex: 1,
		justifyContent: 'flex-end',
		alignItems: 'center',
		width: generalStyles.WIDTH,
		backgroundColor: generalStyles.colors.colorA3,
		borderTopLeftRadius: 85
    },
    
    keyboardCode: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap', 
        justifyContent: 'center',
		alignItems: 'stretch',
		width: generalStyles.WIDTH,
		backgroundColor: generalStyles.colors.colorA1,
        borderTopLeftRadius: 85,
        padding: 20
    },

    btnKeyBoard: {
        justifyContent: 'center',
		alignItems: 'center',
        padding: 10,
        margin: 5,
        paddingHorizontal: 20,
        width: generalStyles.WIDTH/4,
    },

    viewCode: {
        flexDirection: 'row',
        justifyContent: 'center',
		alignItems: 'center',
		width: generalStyles.WIDTH,
    },

    boxTextCode: {
        paddingVertical: 25,
        paddingHorizontal: 25,
        marginHorizontal: 5,
        backgroundColor: generalStyles.colors.colorA1,
        borderRadius: 15,
        color: generalStyles.colors.colorA3,
        fontFamily: generalStyles.fonts.fontFamily1
    },

    btnResendCode: {
        marginTop: 15
    },

    btnVerify: {
        alignItems: 'center',
        marginBottom: 6,
        paddingVertical: 14,
        paddingHorizontal: 10,
        width: generalStyles.WIDTH,
        height: 48
    },

    btnGoBack: {
        flex: 1,
        justifyContent: 'center', 
        width: generalStyles.WIDTH,
        paddingLeft: 20
    },

	textFont(fts, color, fontWeight) {
		return {
			color: color || generalStyles.colors.colorA1,
            fontSize: fts || 13,
            fontWeight: fontWeight || 'normal',
            fontFamily: generalStyles.fonts.fontFamily1,
		}
	}
})
