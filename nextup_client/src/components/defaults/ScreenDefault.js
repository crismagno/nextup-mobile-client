import React from 'react'
import {
	StyleSheet,
	View,
	Text,
	Image
} from 'react-native'
import generalStyles from './../../assets/styles/general'

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
		height: generalStyles.HEIGHT,
		width: generalStyles.WIDTH,
		backgroundColor: generalStyles.colors.colorA5
	},
	viewTop: {
		justifyContent: 'center',
		alignItems: 'center',
		height: generalStyles.HEIGHT - (generalStyles.HEIGHT/1.9),
		width: generalStyles.WIDTH,
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
		width: generalStyles.WIDTH
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
