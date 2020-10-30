import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Dimensions,
    ScrollView,
    Image
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
const { width: WIDTH, height: HEIGHT } = Dimensions.get('window')

const listCategoriesTest = [
    [{
        id: Math.random(),
        title: 'Thai Thai',
        stars: 4.6,
        category: 'Restaurants',
        img: require('./../../../assets/images/recomended3.jpeg')
    },
    {
        id: Math.random(),
        title: 'Thai2 Thai2',
        stars: 4.6,
        category: 'Restaurants',
        img: require('./../../../assets/images/recomended4.jpeg')
    },
    {
        id: Math.random(),
        title: 'Thai3 Thai4',
        stars: 4.6,
        category: 'Restaurants',
        img: require('./../../../assets/images/recomended3.jpeg')
    }],
    [{

        id: Math.random(),
        title: 'Thai Thai',
        stars: 4.6,
        category: 'Restaurants',
        img: require('./../../../assets/images/recomended1.png')
    },
    {
        id: Math.random(),
        title: 'Thai2 Thai2',
        stars: 4.6,
        category: 'Restaurants',
        img: require('./../../../assets/images/recomended4.jpeg')
    },
    {
        id: Math.random(),
        title: 'Thai3 Thai4',
        stars: 4.6,
        category: 'Restaurants',
        img: require('./../../../assets/images/recomended4.jpeg')
    }],
    [{
        id: Math.random(),
        title: 'Thai Thai',
        stars: 4.6,
        category: 'Restaurants',
        img: require('./../../../assets/images/recomended2.png')
    },
    {
        id: Math.random(),
        title: 'Thai2 Thai2',
        stars: 4.6,
        category: 'Restaurants',
        img: require('./../../../assets/images/recomended4.jpeg')
    },
    {
        id: Math.random(),
        title: 'Thai3 Thai4',
        stars: 4.6,
        category: 'Restaurants',
        img: require('./../../../assets/images/recomended3.jpeg')
    }],
    [{
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
        img: require('./../../../assets/images/recomended3.jpeg')
    },
    {
        id: Math.random(),
        title: 'Thai3 Thai4',
        stars: 4.6,
        category: 'Restaurants',
        img: require('./../../../assets/images/recomended4.jpeg')
    }]
]
export default props => {

    const [listCategories, setListCategories] = useState(listCategoriesTest)

    const renderCategory = category => {
        return <TouchableOpacity key={category.id}
            onPress={() => props.navigation.navigate('Trending')}
            style={styles.boxCategory}>
            <Image style={styles.imgCategory}
                source={category.img} />
            <View style={styles.boxCategoryBottom}>
                <Text style={styles.textFont(12.5, "#fff")}>{category.category}</Text>
            </View>
        </TouchableOpacity>
    }

    const renderListCategories = item => {
        return <View style={styles.boxScrollCategory} key={item[0].id}>
            <View style={{flex: 1}}></View>
            <View style={{flex: 3}}>
                <ScrollView
                    contentContainerStyle={styles.styleScrollView2}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                >
                    {item.map(category => renderCategory(category))}
                </ScrollView>
            </View>
        </View>
    }

    return (
            <ScrollView 
                contentContainerStyle={styles.styleScrollView1}
                horizontal={false}
                showsVerticalScrollIndicator={false}
            >
                {listCategories.map(item => renderListCategories(item))}
            </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    containerTop: {
        height: 30,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
    },

    containerCenter: {
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 5
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
        marginRight: 20,
        borderRadius: 40,
        width: 120
    },

    postInto: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor:'#EA909A',
        paddingVertical: 5,
        borderRadius: 40,
        
    },

    postContent: {
        height: 35,
        paddingHorizontal: 10
    },
    
    styleScrollView1: {
        paddingTop: 150,
        paddingBottom: 50
    },

    styleScrollView2: {
        alignItems: 'flex-end',
        paddingHorizontal: 20
    },

    boxScrollCategory: {
        justifyContent:  'flex-end',
        height: HEIGHT / 3,
    },
    boxCategory: {
        width: 170,
        borderWidth: 1.5,
        borderColor: '#241332',
        borderRadius: 10,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 20,

        shadowColor: '#000',
        shadowOffset: { width: 10, height: 2 },
        shadowOpacity: 1,
        shadowRadius: 2,
        elevation: 5
    },
    imgCategory: {
        flex: 2,
        width: 190,
        borderTopLeftRadius: 29,
        borderTopRightRadius: 10,
    },
    boxCategoryBottom: {
        width: 190,
        height: 55,
        backgroundColor: "#352641",
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
        padding: 15 
    }


})
