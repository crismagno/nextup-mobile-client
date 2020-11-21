import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    ImageBackground,
    TouchableOpacity,
    Dimensions,
    FlatList
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
const { width: WIDTH, height: HEIGHT } = Dimensions.get('window')

const listRecomendedTest = [
    {
        id: Math.random(),
        title: 'Thai Thai',
        stars: 4.6,
        category: 'Restaurants',
        img: require('./../../../assets/images/recomended4.jpeg')
    },
    {
        id: Math.random(),
        title: 'Thai2 Thai2',
        stars: 4.6,
        category: 'Restaurants',
        img: require('./../../../assets/images/recomended2.png')
    },
    {
        id: Math.random(),
        title: 'Thai3 Thai4',
        stars: 4.6,
        category: 'Restaurants',
        img: require('./../../../assets/images/recomended3.jpeg')
    },
    {
        id: Math.random(),
        title: 'Thai3 Thai4',
        stars: 4.6,
        category: 'Restaurants',
        img: require('./../../../assets/images/recomended4.jpeg')
    }
]
export default props => {

    const [listRecomended, setListRecomended] = useState(listRecomendedTest)

    return (
        <View style={styles.container}>
            <View style={styles.containerTop}>
                <Text style={[styles.tag, styles.textFont(11)]}>RECOMMENDED FOR YOU</Text>
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
                                source={item.img}>
                                <View style={styles.descriptionPost}>
                                    <View style={styles.postContent}>
                                        <Text style={styles.textFont(12, null, 'bold')}>{item.title}</Text>
                                        <Text style={styles.textFont(12)}>{item.stars}</Text>
                                    </View>
                                    <View style={{alignItems: 'center'}}>
                                        <Text style={styles.textFont(12)}>{item.category}</Text>
                                    </View>
                                </View>
                            </ImageBackground>
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
        paddingVertical: 5
    },

    containerTop: {
        height: 30,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
    },

    containerCenter: {
        flex: 1,
        // paddingHorizontal: 20,
        paddingVertical: 5
    },

    tag: {
        backgroundColor: '#352641',
        paddingHorizontal: 27,
        paddingVertical: 5,
        borderRadius: 20
    },

    textFont(fts, color, fontWeight) {
        return {
            color: color || '#FFF',
            fontSize: fts || 13,
            fontWeight: fontWeight && 'bold',
        }
    },

    // parts posts
    postContainer: {
        // borderWidth: 1,
        // borderColor: '#FFF',
        marginHorizontal: 10,
        borderRadius: 40,
        width: 135
    },

    postInto: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor:'#EA909A',
        borderRadius: 40,
        
    },

    postContent: {
        // borderWidth: 1,
        // borderColor: '#FFF',
        height: 35,
        paddingHorizontal: 10
    },
    // post

    descriptionPost: {
        // borderColor: 'red',
        // borderWidth: 1,
        paddingBottom: 10,
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40
    }


})
