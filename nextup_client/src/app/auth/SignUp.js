import React, { useState } from 'react'
import {
	StyleSheet,
	View,
	Text,
	TextInput,
	TouchableOpacity,
	ToastAndroid
} from 'react-native'
import generalStyles from './../../assets/styles/general'
import ButtonB1 from "./../../components/defaults/buttons/ButtonB1";

export default props => {

	const userObj = { name: '', email: '', password: '', phone: '' }
	
	const [user, setUser] = useState(userObj)
	const [currentInput, setCurrentInput] = useState(0)
	const [load, setLoad] = useState(false)

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
			
			setLoad(true)

			setTimeout(() => {
				props.navigation.navigate('VerificationCode')
				setLoad(false)
			}, 1000)

        } catch (error) {
            
        }
	}
	
	return <>
		<View style={styles.viewDefault}>
			<View style={styles.viewTop} />
			<View style={styles.viewFloat} >
				<View style={styles.groupButton}>
					<TouchableOpacity style={styles.btnDefault}
						onPress={() => props.navigation.navigate("SignIn")}>
						<Text style={styles.textFont(13, generalStyles.colors.colorA7, 'normal')}>LOG IN</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.btnDefault}>
						<Text style={styles.textFont(13, generalStyles.colors.colorA1, 'bold')}>SIGN UP</Text>
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
				<ButtonB1 
					style={{ marginTop: 25}}
					backgroundColor={generalStyles.colors.colorA3} 
					typeWidthBtn="large"
					label="CONTINUE"
					loadIsValid={load}
					execEvent={() => continueLogin()}
				/>
			</View>
		</View>
    </>
}
		  
const styles = StyleSheet.create({
	viewDefault: {
		flex: 1,
		height: generalStyles.HEIGHT,
		width: generalStyles.WIDTH,
		backgroundColor: generalStyles.colors.colorA5
	},
	viewTop: {
		justifyContent: 'center',
		alignItems: 'center',
		height: generalStyles.HEIGHT - (generalStyles.HEIGHT/1.75),
		width: generalStyles.WIDTH,
		backgroundColor: generalStyles.colors.colorA3,
		borderBottomLeftRadius: 85
	},
	viewFloat: {
		position: 'absolute',
		justifyContent: 'center',
		alignItems: 'stretch',
		width: generalStyles.WIDTH - 60,
		minHeight: 450,
		maxHeight: generalStyles.HEIGHT - 200,
		marginHorizontal: 30,
		marginTop: 40
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
		backgroundColor: generalStyles.colors.colorA1,
		borderRadius: 50,
		paddingHorizontal: 30,
	},
	inputForm: {
		borderBottomWidth: 0.8,
		borderColor: generalStyles.colors.colorA8,
		fontFamily: generalStyles.fonts.fontFamily1,
	},
	inputFormActive: {
		borderBottomWidth: 1.5,
        borderColor: generalStyles.colors.colorA4,
        marginVertical: 5,
		paddingBottom: 5,
		fontFamily: generalStyles.fonts.fontFamily1,
	},

	textFont(fts, color, fontWeight) {
		return {
			color: color || generalStyles.colors.colorA1,
			fontSize: fts || 13,
			fontWeight: fontWeight || 'normal',
			fontFamily: generalStyles.fonts.fontFamily1
		}
	}
})
