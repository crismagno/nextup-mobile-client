import React from 'react'
import {
	StyleSheet,
	View,
	Text,
	Dimensions,
	Image
} from 'react-native'
import generalStyles from './../../helpers/styles/general'
const { width: WIDTH, height: HEIGHT } = Dimensions.get('window')

export default props => {
	return <View style={[styles.viewDefault, props.stylePass]}>
		<View style={styles.viewTop}>
			{
				props.showCircle && 
				<View style={styles.viewCircleTop}>
					<Image style={{ width: 110, height: 110 }} source={require('./../../assets/images/img_queue2.png')}/>
					<Text style={styles.textFont}>NextUp</Text>
				</View>
			}
		</View>
		<View style={styles.viewBottom}>
			{props.children}
		</View>
	</View>
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
		width: 200,
		height: 200,
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
		fontSize: 20,
		fontFamily: generalStyles.fontFamily1
	}
})
