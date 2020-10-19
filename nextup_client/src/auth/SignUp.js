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

	const [user, setUser] = useState({ name: '', email: '', password: '', phone: '' })
	
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

            props.navigation.navigate('SignIn')

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
						<Text style={styles.textFont(13, "#FFF8")}>LOG IN</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.btnDefault}>
						<Text style={styles.textFont(13)}>SIGN UP</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.form}>
					<TextInput style={styles.inputForm} 
						onChangeText={val => setUser({ ...user, name: val})}
						placeholder="Name" />
					<TextInput style={styles.inputForm} 
						onChangeText={val => setUser({ ...user, email: val})}
						placeholder="Email" 
						keyboardType="email-address" />
					<TextInput style={styles.inputForm} 
						onChangeText={val => setUser({ ...user, password: val})}
						placeholder="Password" 
						secureTextEntry={true}/>
					<TextInput style={styles.inputForm} 
						onChangeText={val => setUser({ ...user, phone: val})}
						keyboardType="number-pad"
						placeholder="Phone #" />
				</View>
				<TouchableOpacity style={styles.btnContinue}
					onPress={() => continueLogin()}>
					<Text style={styles.textFont(14)}>CONTINUE</Text>
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
		paddingHorizontal: 30
	},
	inputForm: {
		borderBottomWidth: 0.8,
		borderColor: '#0004'
	},
	btnContinue: {
		justifyContent: 'center',
		alignItems: 'center',
		height: 50,
		marginTop: 25,
		backgroundColor: '#8A56AC',
		borderRadius: 25
	},

	//text------------
	textFont(fts, color) {
		return {
			color: color ||'#FFF',
			fontSize: fts || 13
		}
	}
})
