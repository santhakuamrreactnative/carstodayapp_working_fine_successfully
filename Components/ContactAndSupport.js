import React, { Component } from 'react';
import { StyleSheet, View, Button, Text, Image, TouchableHighlight, TextInput, Linking } from 'react-native';
import { shadow } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default class ContactAndSupport extends Component {

    constructor(props) {
        super(props);
        this.state = {
            number: "9876543210",

            message: ""
        }
    }


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
                            require('../assets/support.png')
                        } style={{
                            backgroundColor: 'white',
                            height: 100,
                            width: 100,
                            borderRadius: 200 / 2
                        }}
                    ></Image>
                    <Text style={styles.text_title}>Support</Text>
                </View>


                <TextInput style={styles.input}
                    underlineColorAndroid="transparent"
                    placeholder="Enter Feedback"
                    placeholderTextColor="#C6C8C8"
                    autoCapitalize="none"
                    onChangeText={this.handleEmail} />

                <View style={styles.buttonView} >
                    <Text style={styles.buttonView_Text} onPress={() => { alert('You have pressed send button') }}>Send</Text>
                </View>

                <View style={{ alignItems: 'center', marginTop: 20 }}>
                    <Text style={{ fontSize: 18, color: 'red' }}>
                        For any other support issues
                    </Text>
                    <Text style={{ fontSize: 18, color: 'red' }}>
                        please contact us
                    </Text>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 50, marginLeft: 40, marginRight: 40 }}>
                    <TouchableHighlight style={{ borderRadius: 150 / 2, height: 60, width: 60 }} onPress={() => Linking.openURL(`tel:${this.state.number}`)}>
                        <View style={styles.redRound}>

                            <MaterialCommunityIcons name='phone-outline' color='white' size={40}></MaterialCommunityIcons>

                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight style={{ borderRadius: 150 / 2, height: 60, width: 60 }} onPress={() => Linking.openURL(`mailto:cars2Day@gmail.com?subject=Feedback&body=${this.state.message}`)}>
                        <View style={styles.redRound}>
                            <MaterialCommunityIcons name='email-outline' color='white' size={40}></MaterialCommunityIcons>

                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight style={{ borderRadius: 150 / 2, height: 60, width: 60 }} onPress={() => alert('You have clicked Facebook button')}>
                        <View style={styles.blueRound}>
                            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={{ fontSize: 40, color: 'white', fontWeight: 'bold' }}>f</Text>
                            </View>
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
    },
    input: {
        marginTop: 25,
        height: 40,
        borderWidth: 1,
        borderRadius: 10,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 5,
        paddingLeft: 10,
        backgroundColor: 'white',
        borderLeftColor: 'red',
        borderRightColor: 'red',
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
    },
    redRound: {
        height: 60,
        width: 60,
        borderRadius: 100 / 2,
        backgroundColor: '#E74C3C',
        alignItems: 'center',
        justifyContent: 'center'
    },
    blueRound: {
        height: 60,
        width: 60,
        borderRadius: 100 / 2,
        backgroundColor: '#3498DB',
        alignItems: 'center',
        justifyContent: 'center'
    }
})