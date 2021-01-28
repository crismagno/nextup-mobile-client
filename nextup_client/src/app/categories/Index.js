import React from 'react';
import { useDispatch } from "react-redux";
import {
	StyleSheet,
	View
} from 'react-native'

import ContainerCenter from './components/ContainerCenter'
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
			label: "MY QUEUE",
			execEvent: () => props.navigation.navigate('Trending'),
			isActive: false
		},
		{
			label: "SEARCH",
			execEvent: () => goCategorySearch(),
			isActive: false
		},
		{
			label: "CATEGORIES",
			execEvent: () => props.navigation.navigate('Category'),
			isActive: true
		}
	]

	return <View style={styles.container}>
		<View style={styles.containerTop}>
			<Header {...props} 
				listButtonsMenu={listButtonsMenu}
				showIconLeft={true}
				showIconRight={true}
			/>
		</View>
		<View style={styles.containerCenter}>
			<ContainerCenter {...props}/>
		</View>
	</View>
}

const styles = StyleSheet.create({
	container: {
		position: 'relative',
		flex: 1,
		backgroundColor: generalStyles.colors.colorA4
	},

	containerTop: {
		position: 'absolute',
		top: 0,
		left: 0,
		height: '20%',
		width: generalStyles.WIDTH,
		backgroundColor: generalStyles.colors.colorA1,
		borderBottomLeftRadius: 85,
		zIndex: 1000
	},

	containerCenter: {
		height: generalStyles.HEIGHT
	}
})
