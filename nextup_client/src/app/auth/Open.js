import React from 'react';
import { StyleSheet } from 'react-native';
import ScreenDefault from './../../components/defaults/ScreenDefault';
import generalStyles from './../../assets/styles/general';
import ButtonB1 from "../../components/defaults/buttons/ButtonB1";

export default props => {

	const goToRoute = route => {
		props.navigation.navigate(route);
	};

	return <ScreenDefault showCircle>
		<ButtonB1 
			style={styles.btnDefault}
			backgroundColor={generalStyles.colors.colorA3} 
			typeWidthBtn="middle"
			label="LOG IN"
			execEvent={() => goToRoute("SignIn")}
		/>
		<ButtonB1 
			backgroundColor={generalStyles.colors.colorA4} 
			typeWidthBtn="middle"
			label="SIGN UP"
			execEvent={() => goToRoute("SignUp")}
		/>
	</ScreenDefault>
};

const styles = StyleSheet.create({
	btnDefault: {
		marginBottom: 15
	}
});
