import React from 'react';
import { SafeAreaView } from 'react-native'
import NavigationAppIndex from "./../navigation/NavigationDrawer";

import { useSelector } from "react-redux"
import Search from './search/Index'
import IF from './defaults/IF'

export default () => {

    const generalStore = useSelector(state => state.general)

	return <SafeAreaView style={{ flex: 1 }}>
		<NavigationAppIndex />
		
		{/* search categories */}
		<IF condition={generalStore.modeSearch}>
			<Search />
		</IF>
	</SafeAreaView>
}
