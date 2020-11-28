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
import generalStyles from './../../../helpers/styles/general'

const listTrendingTest = [
    {
        id: Math.random()+"", 
        miles: '0.2',
        title: 'THAI THAI',
        subtitle: 'Thai',
        address: {
            district: 'test district',
            street: 'test street FR, 0003'
        },
        img: '',
        background: '#D47FA6'
    },
    {
        id: Math.random()+"", 
        miles: '0.2',
        title: 'THAI THAI',
        subtitle: 'Thai',
        address: {
            district: 'test district',
            street: 'test street FR, 0003'
        },
        img: '',
        background: '#241332'
    },
    {
        id: Math.random()+"", 
        miles: '0.2',
        title: 'THAI THAI',
        subtitle: 'Thai',
        address: {
            district: 'test district',
            street: 'test street FR, 0003'
        },
        img: '',
        background: '#8A56AC'
    },
    {
        id: Math.random()+"", 
        miles: '0.2',
        title: 'THAI THAI',
        subtitle: 'Thai',
        address: {
            district: 'test district',
            street: 'test street FR, 0003'
        },
        img: '',
        background: '#D47FA6'
    },
    {
        id: Math.random()+"", 
        miles: '0.2',
        title: 'THAI THAI',
        subtitle: 'Thai',
        address: {
            district: 'test district',
            street: 'test street FR, 0003'
        },
        img: '',
        background: '#241332'
    },
    {
        id: Math.random()+"", 
        miles: '0.2',
        title: 'THAI THAI',
        subtitle: 'Thai',
        address: {
            district: 'test district',
            street: 'test street FR, 0003'
        },
        img: '',
        background: '#8A56AC'
    }
]
export default props => {

    const [listTrending, setListCategories] = useState(listTrendingTest)

    const goBookIt = () => {
        props.navigation.navigate('BookIt')
    }

    const renderListTrending = (trending, index) => {
        return <View key={trending.id}
            style={[styles.boxTrending, { backgroundColor: trending.background, zIndex: -index }]}>
            {/* header */}
            <View style={styles.boxTop}>
                <Text style={styles.textFont(11, "#FFF")}>{`${trending.miles} miles away`}</Text>
                <Text style={styles.textFont(18, "#FFF", 'bold')}>{trending.title}</Text>
            </View>

            {/* center */}
            <View style={styles.boxCenter}>
                <Image style={styles.imgTrending}
                    imageStyle={{ borderTopRightRadius: 10, borderTopLeftRadius: 30, }}
                    source={require('./../../../assets/images/recomended1.png')} />
                <View>
                    <Text style={[styles.textFont(12, "#FFF", 'bold'), { marginBottom: -3}]}>{trending.subtitle}</Text>
                    <Text style={[styles.textFont(11, "#dedede"), { marginBottom: -3}]}>{trending.address.district}</Text>
                    <Text style={[styles.textFont(11, "#dedede"), { marginBottom: -3}]}>{trending.address.street}</Text>
                </View>
            </View>
            
            {/* bottom */}
            <View style={styles.boxBottom}>
                <TouchableOpacity style={styles.btnGo} onPress={goBookIt}>
                    <Text style={[styles.textFont(13, '#FFF'), { marginRight: 5}]}>GO</Text>
                    <MaterialCommunityIcons name="arrow-right" color="#FFF" size={22} />     
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

    boxTrending: {
        // borderWidth: 0.5,
        // borderColor: '#FFF',
        height: HEIGHT/2.5,
        width: WIDTH,
        paddingTop: 110,
        paddingHorizontal: 30,
        borderBottomLeftRadius: 85,
        marginTop: -80,

        shadowColor: '#000',
        shadowOffset: { width: 10, height: 2 },
        shadowOpacity: 1,
        shadowRadius: 2,
        elevation: 5
    },

    textFont(fts, color, fontWeight) {
        return {
            color: color || '#FFF',
            fontSize: fts || 13,
            fontWeight: fontWeight || 'normal',
            fontFamily: generalStyles.fontFamily1
        }
    },
    
    styleScrollView1: {
        paddingTop: 150
    },

    imgTrending: {
        width: 50,
        height: 50,
        borderRadius: 100,
        marginRight: 15,
        borderWidth: 1,
        borderColor: '#FFF'
    },

    boxTop: {
        // borderWidth: 1,
        marginBottom: 5
    },

    boxCenter: {
        flexDirection: 'row',
        // borderWidth: 1,
    },

    boxBottom: {
        flexDirection: 'row-reverse',
        // borderWidth: 1,
    },

    btnGo: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        // borderWidth: 0.2,
        // borderColor: '#FFF',
        paddingHorizontal: 25,
        paddingVertical: 12,
        backgroundColor: '#817889',
        borderRadius: 50,

        shadowColor: '#000',
        shadowOffset: { width: 1, height: 2 },
        shadowOpacity: 1,
        shadowRadius: 5,
        elevation: 5
    }

})
