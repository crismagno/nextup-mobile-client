import React, { useState } from 'react';
import {
	StyleSheet,
	View,
	Dimensions
} from 'react-native'

import Header from './../../components/app/Header'

const { width: WIDTH, height: HEIGHT } = Dimensions.get('window')

export default props => {

	const listButtonsMenu = [
		{
			label: "Home",
			execEvent: () => console.log("Home"),
			isActive: true
		},
		{
			label: "Search",
			execEvent: () => console.log("Search"),
			isActive: false
		},
		{
			label: "Category",
			execEvent: () => console.log("Category"),
			isActive: false
		}
	]

	return (
		<View style={styles.container}>
            <View style={styles.containerTop}>
				<Header listButtonsMenu={listButtonsMenu} />
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		position: 'relative',
		flex: 1,
		backgroundColor: '#241332',
	},

	containerTop: {
		position: 'absolute',
		top: 0,
		left: 0,
		height: '20%',
		width: WIDTH,
		backgroundColor: '#FFF',
		borderBottomLeftRadius: 85,
		zIndex: 1000,

		shadowColor: '#000',
        shadowOffset: { width: 10, height: 2 },
        shadowOpacity: 1,
        shadowRadius: 2,
        elevation: 5
	},

	containerCenter: {
		flex: 1
	}
})
