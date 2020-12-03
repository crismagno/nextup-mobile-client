import React, { useState } from 'react';
import {
	StyleSheet,
	View
} from 'react-native'

import ContainerTop from './components/ContainerTop'
import ContainerCenter from './components/ContainerCenter'
import ContainerBottom from './components/ContainerBottom'

export default props => {

	return <View style={styles.container}>
		<View style={styles.containerTop}>
			<ContainerTop {...props}/>
		</View>
		<View style={styles.containerCenter}>
			<ContainerCenter {...props}/>
		</View>
		<View style={styles.containerBottom}>
			<ContainerBottom {...props}/>
		</View>
	</View>
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#241332',
	},

	containerTop: {
		height: '20%',
		backgroundColor: '#FFF',
		borderBottomLeftRadius: 85,
	},

	containerCenter: {
		flex: 2.2,
	},

	containerBottom: {
		flex: 3,
		backgroundColor: '#FFF',
	},

})
