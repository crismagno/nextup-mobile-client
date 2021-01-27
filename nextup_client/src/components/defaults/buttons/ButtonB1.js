import React from 'react';
import {
	StyleSheet,
	Text,
	TouchableOpacity,
	Image
} from 'react-native';
import generalStyles from '../../../assets/styles/general';

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
                case "small": return generalStyles.WIDTH / 2;
                case "middle": return generalStyles.WIDTH / 1.6;
				case "large": return generalStyles.WIDTH / 1.18;
				default: return generalStyles.WIDTH / 1.18;
            };
        };

		return {
			justifyContent: 'center',
			alignItems: 'center',
			paddingVertical: 15,
			width: widthIs(),
			height: 45,
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