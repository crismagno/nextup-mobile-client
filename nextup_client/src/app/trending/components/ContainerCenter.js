import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    Image
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import generalStyles from './../../../assets/styles/general'
import companies from "./../../../filesExample/companies";

export default props => {

    const [listTrending, setListCategories] = useState(companies)

    const goToEvent = item => {
        props.navigation.navigate('BookIt')
    }

    const renderListTrending = (trending, index) => {
        return <View key={trending.id}
            style={styles.boxTrending(trending.background, -index)}>
            
            {/* header */}
            <View style={styles.boxTop}>
                <Text style={styles.textFont(13, generalStyles.colors.colorA1)}>{`${trending.miles} miles away`}</Text>
                <Text style={styles.textFont(22, generalStyles.colors.colorA1, 'bold')}>{trending.title}</Text>
            </View>

            {/* center */}
            <View style={styles.boxCenter}>
                <Image style={styles.imgTrending}
                    imageStyle={{ borderTopRightRadius: 10, borderTopLeftRadius: 30, }}
                    source={trending.media} />
                <View>
                    <Text style={[styles.textFont(13, generalStyles.colors.colorA1, 'bold'), { marginBottom: -3}]}>{trending.subtitle}</Text>
                    <Text style={[styles.textFont(13, generalStyles.colors.colorA12), { marginBottom: -3}]}>{trending.address.district}</Text>
                    <Text style={[styles.textFont(13, generalStyles.colors.colorA12), { marginBottom: -3}]}>{trending.address.street}</Text>
                </View>
            </View>
            
            {/* bottom */}
            <View style={styles.boxBottom}>
                <TouchableOpacity style={styles.btnGo} onPress={() => goToEvent(trending)}>
                    <Text style={[styles.textFont(13, generalStyles.colors.colorA1), { marginRight: 5}]}>GO</Text>
                    <MaterialCommunityIcons name="arrow-right" color={generalStyles.colors.colorA1} size={22} />     
                </TouchableOpacity>
            </View>
        </View>
    }

    return (
        <View style={styles.container}>
            <ScrollView 
                contentContainerStyle={styles.styleScrollView1}
                horizontal={false}
                showsVerticalScrollIndicator={false}
            >
                {listTrending.map((trending, index) => renderListTrending(trending, index))}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    boxTrending(background, zIndex) {
        return {
            minHeight: (generalStyles.HEIGHT/5) + 140,
            width: generalStyles.WIDTH,
            paddingTop: 110,
            paddingHorizontal: 30,
            borderBottomLeftRadius: 85,
            marginTop: -80,
            backgroundColor: background,
            zIndex: zIndex,
            ...generalStyles.shadowButtons({ elevation: 5 })
        }
    },

    textFont(fts, color, fontWeight) {
        return {
            color: color || generalStyles.colors.colorA1,
            fontSize: fts || 13,
            fontWeight: fontWeight || 'normal',
            fontFamily: generalStyles.fontFamily1
        }
    },
    
    styleScrollView1: {
        paddingTop: 150
    },

    imgTrending: {
        width: 60,
        height: 60,
        borderRadius: 100,
        marginRight: 15,
        borderWidth: 1,
        borderColor: generalStyles.colors.colorA1
    },

    boxTop: {
        marginBottom: 5
    },

    boxCenter: {
        flexDirection: 'row'
    },

    boxBottom: {
        flexDirection: 'row-reverse'
    },

    btnGo: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 25,
        paddingVertical: 12,
        backgroundColor: generalStyles.colors.colorA10,
        borderRadius: 50,
        ...generalStyles.shadowButtons()
    }

})
