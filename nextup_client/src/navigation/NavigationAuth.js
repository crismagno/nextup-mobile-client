import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// routes
import Open from '../app/auth/Open';
import SignUp from '../app/auth/SignUp';
import SignIn from '../app/auth/SignIn';
import VerificationCode from '../app/auth/VerificationCode';
import Steps from '../app/auth/Steps';
import App from '../app/Index';

const Stack = createStackNavigator();

// create store
import { Provider } from "react-redux";
import store from './../redux-store/store/store';

export default props => (
    <Provider store={store} >
        <Stack.Navigator initialRouteName="App" 
            screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Open" component={Open} />
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="VerificationCode" component={VerificationCode} />
            <Stack.Screen name="Steps" component={Steps} />
            <Stack.Screen name="App" component={App} />
        </Stack.Navigator>
    </Provider>
);