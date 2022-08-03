import React, { Component } from 'react';
import { StyleSheet, View, Button, Text, Image, TextInput, Alert } from 'react-native';
import { login } from '../action';

import DeviceInfo from 'react-native-device-info';

import { CheckBox } from '@react-native-community/checkbox';

export default class SignupDetailScreen extends Component {

    constructor(props) {
        super(props)
        this.state = {
            newpassword: '',
            checkboxone: false,
            password: '',
            confirmpassword: ''

        }
    }







    login_Process = () => {


        if (!this.state.mobile.trim() && !this.state.password.trim()) {


            return false;

        }










    }


    render() {
        return (
            <View style={styles.container}>

                <View style={styles.title_container}>
                    <Text style={styles.title}>Sign up</Text>

                    {/* <Image source={{
                    uri:'https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png'
                }} style={styles.image}></Image> */}

                    {/* <Image source={require('../assets/user.png')} style={styles.image}></Image> */}

                </View>

                <View>
                    <TextInput style={styles.input}
                        underlineColorAndroid="transparent"
                        placeholder="Enter New Password"
                        placeholderTextColor='#C6C8C8'
                        autoCapitalize="none"
                        keyboardType='numeric'
                        onChangeText={(newpassword) => this.setState({ newpassword })}
                        value={this.state.mobile} />






                    <TextInput style={styles.input}
                        underlineColorAndroid="transparent"
                        placeholder="Confirm password"
                        placeholderTextColor="#C6C8C8"
                        autoCapitalize="none"
                        keyboardType='numeric'
                        onChangeText={(password) => this.setState({ password })}
                        value={this.state.password} />



                </View>
                {/* <View style={styles.forget_password_view}>
                <Text style={styles.underlineword} onPress={this.forgotpassword}>Forget Password</Text>
                </View> */}


                <View style={styles.signup_view}>
                    <CheckBox value={this.state.checkboxone} onValueChange={this.setState({ checkboxone: true })} style={{ alignSelf: 'center' }} /><Text>I have read the <Text style={styles.underlineword} onPress={() => { }}>Terms & Conditions</Text>and<Text style={styles.underlineword} onPress={() => { }}>Privacy Policy</Text></Text>
                </View>

                <View style={styles.buttonView} >
                    {/* <Text style={styles.buttonView_Text} onPress={() => {alert('You have pressed login button'), this.props.navigation.navigate('ListViewConcepts')}}>Login</Text> */}
                    <Text style={styles.buttonView_Text} onPress={this.login_Process}>Submit</Text>

                </View>

                <View style={{ alignItems: 'center', justifyContent: 'center' }} >
                    <Image
                        source={require('../assets/carstoday_img.png')}
                        style={styles.image_bottom}></Image>
                </View>

            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EAEDED',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    title_container: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30
    },
    title: {
        fontSize: 23,
        color: 'red',
        fontWeight: "bold"
    },
    image: {
        marginTop: 30,
        height: 150,
        width: 150,
        borderRadius: 200 / 2
    },
    image_bottom: {
        width: 220,
        height: 50,
        marginTop: 100
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
    underlineword: {
        fontSize: 13,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
        color: '#3498DB',
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    forget_password_view: {
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        marginRight: 20

    },
    skip_for_now: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40

    },
    signup_view: {
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 20,
        marginTop: 50

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