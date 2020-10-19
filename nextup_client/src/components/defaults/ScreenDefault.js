import React from 'react'
import {
	StyleSheet,
	View,
	Text,
	Dimensions,
	Image
} from 'react-native'
import FontAwesome from "react-native-vector-icons/FontAwesome";

const { width: WIDTH, height: HEIGHT } = Dimensions.get('window')

const ScreenDefault = props => {
	return (
    <>
		<View style={[styles.viewDefault, props.stylePass]}>
			<View style={styles.viewTop}>
				{
					props.showCircle && 
					<View style={styles.viewCircleTop}>
						<Image style={{ width: 90, height: 90 }} source={require('./../../assets/images/img_queue.png')}/>
						<Text style={styles.textFont}>NextUp</Text>
					</View>
				}
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
