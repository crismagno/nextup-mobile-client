import React from 'react';
import { SafeAreaView } from 'react-native'
import { NavigationContainer } from "@react-navigation/native";
import NavigationAppIndex from "./../navigation/NavigationDrawer";

const AppIndex = () => {
  return (
      <SafeAreaView style={{ flex: 1 }}>
        {/* <NavigationContainer independent={true}> */}
            <NavigationAppIndex />
        {/* </NavigationContainer> */}
      </SafeAreaView>
  )
}

export default AppIndex;
