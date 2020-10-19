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
import ContainerBottom from './components/ContainerBottom'


const { width: WIDTH, height: HEIGHT } = Dimensions.get('window')

export default props => {

	return (
		<View style={styles.container}>
			<View style={styles.containerTop}>
				<ContainerTop />
			</View>
			<View style={styles.containerCenter}>
				<ContainerCenter />
			</View>
			<View style={styles.containerBottom}>
				<ContainerBottom />
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#241332',
	},

	containerTop: {
		flex: 1.4,
		backgroundColor: '#FFF',
		borderBottomLeftRadius: 85,
	},

	containerCenter: {
		flex: 2,
	},

	containerBottom: {
		flex: 3,
		backgroundColor: '#FFF',
	},

})
