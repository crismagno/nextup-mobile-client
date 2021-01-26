import React, { useState, useEffect, useRef } from 'react'
import {
	StyleSheet,
	View,
	Text,
	Dimensions,
	TextInput,
    TouchableOpacity,
	ToastAndroid,
	ScrollView
} from 'react-native'
import generalStyles from './../../assets/styles/general'
import ButtonB1 from "./../../components/defaults/buttons/ButtonB1";

const { width: WIDTH, height: HEIGHT } = Dimensions.get('window')

export default props => {
	const userInit = { email: '', password: '' }
    const [userAuth, setUserAuth] = useState(userInit)
	const [currentInput, setCurrentInput] = useState(0)
	const [load, setLoad] = useState(false)
	
    const showToast = text => {
        ToastAndroid.show(String(text), ToastAndroid.SHORT)
    }

    const signIn = () => {
        try {
            if (!userAuth.email.trim()) {
                showToast('Email invalid!')
                return false
            }

            if (!userAuth.password.trim()) {
                showToast('Password invalid!')
                return false
			}
			
			setLoad(true)

			setTimeout(() => {
				showToast('Verification Code')
				props.navigation.navigate('VerificationCode')
				setLoad(false)
			}, 1000)

        } catch (error) {
            
        }
    }

    const forgotPassword = () => {
        try {
            
            showToast('forgotPassword')

        } catch (error) {
            
        }
    }

	return (
    <>
		<View style={styles.viewDefault}>
			<View style={styles.viewFloat} >
				<View style={styles.groupButton}>
					<TouchableOpacity style={[styles.btnDefault, styles.btnLogin]}>
						<Text style={styles.textFont(13, generalStyles.colors.colorA1, "bold")}>LOG IN</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.btnDefault}
                        onPress={() => props.navigation.navigate("SignUp")}>
						<Text style={styles.textFont(13, generalStyles.colors.colorA6)}>SIGN UP</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.form}>
                    <TextInput style={currentInput === 1 ? styles.inputFormActive : styles.inputForm} 
                        value={userAuth.email}
                        onChangeText={val => setUserAuth({ ...userAuth, email: val })}
						onFocus={() => setCurrentInput(1)}
						onBlur={() => setCurrentInput(0)}
                        placeholder="Email" 
                        keyboardType="email-address" 
					/>
                    <TextInput style={currentInput === 2 ? styles.inputFormActive : styles.inputForm}  
                        value={userAuth.password}
						onChangeText={val => setUserAuth({ ...userAuth, password: val })}
						onFocus={() => setCurrentInput(2)}
						onBlur={() => setCurrentInput(0)}
                        placeholder="Password" 
                        secureTextEntry={true}
                        />
				</View>
				<View style={styles.viewBottom}>
					<ButtonB1 
						backgroundColor={generalStyles.colors.colorA3} 
						typeWidthBtn="large"
						label="CONTINUE"
						loadIsValid={load}
						execEvent={() => signIn()}
					/>
					<TouchableOpacity style={styles.btnForgot}
						onPress={() => forgotPassword()}>
						<Text style={styles.textFont(13, generalStyles.colors.colorA3, 'bold')}>FORGOT PASSWORD?</Text>
					</TouchableOpacity>
				</View>
			</View>
		</View>
    </>
	);
}
		  
const styles = StyleSheet.create({
	viewDefault: {
        flex: 1,
        justifyContent: 'center',
		alignItems: 'center',
		height: HEIGHT,
		width: WIDTH,
		backgroundColor: generalStyles.colors.colorA1
	},
	viewTop: {
		justifyContent: 'center',
		alignItems: 'center',
		height: HEIGHT - (HEIGHT/1.75),
		width: WIDTH,
		backgroundColor: generalStyles.colors.colorA3,
		borderBottomLeftRadius: 85
	},
	viewFloat: {
		justifyContent: 'center',
		alignItems: 'stretch',
		// borderWidth: 1,
		width: WIDTH - 60,
		minHeight: 450,
		maxHeight: HEIGHT - 200,
		// bottom: 80
	},
	groupButton: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		height: 60
	},
	btnDefault: {
		// borderWidth: 1,
		paddingVertical: 7,
		paddingHorizontal: 20,
        marginHorizontal: 5,
		borderRadius: 50,
    },
    
    btnLogin: {
		backgroundColor: generalStyles.colors.colorA3,
		...generalStyles.shadowButtons()
    },  

	form: {
		// flex: 1,
		justifyContent: 'center',
		alignItems: 'stretch',
		backgroundColor: generalStyles.colors.colorA1,
        paddingHorizontal: 5,
        marginVertical: 20
	},
	inputForm: {
		borderBottomWidth: 0.8,
        borderColor: generalStyles.colors.colorA8,
        marginVertical: 5,
		paddingBottom: 5,
		fontFamily: generalStyles.fonts.fontFamily1,
		fontWeight: '600'
	},
	inputFormActive: {
		borderBottomWidth: 1.5,
        borderColor: generalStyles.colors.colorA4,
        marginVertical: 5,
		paddingBottom: 5,
		fontFamily: generalStyles.fonts.fontFamily1,
		fontWeight: '600'
	},

    btnForgot: {
        justifyContent: 'center',
		alignItems: 'center',
        marginVertical: 15,
		padding: 10,
		...generalStyles.shadowButtons()
    },

	//text------------
	textFont(fts, color, fontWeight) {
		return {
			color: color ||generalStyles.colors.colorA1,
            fontSize: fts || 13,
			fontWeight: fontWeight || 'normal',
			fontFamily: generalStyles.fonts.fontFamily1,
		}
	},

	viewBottom: {
		marginTop: 20,
		alignItems: "center"
	}
})
