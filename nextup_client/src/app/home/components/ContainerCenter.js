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
import companies from "./../../../filesExample/companies";

export default props => {

    const [listRecomended, setListRecomended] = useState(companies)

    const goToRoute = item => {
        props.navigation.navigate("BookIt")
    }

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
                        <TouchableOpacity onPress={() => goToRoute(item)}
                            style={styles.postContainer}>
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
