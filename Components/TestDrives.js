import React, { Component } from 'react';
import { StyleSheet, View, Button, Text, Image, TouchableHighlight } from 'react-native';
import { shadow } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default class TestDrives extends Component {
    render() {
        return (
            <View>
                <View style={styles.container}>
                    <View style={{ justifyContent: 'center', marginRight: 40 }}>
                        <MaterialCommunityIcons name="arrow-left" color='red' size={25} onPress={() => this.props.navigation.navigate('LoginPage')} style={{ justifyContent: 'center' }} />
                    </View>
                    <Image

                        source={
                            require('../assets/logo.png')
                        } style={styles.top_bar_title}
                    ></Image>
                </View>

                <View style={styles.container_header}>
                    <Image
                        source={
                            require('../assets/test-drives.png')
                        } style={{
                            backgroundColor: 'white',
                            height: 100,
                            width: 100,
                            borderRadius: 200 / 2
                        }}
                    ></Image>
                    <Text style={styles.text_title}>Test Drives</Text>
                </View>


                <View style={{ marginLeft: 10, marginRight: 10, marginTop: 150, alignItems: 'center' }}>
                    <Text style={{ fontSize: 18 }}>Kindly <Text style={{ textDecorationLine: 'underline', color: 'blue', fontSize: 18 }} onPress={() => this.props.navigation.navigate('LoginPage')}>login</Text> to check testdrives notifications</Text>
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        marginLeft: 20,
        flexDirection: 'row'
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
    }
})