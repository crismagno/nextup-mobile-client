import React from 'react';
import {
	StyleSheet,
	Text,
	TouchableOpacity,
	Dimensions,
	Image
} from 'react-native';
import generalStyles from '../../../assets/styles/general';

const { width: WIDTH } = Dimensions.get('window');

export default props => {

    const TYPE_WIDTH_BTN = "small";

	return <TouchableOpacity 
		style={[styles.btnDefault(props.backgroundColor, props.typeWidthBtn || TYPE_WIDTH_BTN), props.style]}
        onPress={props.execEvent}
	>
		{
			props.loadIsValid ? <Image style={styles.loadImage} 
				source={generalStyles.loadGif.loadRing} /> :
			<Text style={styles.textBtn}>{props.label}</Text>
		}
    </TouchableOpacity>
};

const styles = StyleSheet.create({
	btnDefault(backgroundColor, typeWidthBtn) {

        const widthIs = () => {
            switch(typeWidthBtn) {
                case "small": return WIDTH / 2;
                case "middle": return WIDTH / 1.6;
				case "large": return WIDTH / 1.18;
				default: return WIDTH / 1.18;
            };
        };

		return {
			justifyContent: 'center',
			alignItems: 'center',
			paddingVertical: 15,
			width: widthIs(),
			height: 50,
			borderRadius: 25,
			backgroundColor: backgroundColor || generalStyles.colors.colorA1,
			...generalStyles.shadowButtons()
		};
	},

	textBtn: {
		color: generalStyles.colors.colorA1,
		fontFamily: generalStyles.fonts.fontFamily1,
		fontWeight: "bold"
	},

	loadImage: { 
		width: 25, 
		height: 25 
	}
});