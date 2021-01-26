import React from 'react'
import {
	StyleSheet,
	View,
	Text,
	Dimensions,
	Image
} from 'react-native'
import generalStyles from './../../assets/styles/general'
const { width: WIDTH, height: HEIGHT } = Dimensions.get('window')

export default props => {
	return <View style={[styles.viewDefault, props.stylePass]}>
		<View style={styles.viewTop}>
			{
				props.showCircle && 
				<View style={styles.viewCircleTop}>
					<Image style={styles.imageQueue} source={generalStyles.images.imageA1}/>
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
		backgroundColor: generalStyles.colors.colorA5
	},
	viewTop: {
		justifyContent: 'center',
		alignItems: 'center',
		height: HEIGHT - (HEIGHT/1.9),
		width: WIDTH,
		backgroundColor: generalStyles.colors.colorA3,
		borderBottomLeftRadius: 85
	},
	viewCircleTop: {
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: generalStyles.colors.colorA1,
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

	textFont: {
		fontSize: 20,
		fontFamily: generalStyles.fonts.fontFamily1,
		color: generalStyles.colors.colorA4
	},

	imageQueue: { 
		width: 110, 
		height: 110
	}
})
