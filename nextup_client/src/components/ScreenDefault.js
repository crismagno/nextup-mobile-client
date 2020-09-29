import React from 'react'
import {
	SafeAreaView,
	StyleSheet,
	ScrollView,
	View,
	Text,
	StatusBar,
	Dimensions,
	TouchableOpacity
} from 'react-native'

const { width: WIDTH, height: HEIGHT } = Dimensions.get('window')

const ScreenDefault = props => {
	return (
    <>
		<View style={styles.viewDefault}>
			<View style={styles.viewTop}>
				<View style={styles.viewCircleTop}>
					<Text style={styles.textFont}>NextUp</Text>
				</View>
			</View>
			<View style={styles.viewBottom}>
				{props.children}
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
		height: HEIGHT - (HEIGHT/1.9),
		width: WIDTH,
		backgroundColor: '#8A56AC',
		borderBottomLeftRadius: 85
	},
	viewCircleTop: {
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#FFF',
		width: 220,
		height: 220,
		borderRadius: 100000
	},

	viewBottom: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		width: WIDTH
	},

	//text------------
	textFont: {
		fontSize: 20
	}
})

export default ScreenDefault
