import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import generalStyles from './../../../assets/styles/general'
import MapView, { Marker } from 'react-native-maps';
import ButtonB1 from "./../../../components/defaults/buttons/ButtonB1";

export default props => {

    const [load, setLoad] = useState(false)

    const waitTimeOk = () => {
        setLoad(true)

        setTimeout(() => {
            setLoad(false)
            props && props.execEvent1 && props.execEvent1()
        }, 1000)
    }

    return <View style={styles.container}>

        <Text style={[styles.textFormat(35, generalStyles.colors.colorA2, 'bold'), { marginTop: 40 }]}>Waiting time</Text>
        <Text style={styles.textFormat(35, generalStyles.colors.colorA2, 'bold')}>is up!</Text>
        <Text style={[styles.textFormat(15, generalStyles.colors.colorA2, 'normal'), { marginTop: 25 }]}>Please come in now.</Text>

        <View style={styles.containerMaps}>
            <View style={styles.viewTop}>

                <View style={styles.viewTopLeft}>
                    <Ionicons name="location-outline" size={25} color={generalStyles.colors.colorA10} />
                </View>

                <View style={styles.viewTopCenter}>
                    <Text style={styles.textFormat(13.5, generalStyles.colors.colorA2, 'bold')}>{"Asian Thai"}</Text>
                    <Text style={styles.textFormat(11.5, generalStyles.colors.colorA10)}>{"78GT N Pine Island Rd, "}</Text>
                    <Text style={styles.textFormat(11.5, generalStyles.colors.colorA10)}>{"Plantation, FL 33322"}</Text>
                </View>

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

        <View>
            <ButtonB1
                style={{ marginBottom: 10 }}
                backgroundColor={generalStyles.colors.colorA3} 
                typeWidthBtn="small"
                label="On my way!"
                loadIsValid={load}
                execEvent={() => waitTimeOk()}
            />
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

    containerMaps: {
        flex: 1,
        marginTop: 20
    },

    btnBookIt: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        borderRadius: 50,
        width: 180,
        height: 50,
        marginVertical: 15,
        backgroundColor: generalStyles.colors.colorA3,
        ...generalStyles.shadowButtons()
    },

    textFormat(fts, color, fontWeight, mh, fontFamily) {
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
        flex: 1,
        padding: 10,
        justifyContent: 'flex-end',
        alignItems: 'flex-start'
    },

    viewBottom: {
        flex: 1.7,
        alignItems: 'center',
        borderColor: 'red',
        paddingHorizontal: 20
    },

    viewLocale: {
        // borderWidth: 1,
        borderColor: generalStyles.colors.colorA1,
        backgroundColor: generalStyles.colors.colorA1,
        width: generalStyles.WIDTH/1.3,
        height: 110,
        borderTopRightRadius: 55,
        borderBottomLeftRadius: 55,
        overflow: 'hidden'
    }
})
