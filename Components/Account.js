import React, { Component } from 'react';
import { StyleSheet, View, Button, Text, Image, TouchableOpacity } from 'react-native';
import { shadow } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import TestDrives from './TestDrives';
import Notifications from './Notifications';
import ContactAndSupport from './ContactAndSupport';

export default class Account extends Component {

    goToLogin = () => {
        this.props.navigation.navigate('LoginPage')
    }


    render() {
        return (
            <View>
                <View style={styles.container}>
                    <Image
                        source={
                            require('../assets/logo.png')

                        } style={styles.top_bar_title}
                    ></Image>
                </View>

                <View style={styles.container_header}>
                    <Image
                        source={
                            require('../assets/user.png')
                        } style={{
                            backgroundColor: 'white',
                            height: 100,
                            width: 100,
                            borderRadius: 200 / 2
                        }}
                    ></Image>
                </View>

                <View style={styles.GroupOfList}>

                    <TouchableOpacity onPress={() => this.props.navigation.navigate('TestDrives')}>
                        <View style={styles.profileList}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                <View style={{ flexDirection: 'column', justifyContent: 'space-between' }}>
                                    <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white' }}>Test Drives</Text>
                                    <Text style={{ fontSize: 15, fontWeight: 'normal', color: 'white' }}>View and Manage your Test Drives</Text>

                                </View>
                                <View style={styles.whiteRound}><MaterialCommunityIcons name='chevron-right' color='black' size={25}></MaterialCommunityIcons></View>

                            </View>
                        </View>
                    </TouchableOpacity>


                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Notifications')}>
                        <View style={styles.profileList}>

                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white' }}>Notifications</Text>
                                <View style={styles.whiteRound}><MaterialCommunityIcons name='chevron-right' color='black' size={25}></MaterialCommunityIcons></View>

                            </View>

                        </View>
                    </TouchableOpacity>



                    <TouchableOpacity onPress={() => this.props.navigation.navigate('ContactAndSupport')}>
                        <View style={styles.profileList}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white' }}>Contact and Support</Text>
                                <View style={styles.whiteRound}><MaterialCommunityIcons name='chevron-right' color='black' size={25}></MaterialCommunityIcons></View>

                            </View>
                        </View>
                    </TouchableOpacity>


                    <TouchableOpacity>
                        <View style={styles.profileList}>

                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white' }}>About</Text>
                                <View style={styles.whiteRound}><MaterialCommunityIcons name='chevron-right' color='black' size={25}></MaterialCommunityIcons></View>

                            </View>
                        </View>
                    </TouchableOpacity>



                    <View style={styles.buttonView} >
                        <Text style={styles.buttonView_Text} onPress={this.goToLogin}>Login</Text>
                    </View>


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
        marginTop: 20
    },
    text_title: {
        fontSize: 20,
        color: 'red',
        fontWeight: 'bold'
    },
    profileList: {
        backgroundColor: '#283747',
        marginBottom: 20,
        height: 70,
        marginRight: 20,
        marginLeft: 20,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 10,
        justifyContent: 'center'
    },
    profileList_text: {
        flex: 1,
        flexDirection: 'column'
    },
    whiteRound: {
        backgroundColor: 'white',
        height: 30,
        width: 30,
        borderRadius: 60 / 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    GroupOfList: {
        marginTop: 40,
        flexDirection: 'column'
    },
    buttonView: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50

    },
    buttonView_Text: {
        fontSize: 20,
        color: 'white',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 50,
        paddingRight: 50,
        backgroundColor: 'red',
        borderRadius: 30,
        elevation: 7
    }
})