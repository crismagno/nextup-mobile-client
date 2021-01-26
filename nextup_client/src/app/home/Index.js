import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import {
	StyleSheet,
	View
} from 'react-native'

import ContainerCenter from './components/ContainerCenter'
import ContainerBottom from './components/ContainerBottom'
import Header from './../../components/app/Header'
import generalStyles from './../../assets/styles/general'

export default props => {

	const dispatch = useDispatch({})

    const goCategorySearch = () => {
        dispatch({
			type: 'CHANGE_MODE_SEARCH',
			payload: true
		})
    }

	const listButtonsMenu = [
		{
			label: "HOME",
			execEvent: () => null,
			isActive: true
		},
		{
			label: "SEARCH",
			execEvent: () => goCategorySearch(),
			isActive: false
		},
		{
			label: "CATEGORIES",
			execEvent: () => props.navigation.navigate('Category'),
			isActive: false
		}
	]

	return <View style={styles.container}>
		<View style={styles.containerTop}>
			<Header {...props} 
				listButtonsMenu={listButtonsMenu}
				showIconRight={true}
			/>
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
		backgroundColor: generalStyles.colors.colorA4,
	},

	containerTop: {
		height: '20%',
		borderBottomLeftRadius: 85,
	},

	containerCenter: {
		minHeight: generalStyles.HEIGHT / 2.8
	},

	containerBottom: {
		flex: 1,
		backgroundColor: generalStyles.colors.colorA1,
	},

})
