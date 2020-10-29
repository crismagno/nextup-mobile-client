import React, { useState } from 'react';
import {
	StyleSheet,
	View,
	Text,
	TouchableOpacity,
	Dimensions,
	Button,
	SafeAreaView
} from 'react-native'

import ContainerTop from './components/ContainerTop'
import ContainerCenter from './components/ContainerCenter'

const { width: WIDTH, height: HEIGHT } = Dimensions.get('window')

export default props => {

	return (
		<View style={styles.container}>
			<View style={styles.containerTop}>
				<ContainerTop {...props}/>
			</View>
            <View style={styles.containerCenter}>
				<ContainerCenter {...props}/>
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
		height: HEIGHT/4.5,
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
