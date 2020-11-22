import React from 'react';
import { SafeAreaView } from 'react-native'
import { NavigationContainer } from "@react-navigation/native";
import NavigationAppIndex from "./../navigation/NavigationDrawer";

export default () => {
	return <SafeAreaView style={{ flex: 1 }}>
		{/* <NavigationContainer independent={true}> */}
		<NavigationAppIndex />
		{/* </NavigationContainer> */}
	</SafeAreaView>
}
