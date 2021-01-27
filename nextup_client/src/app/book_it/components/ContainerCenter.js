import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Entypo from 'react-native-vector-icons/Entypo'
import generalStyles from './../../../assets/styles/general'
import MapView, { Marker } from 'react-native-maps';
import customMaps from './../../../assets/styles/maps' 

export default props => {

    const execEvent1 = () => {
        props && props.execEvent1 && props.execEvent1()
    }

    return (
        <View style={styles.container}>
            <View style={styles.viewTop}>

                <View style={styles.viewTopLeft}>
                    <Ionicons name="location-outline" size={25} color={generalStyles.colors.colorA10} />
                </View>

                <View style={styles.viewTopCenter}>
                    <Text style={styles.textFormat(14, generalStyles.colors.colorA1, 'bold')}>{"Asian Thai"}</Text>
                    <Text style={styles.textFormat(12, generalStyles.colors.colorA10)}>{"78GT N Pine Island Rd,"}</Text>
                    <Text style={styles.textFormat(12, generalStyles.colors.colorA10)}>{"Plantation, FL 33322"}</Text>
                </View>

                <TouchableOpacity 
                    onPress={() => execEvent1()}
                    style={styles.viewTopRight}>
                    <Entypo name="chevron-thin-right" size={15} color={generalStyles.colors.colorA1} />
                </TouchableOpacity>

            </View>
            <View style={styles.viewBottom}>
                <View style={styles.viewLocale}>
                    <MapView
                        customMapStyle={customMaps}
                        mapType="standard"
                        style={{ flex: 1, opacity: 0.999 }}
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
                            title={"NextUp"}
                            description={"NextUp"}
                        />
                    </MapView>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
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
        flex: 1,
        padding: 10,
        justifyContent: 'flex-end',
        alignItems: 'flex-start'
    },

    viewTopRight: {
        width: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },

    viewBottom: {
        flex: 1.7,
        alignItems: 'center',
        borderColor: 'red',
        paddingHorizontal: 20
    },

    viewLocale: {
        borderColor: '#fff',
        backgroundColor: '#FFF',
        width: generalStyles.WIDTH/1.3,
        height: 110,
        borderTopRightRadius: 55,
        borderBottomLeftRadius: 55,
        overflow: 'hidden'
    },

    textFormat(fontSize = 10, color = '#FFF', fontWeight = 'normal') {
        return {
            fontSize,
            color,
            fontWeight,
            fontFamily: generalStyles.fontFamily1
        }
    }
})
