import React from 'react';
import { SafeAreaView } from 'react-native';
import { useSelector } from "react-redux";

import NavigationAppIndex from "./../navigation/NavigationDrawer";
import Search from './search/Index';
import IF from './../components/defaults/IF';

export default () => {

    const generalStore = useSelector(state => state.general)

	return <SafeAreaView style={{ flex: 1 }}>
		<NavigationAppIndex />
		
		{/* search categories */}
		<IF condition={generalStore.modeSearch}>
			<Search />
		</IF>
	</SafeAreaView>
};