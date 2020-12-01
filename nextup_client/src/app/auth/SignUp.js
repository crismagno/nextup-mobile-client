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
import generalStyles from './../../helpers/styles/general'
const { width: WIDTH, height: HEIGHT } = Dimensions.get('window')

export default props => {

	const [user, setUser] = useState({ name: '', email: '', password: '', phone: '' })
	const [currentInput, setCurrentInput] = useState(0)

	const showToast = text => {
        ToastAndroid.show(String(text), ToastAndroid.SHORT)
    }

	const continueLogin = () => {
        try {
            if (!user.name.trim()) {
                showToast('Name invalid!')
                return false
            }

            if (!user.email.trim()) {
                showToast('Email invalid!')
                return false
			}
			
			if (!user.password.trim()) {
                showToast('Password invalid!')
                return false
            }

            if (!user.phone.trim()) {
                showToast('Phone invalid!')
                return false
            }

            props.navigation.navigate('VerificationCode')

        } catch (error) {
            
        }
	}
	
	return (
    <>
		<View style={styles.viewDefault}>
			<View style={styles.viewTop} />
			<View style={styles.viewFloat} >
				<View style={styles.groupButton}>
					<TouchableOpacity style={styles.btnDefault}
						onPress={() => props.navigation.navigate("SignIn")}>
						<Text style={styles.textFont(13, '#FFF8', 'normal')}>LOG IN</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.btnDefault}>
						<Text style={styles.textFont(13, '#FFF', 'normal')}>SIGN UP</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.form}>
					<TextInput style={currentInput === 1 ? styles.inputFormActive : styles.inputForm}
						onChangeText={val => setUser({ ...user, name: val})}
						value={user.name}
						onFocus={() => setCurrentInput(1)}
						onBlur={() => setCurrentInput(0)}
						placeholder="Name" />
					<TextInput style={currentInput === 2 ? styles.inputFormActive : styles.inputForm}
						onChangeText={val => setUser({ ...user, email: val})}
						value={user.email}
						onFocus={() => setCurrentInput(2)}
						onBlur={() => setCurrentInput(0)}
						placeholder="Email" 
						keyboardType="email-address" />
					<TextInput style={currentInput === 3 ? styles.inputFormActive : styles.inputForm}
						onChangeText={val => setUser({ ...user, password: val})}
						value={user.password}
						onFocus={() => setCurrentInput(3)}
						onBlur={() => setCurrentInput(0)}
						placeholder="Password" 
						secureTextEntry={true}/>
					<TextInput style={currentInput === 4 ? styles.inputFormActive : styles.inputForm}
						onChangeText={val => setUser({ ...user, phone: val})}
						keyboardType="number-pad"
						value={user.phone}
						onFocus={() => setCurrentInput(4)}
						onBlur={() => setCurrentInput(0)}
						placeholder="Phone #" />
				</View>
				<TouchableOpacity style={styles.btnContinue}
					onPress={() => continueLogin()}>
					<Text style={styles.textFont(14, '#FFF', 'normal')}>CONTINUE</Text>
				</TouchableOpacity>
			</View>
		</View>
    </>
	);
}
		  
const styles = StyleSheet.create({
	viewDefault: {
		flex: 1,
		height: HEIGHT,
		width: WIDTH,
		backgroundColor: '#F1F0F2'
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
		position: 'absolute',
		justifyContent: 'center',
		alignItems: 'stretch',
		// borderWidth: 1,
		width: WIDTH - 60,
		minHeight: 450,
		maxHeight: HEIGHT - 200,
		marginHorizontal: 30,
		marginTop: 40
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
		padding: 10,
		paddingHorizontal: 20,
		marginHorizontal: 5
	},
	form: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'stretch',
		backgroundColor: '#FFF',
		borderRadius: 50,
		paddingHorizontal: 30,
	},
	inputForm: {
		borderBottomWidth: 0.8,
		borderColor: '#0004',
		fontFamily: generalStyles.fontFamily1,
	},
	inputFormActive: {
		borderBottomWidth: 1.5,
        borderColor: '#463851',
        marginVertical: 5,
		paddingBottom: 5,
		fontFamily: generalStyles.fontFamily1,
	},
	btnContinue: {
		justifyContent: 'center',
		alignItems: 'center',
		height: 50,
		marginTop: 25,
		backgroundColor: '#8A56AC',
		borderRadius: 25,
		...generalStyles.shadowButtons()
	},

	//text------------
	textFont(fts, color, fontWeight) {
		return {
			color: color ||'#FFF',
			fontSize: fts || 13,
			fontWeight: fontWeight || 'normal',
			fontFamily: generalStyles.fontFamily1
		}
	}
})
