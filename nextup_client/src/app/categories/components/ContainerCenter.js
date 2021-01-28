import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    Image
} from 'react-native';
import generalStyles from './../../../assets/styles/general'
import categoriesExample from './../../../filesExample/categories'

export default props => {

    const [listCategories, setListCategories] = useState(categoriesExample.categories1)

    const renderCategory = category => {
        return <TouchableOpacity key={category.id}
            onPress={() => props.navigation.navigate('Trending')}
            style={styles.boxCategory}>
            <Image style={styles.imgCategory}
                source={category.media} />
            <View style={styles.boxCategoryBottom}>
                <Text style={styles.textFont(12.5, generalStyles.colors.colorA1, 'bold')}>{category.category}</Text>
            </View>
        </TouchableOpacity>
    }

    const renderListCategories = item => {
        return <View style={styles.boxScrollCategory} key={item[0].id}>
            <View style={{flex: 1}}/>
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

    return  <ScrollView 
        contentContainerStyle={styles.styleScrollView1}
        horizontal={false}
        showsVerticalScrollIndicator={false}>
        {listCategories.map(item => renderListCategories(item))}
    </ScrollView>
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
            color: color || generalStyles.colors.colorA1,
            fontSize: fts || 13,
            fontWeight: fontWeight || 'normal',
            fontFamily: generalStyles.fonts.fontFamily1
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
        backgroundColor: generalStyles.colors.colorA13,
        paddingVertical: 5,
        borderRadius: 40,
        
    },

    postContent: {
        height: 35,
        paddingHorizontal: 10
    },
    
    styleScrollView1: {
        paddingTop: 140,
        paddingBottom: 50
    },

    styleScrollView2: {
        alignItems: 'flex-end',
        paddingHorizontal: 20
    },

    boxScrollCategory: {
        justifyContent:  'flex-end',
        height: generalStyles.HEIGHT / 3,
    },
    boxCategory: {
        width: 170,
        borderWidth: 1.5,
        borderColor: generalStyles.colors.colorA4,
        borderRadius: 10,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 20,
        ...generalStyles.shadowButtons({ elevation: 5 })
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
        backgroundColor: generalStyles.colors.colorA9,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
        padding: 15 
    }

})
