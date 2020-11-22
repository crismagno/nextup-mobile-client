import React, { useState } from 'react';

import { useDispatch, useSelector } from "react-redux";
import {
	StyleSheet,
	View,
	Dimensions,
} from 'react-native'

import ContainerTop from './components/ContainerTop'
import ContainerCenter from './components/ContainerCenter'
import Search from './../search/Index'
import IF from './../defaults/IF'

const { width: WIDTH, height: HEIGHT } = Dimensions.get('window')

export default props => {

	const dispatch = useDispatch({})
    const generalStore = useSelector(state => state.general)

	const goBackEventSearch = () => {
		dispatch({
			type: 'CHANGE_MODE_SEARCH',
			payload: false
		})
	}

	return <View style={styles.container}>
		<View style={styles.containerTop}>
			<ContainerTop {...props}/>
		</View>
		<View style={styles.containerCenter}>
			<ContainerCenter {...props}/>
		</View>

		{/* search categories */}
		<IF condition={generalStore.modeSearch}>
			<Search goBackEvent={goBackEventSearch} />
		</IF>
	</View>
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
		zIndex: 1000
	},

	containerCenter: {
		height: HEIGHT
	}

})
