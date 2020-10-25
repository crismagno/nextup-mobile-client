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
				{/* <ContainerCenter {...props}/> */}
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
		height: HEIGHT/1.35
	}
})
