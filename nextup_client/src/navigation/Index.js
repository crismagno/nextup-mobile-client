import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native'
import { NavigationContainer } from "@react-navigation/native";
import NavigationAuth from "./NavigationAuth";

const App = () => {
  return (
      <SafeAreaView style={{ flex: 1 }}>
        <NavigationContainer>
            <NavigationAuth />
        </NavigationContainer>
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({

});

export default App;
