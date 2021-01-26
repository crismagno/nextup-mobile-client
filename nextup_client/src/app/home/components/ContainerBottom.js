import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
    FlatList
} from 'react-native';
import moment from 'moment'
import 'moment/locale/pt-br'
import generalStyles from './../../../assets/styles/general'

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
        let seconds = moment().diff(time, 'seconds')
        let minutes = moment().diff(time, 'minutes')
        let hours = moment().diff(time, 'hours')
        let days = moment().diff(time, 'days')
        let objTime = {
            value: 'empty',
            color: '#000'
        }

        // verificar se será setado horas ou segundos
        if (+seconds <= 60) {
            objTime['value'] = `${seconds} sec`
        } else if (+seconds > 60 && +seconds <= 3600){
            objTime['value'] = `${minutes} min`
        } else if (+seconds > 3600 && +seconds <= 86400) {
            objTime['value'] = `${hours} hr`
        } else {
            objTime['value'] = `${days} days` 
        }

        if (+minutes < 16) {
            objTime['color'] = '#D47FA6'
        }

        return objTime
    }

    return (
        <View style={styles.container}>
            <View style={styles.containerTop}>
                <Text style={styles.textFont(12, '#000')}>YOUR LINE</Text>
                <Text style={styles.textFont(12, '#000')}>TIMES</Text>
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
                                <Text style={styles.textFont(16, '#000', 'bold')}>{item.title.toUpperCase()}</Text>
                                <Text style={styles.textFont(13, '#0007', 'bold')}>{item.category}</Text>
                                <Text style={styles.textFont(10, '#0007', 'bold')}>{item.subtitle}</Text>
                            </View>
                            <View style={styles.postEnd}>
                                <Text style={styles.textFont(16, timeCalc(item.date.hours).color, 'bold')}>{timeCalc(item.date.hours).value}</Text>
                                <Text style={styles.textFont(11, '#0007', 'bold')}>{timeCalc(item.date.hours).value}</Text>
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
        height: 45,
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
            fontWeight: fontWeight || 'normal',
            fontFamily: generalStyles.fontFamily1,
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
