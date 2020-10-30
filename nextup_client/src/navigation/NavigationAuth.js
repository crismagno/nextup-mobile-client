import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
// routes
import Open from '../auth/Open'
import SignUp from '../auth/SignUp'
import SignIn from '../auth/SignIn'
import VerificationCode from '../auth/VerificationCode'
import Steps from '../auth/Steps'
import AppIndex from '../app/Index'

const Stack = createStackNavigator()
export default props => (
    <Stack.Navigator initialRouteName="AppIndex" 
        screenOptions={{ headerShown: false}}>
        <Stack.Screen name="Open" component={Open} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="VerificationCode" component={VerificationCode} />
        <Stack.Screen name="Steps" component={Steps} />
        <Stack.Screen name="AppIndex" component={AppIndex} />
    </Stack.Navigator>
)