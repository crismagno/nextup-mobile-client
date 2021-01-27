import colors from "./colors";
import fonts from "./fonts";
import loadGif from "./loadGif";
import images from "./images";
import maps from "./maps";
import { Dimensions } from "react-native";

const generals = {
    HEIGHT: Dimensions.get("window").height,
    WIDTH: Dimensions.get("window").width,
    
    shadowButtons(objStyle = {}) {
        return {
            shadowColor: objStyle.color || colors.colorA2,
            shadowOffset: objStyle.offset || { width: 10, height: 10 },
            shadowOpacity: objStyle.opacity || 1, 
            shadowRadius: objStyle.radius || 25, 
            elevation: objStyle.elevation || 1
        }
    }
}

export default {
    ...generals,
    colors,
    fonts,
    loadGif,
    images,
    maps
}