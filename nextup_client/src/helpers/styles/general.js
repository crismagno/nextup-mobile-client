export default {
    fontFamily1: 'Montserrat-Regular',
    fontFamily2: 'Montserrat-Light',

    shadowButtons(objStyle = {}) {
        return {
            shadowColor: objStyle.color || '#000',
            shadowOffset: objStyle.offset || { width: 10, height: 10 },
            shadowOpacity: objStyle.opacity || 1, 
            shadowRadius: objStyle.radius || 25, 
            elevation: objStyle.elevation || 1
        }
    }
}