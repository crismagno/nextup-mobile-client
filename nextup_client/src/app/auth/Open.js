import React from 'react'
import {
	StyleSheet,
	View,
	Text,
	TouchableOpacity,
	Dimensions
} from 'react-native'
import ScreenDefault from '../defaults/ScreenDefault'

const { width: WIDTH, height: HEIGHT } = Dimensions.get('window')

export default props => {
	return <ScreenDefault showCircle>
		<TouchableOpacity style={styles.btnDefault('#8A56AC')}
			onPress={() => props.navigation.navigate("SignIn")}>
			<Text style={styles.textBtn}>LOG IN</Text>
		</TouchableOpacity>
		<TouchableOpacity style={styles.btnDefault('#241332')}
			onPress={() => props.navigation.navigate("SignUp")}>
			<Text style={styles.textBtn}>SIGN UP</Text>
		</TouchableOpacity>
	</ScreenDefault>
}

const styles = StyleSheet.create({
	btnDefault(color) {
		return {
			justifyContent: 'center',
			alignItems: 'center',
			// borderWidth: 1,
			marginVertical: 12,
			paddingVertical: 16,
			width: WIDTH / 1.6,
			borderRadius: 25,
			backgroundColor: color || '#FFF'
		}
	},

	// text--------------
	textBtn: {
		color: '#FFF'
	}
})
