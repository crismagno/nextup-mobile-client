import React from 'react';
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import NavigationAuth from "./NavigationAuth";

// create store
import { Provider } from "react-redux";
import store from './../redux-store/store/store';

export default () =>
	<Provider store={store} >
		<SafeAreaView style={{ flex: 1 }}>
			<NavigationContainer>
				<NavigationAuth />
			</NavigationContainer>
		</SafeAreaView>
	</Provider>