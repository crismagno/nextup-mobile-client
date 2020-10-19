import React, { useState, useEffect, useRef } from 'react'
import {
	StyleSheet,
	View,
	Text,
	Dimensions,
	TextInput,
    TouchableOpacity,
    ToastAndroid
} from 'react-native'
import FontAwesome from "react-native-vector-icons/FontAwesome";

const { width: WIDTH, height: HEIGHT } = Dimensions.get('window')

export default props => {

    const [userAuth, setUserAuth] = useState({ email: '', password: '' })
    
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

            showToast('Verification Code')
            props.navigation.navigate('VerificationCode')

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
						<Text style={styles.textFont(13, "#FFF")}>LOG IN</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.btnDefault}
                        onPress={() => props.navigation.navigate("SignUp")}>
						<Text style={styles.textFont(13, "#0007")}>SIGN UP</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.form}>
                    <TextInput style={styles.inputForm} 
                        value={userAuth.email}
                        onChangeText={val => setUserAuth({ ...userAuth, email: val })}
                        placeholder="Email" 
                        keyboardType="email-address" />
                    <TextInput style={styles.inputForm} 
                        value={userAuth.password}
                        onChangeText={val => setUserAuth({ ...userAuth, password: val })}
                        placeholder="Password" 
                        secureTextEntry={true}
                        />
				</View>
				<TouchableOpacity style={styles.btnContinue}
                    onPress={() => signIn()}>
					<Text style={styles.textFont(14)}>CONTINUE</Text>
				</TouchableOpacity>
                <TouchableOpacity style={styles.btnForgot}
                    onPress={() => forgotPassword()}>
					<Text style={styles.textFont(13, '#8A56AC', true)}>FORGOT PASSWORD?</Text>
				</TouchableOpacity>
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
		backgroundColor: '#FFF'
	},
	viewTop: {
		justifyContent: 'center',
		alignItems: 'center',
		height: HEIGHT - (HEIGHT/1.75),
		width: WIDTH,
		backgroundColor: '#8A56AC',
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
        borderRadius: 50
    },
    
    btnLogin: {
        backgroundColor: '#8A56AC'
    },  

	form: {
		// flex: 1,
		justifyContent: 'center',
		alignItems: 'stretch',
		backgroundColor: '#FFF',
        paddingHorizontal: 5,
        marginVertical: 20
	},
	inputForm: {
		borderBottomWidth: 0.8,
        borderColor: '#0004',
        marginVertical: 5,
        paddingBottom: 5
	},
	btnContinue: {
		justifyContent: 'center',
		alignItems: 'center',
		height: 50,
		marginTop: 25,
		backgroundColor: '#8A56AC',
		borderRadius: 25
    },
    btnForgot: {
        justifyContent: 'center',
		alignItems: 'center',
        marginVertical: 15,
        padding: 10
    },

	//text------------
	textFont(fts, color, fontWeight) {
		return {
			color: color ||'#FFF',
            fontSize: fts || 13,
            fontWeight: fontWeight && 'bold'
		}
	}
})
