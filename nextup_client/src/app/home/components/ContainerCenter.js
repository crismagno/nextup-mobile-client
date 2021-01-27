import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    ImageBackground,
    TouchableOpacity,
    FlatList
} from 'react-native';
import generalStyles from './../../../assets/styles/general'

const listRecomendedTest = [
    {
        id: Math.random(),
        title: 'Thai Thai',
        stars: 4.6,
        category: 'Restaurants',
        media: generalStyles.images.imageA2
    },
    {
        id: Math.random(),
        title: 'Thai2 Thai2',
        stars: 4.6,
        category: 'Restaurants',
        media: generalStyles.images.imageA3
    },
    {
        id: Math.random(),
        title: 'Thai3 Thai4',
        stars: 4.6,
        category: 'Restaurants',
        media: generalStyles.images.imageA4
    },
    {
        id: Math.random(),
        title: 'Thai3 Thai4',
        stars: 4.6,
        category: 'Restaurants',
        media: generalStyles.images.imageA5
    }
]
export default props => {

    const [listRecomended, setListRecomended] = useState(listRecomendedTest)

    return (
        <View style={styles.container}>
            <View style={styles.containerTop}>
                <Text style={[styles.tag, styles.textFont(12, null, "bold")]}>RECOMMENDED FOR YOU</Text>
            </View>
            <View style={styles.containerCenter}>
                <FlatList
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    data={listRecomended}
                    renderItem={({ item }) => 
                        <TouchableOpacity style={styles.postContainer}>
                            <ImageBackground style={styles.postInto} 
                                imageStyle={{ borderRadius: 40}}
                                source={item.media}>
                                <View style={styles.descriptionPost}>
                                    <View style={styles.postContent}>
                                        <Text style={styles.textFont(12, null, 'bold')}>{item.title}</Text>
                                        <Text style={styles.textFont(12)}>{item.stars}</Text>
                                    </View>
                                </View>
                            </ImageBackground>
                            <View style={{alignItems: 'center'}}>
                                <Text style={styles.textFont(13, null, "bold")}>{item.category}</Text>
                            </View>
                        </TouchableOpacity>
                    }
                    keyExtractor={item => item.id}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 20
    },

    containerTop: {
        height: 30,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20
    },

    containerCenter: {
        flex: 1,
        paddingVertical: 5
    },

    tag: {
        backgroundColor: generalStyles.colors.colorA9,
        paddingHorizontal: 27,
        paddingVertical: 5,
        borderRadius: 20
    },

    textFont(fts, color, fontWeight) {
        return {
            color: color || generalStyles.colors.colorA1,
            fontSize: fts || 13,
            fontWeight: fontWeight && 'bold',
            fontFamily: generalStyles.fonts.fontFamily1,
        }
    },

    postContainer: {
        marginHorizontal: 10,
        borderRadius: 40,
        width: 135
    },

    postInto: {
        flex: 1,
        justifyContent: 'flex-end',
        borderRadius: 40,
        marginBottom: 5,
        paddingVertical: 15
    },

    postContent: {
        height: 35,
        paddingHorizontal: 10
    },

    descriptionPost: {
        paddingBottom: 10,
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40
    }

})
