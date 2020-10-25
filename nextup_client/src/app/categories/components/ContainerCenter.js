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
        img: 'url-img'
    },
    {
        id: Math.random(),
        title: 'Thai2 Thai2',
        stars: 4.6,
        category: 'Restaurants',
        img: 'url-img'
    },
    {
        id: Math.random(),
        title: 'Thai3 Thai4',
        stars: 4.6,
        category: 'Restaurants',
        img: 'url-img'
    }],
    [{

        id: Math.random(),
        title: 'Thai Thai',
        stars: 4.6,
        category: 'Restaurants',
        img: 'url-img'
    },
    {
        id: Math.random(),
        title: 'Thai2 Thai2',
        stars: 4.6,
        category: 'Restaurants',
        img: 'url-img'
    },
    {
        id: Math.random(),
        title: 'Thai3 Thai4',
        stars: 4.6,
        category: 'Restaurants',
        img: 'url-img'
    }],
    [{
        id: Math.random(),
        title: 'Thai Thai',
        stars: 4.6,
        category: 'Restaurants',
        img: 'url-img'
    },
    {
        id: Math.random(),
        title: 'Thai2 Thai2',
        stars: 4.6,
        category: 'Restaurants',
        img: 'url-img'
    },
    {
        id: Math.random(),
        title: 'Thai3 Thai4',
        stars: 4.6,
        category: 'Restaurants',
        img: 'url-img'
    }],
    [{
        id: Math.random(),
        title: 'Thai Thai',
        stars: 4.6,
        category: 'Restaurants',
        img: 'url-img'
    },
    {
        id: Math.random(),
        title: 'Thai2 Thai2',
        stars: 4.6,
        category: 'Restaurants',
        img: 'url-img'
    },
    {
        id: Math.random(),
        title: 'Thai3 Thai4',
        stars: 4.6,
        category: 'Restaurants',
        img: 'url-img'
    }]
]
export default props => {

    const [listCategories, setListCategories] = useState(listCategoriesTest)

    const renderCategory = category => {
        return <TouchableOpacity key={category.id}
            onPress={() => props.navigation.navigate('Trending')}
            style={styles.boxCategory}>
            <Image style={styles.imgCategory}
                imageStyle={{ borderTopRightRadius: 10, borderTopLeftRadius: 30, }}
                source={require('./../../../assets/images/recomended1.png')} />
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
        <View style={styles.container}>
            <ScrollView 
                contentContainerStyle={styles.styleScrollView1}
                horizontal={false}
                showsVerticalScrollIndicator={false}
            >
                {listCategories.map(item => renderListCategories(item))}
            </ScrollView>
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
        // borderWidth: 1,
        // borderColor: '#FFF',
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
        // borderWidth: 1,
        // borderColor: '#FFF',
        height: 35,
        paddingHorizontal: 10
    },
    
    styleScrollView1: {
        // flex: 1,
        // borderWidth: 1,
        // borderColor: '#FFF'
    },

    styleScrollView2: {
        // flex: 1,
        alignItems: 'flex-end',
        // borderWidth: 1,
        // borderColor: 'red',
        paddingHorizontal: 20
    },

    boxScrollCategory: {
        justifyContent:  'flex-end',
        // borderWidth: 1,
        // borderColor: '#FFF',
        height: HEIGHT / 3,
    },
    boxCategory: {
        width: 170,
        borderWidth: 1,
        borderColor: '#241332',
        // height: HEIGHT / 3,
        borderRadius: 10,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 20,
    },
    imgCategory: {
        flex: 2,
        width: 190,
        // height: 50,
        borderTopLeftRadius: 30,
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
