import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
    Dimensions,
    FlatList
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import moment from 'moment'
import 'moment/locale/pt-br'
const { width: WIDTH, height: HEIGHT } = Dimensions.get('window')

const listLineTest = [
    {
        id: Math.random(),
        title: 'Thai Thai',
        subtitle: 'rua station red',
        date: {
            hours: moment(),
            time: moment()
        },
        stars: 4.6,
        category: 'Restaurants',
        img: 'url-img'
    },
    {
        id: Math.random(),
        title: 'Thai2 Thai2',
        subtitle: 'rua station red',
        date: {
            hours: moment(),
            time: moment()
        },
        stars: 4.6,
        category: 'Restaurants',
        img: 'url-img'
    },
    {
        id: Math.random(),
        title: 'Thai3 Thai4',
        subtitle: 'rua station red',
        date: {
            hours: moment(),
            time: moment()
        },
        stars: 4.6,
        category: 'Restaurants',
        img: 'url-img'
    },
    {
        id: Math.random(),
        title: 'Thai3 Thai4',
        subtitle: 'rua station red',
        date: {
            hours: moment(),
            time: moment()
        },
        stars: 4.6,
        category: 'Restaurants',
        img: 'url-img'
    }
]
export default props => {

    const [listLine, setListLine] = useState(listLineTest)

    const timeCalc = time => {
        let timeSub = moment().diff(time, 'seconds')
        return timeSub+""
    }

    return (
        <View style={styles.container}>
            <View style={styles.containerTop}>
                <Text style={{ color: '#000', fontSize: 12}}>YOUR LINE</Text>
                <Text style={{ color: '#000', fontSize: 12}}>TIMES</Text>
            </View>
            
            <View style={styles.containerCenter}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    horizontal={false}
                    data={listLine}
                    renderItem={({ item }) => 
                        <TouchableOpacity style={styles.postContainer}>
                            <View style={styles.postStart}>
                                <Image style={styles.postImage} source={require('./../../../assets/images/recomended1.png')} />
                            </View>
                            <View style={styles.postCenter}>
                                <Text style={styles.textFont(16, '#000', true)}>{item.title.toUpperCase()}</Text>
                                <Text style={styles.textFont(13, '#0007')}>{item.category}</Text>
                                <Text style={styles.textFont(10, '#0007')}>{item.subtitle}</Text>
                            </View>
                            <View style={styles.postEnd}>
                                <Text style={styles.textFont(16, 'red', true)}>{timeCalc(item.date.hours)}</Text>
                                <Text style={styles.textFont(8.2, '#0007')}>{timeCalc(item.date.hours)}</Text>
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
        paddingVertical: 5
    },

    containerTop: {
        height: 35,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
    },

    containerCenter: {
        flex: 1,
        paddingVertical: 5,

    },

    tag: {
        backgroundColor: '#352641',
        paddingHorizontal: 25,
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
        borderBottomWidth: 1,
        borderColor: '#0001',
        flexDirection: 'row',
        justifyContent: 'center',
        height: 90,
        marginHorizontal: 10
    },

    postStart: {
        flex: 1,
        // borderWidth: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingVertical: 15
    },

    postCenter: {
        flex: 3.2,
        justifyContent: 'space-around',
        // borderWidth: 1,
        // backgroundColor: 'blue',
        paddingVertical: 10,
    },

    postEnd: {
        flex: 1.2,
        alignItems: 'flex-end',
        paddingVertical: 10,
        paddingHorizontal: 10
        // borderWidth: 1,
        // backgroundColor: '#0002'
    },

    postImage: {
        width: 33,
        height: 33
    }
})
