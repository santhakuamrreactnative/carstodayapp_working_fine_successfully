import React, { Component } from 'react';
import { StyleSheet, View, Button, Text, Image, TouchableHighlight } from 'react-native';
import { shadow } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default class SellCar extends Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'space-between', flexDirection: 'column' }}>

                <View style={{ flex: 1, flexDirection: 'column' }}>
                    <View style={styles.container}>
                        <Image
                            source={
                                require('../assets/logo.png')
                            } style={styles.top_bar_title}
                        ></Image>

                    </View>

                    <View >
                        <View style={styles.container_header}>
                            <Image
                                source={
                                    require('../assets/my_listing.png')
                                } style={{
                                    backgroundColor: 'white',
                                    height: 100,
                                    width: 100,
                                    borderRadius: 200 / 2, alignItems: 'center'
                                }}
                            ></Image>
                            <Text style={styles.text_title}>My Listing</Text>
                        </View>

                    </View>

                </View>


                <View style={{ alignItems: 'flex-end', marginBottom: 10, marginRight: 10 }}>
                    <TouchableHighlight style={{ height: 60, width: 60, borderRadius: 100 / 2 }} onPress={() => alert('You have press plus button')}>
                        <View style={styles.redRound}>
                            <MaterialCommunityIcons name='plus' color='white' size={26}></MaterialCommunityIcons>
                        </View>
                    </TouchableHighlight>
                </View>



            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        marginLeft: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    top_bar_title: {
        height: 50,
        width: 170,
        marginTop: 10
    },
    searchbar: {
        marginTop: 20,
        alignItems: 'flex-end',
        marginRight: 20
    },
    subTopic: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20
    },
    subTopic_option: {
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 20,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 5,
        paddingBottom: 5,
        elevation: 5

    },
    container_header: {
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 40
    },
    text_title: {
        fontSize: 20,
        color: 'red',
        fontWeight: 'bold'
    },
    redRound: {
        height: 60,

        width: 60,
        borderRadius: 100 / 2,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center'
    }
})