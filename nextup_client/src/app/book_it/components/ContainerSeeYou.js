import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import generalStyles from '../../../assets/styles/general'
import MapView, { Marker } from 'react-native-maps';

export default props => {

    return <View style={styles.container}>
        <Text style={[styles.textFormat(35, generalStyles.colors.colorA2, 'bold'), { marginTop: 40 }]}>See you!</Text>
        <View style={styles.viewTopCenter}>
            <Ionicons name="location-outline" size={25} color={generalStyles.colors.colorA10} />
            <Text style={[styles.textFormat(16, generalStyles.colors.colorA2, 'bold'), { marginLeft: 5 }]}>{"Asian Thai"}</Text>
        </View>
        <View style={styles.viewBottom}>
            <View style={styles.viewLocale}>
                <MapView
                    // customMapStyle={customMapStyle}
                    style={{ flex: 1 }}
                    initialRegion={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                >
                    <Marker
                        coordinate={{
                            latitude: 37.78825,
                            longitude: -122.4324, 
                        }}
                    />
                </MapView>
            </View>
        </View>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 70,
        backgroundColor: generalStyles.colors.colorA1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderTopLeftRadius: 85,
        paddingVertical: 3
    },

    textFormat(fts, color, fontWeight, mh) {
        return {
            color: color || generalStyles.colors.colorA1,
            fontSize: fts || 13,
            fontWeight: fontWeight || 'normal',
            marginHorizontal: mh || 0,
            fontFamily: generalStyles.fonts.fontFamily1
        }
    },

    viewTop: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'stretch'
    },

    viewTopLeft: {
        width: 40,
        paddingBottom: 10,
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },

    viewTopCenter: {
        marginTop: 100,
        width: generalStyles.WIDTH,
        // borderWidth: 1,
        paddingHorizontal: 20,
        flexDirection: "row",
        justifyContent: 'flex-start',
        alignItems: 'center',
    },

    viewBottom: {
        flex: 1.7,
        marginTop: 20,
        alignItems: 'center',
        // borderWidth: 1,
        borderColor: 'red',
        paddingHorizontal: 20
    },

    viewLocale: {
        // borderWidth: 1,
        borderColor: generalStyles.colors.colorA2,
        backgroundColor: generalStyles.colors.colorA1,
        width: generalStyles.WIDTH/1.3,
        height: 110,
        borderTopRightRadius: 55,
        borderBottomLeftRadius: 55,
        overflow: 'hidden'
    },

})
