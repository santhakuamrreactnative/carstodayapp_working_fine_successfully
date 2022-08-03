import React, { Component } from 'react';
import { StyleSheet, View, Button, Text, Image, TextInput, Alert } from 'react-native';
import { login } from '../action';

import DeviceInfo from 'react-native-device-info';

export default class LoginPage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            mobile: '',
            errorMobile: '',
            password: '',
            errorPassword: ''
        }
    }



    goto_signup = () => {
        this.props.navigation.navigate('Signup')
    }

    forgotpassword = () => {
        this.props.navigation.navigate('ForgotPassword')
    }

    goto_home = () => {
        this.props.navigation.navigate('HomeScreen')
    }

    handleEmail = () => {

    }

    handlePassword = () => {

    }

    login_Process = () => {

        if (!this.state.mobile.trim() && !this.state.password.trim()) {

            this.setState({
                errorMobile: 'Mobile Number is missing',
                errorPassword: 'Password is missing'
            })

            return false;

        }



        let data = {

            deviceType: "Android",
            deviceToken: "token",
            //   mobile : "6382576835",
            //   password : "123456",
            mobile: this.state.mobile.trim(),
            password: this.state.password.trim(),
            token: ""

        }


        console.log('getLoginUser_params: ', DeviceInfo.getUniqueId());

        login(data).then(res => {
            console.log('getLoginUser_res: ', res);
            if (!res.error) {
                //    DataService.setData(res)
                //    const resdata = DataService.getData()
                // this.setState({
                //     dataone : res.data,
                // })

                //     console.log('getSingleUser1: ', dataone);

                // alert(res.message);

                this.setState({
                    mobile: '',
                    password: '',
                    errorMobile: '',
                    errorPassword: ''

                })


                Alert.alert(
                    'Alert',
                    res.message,
                    [
                        {
                            text: 'Cancel',
                            onPress: () => console.log('cancel pressed'),
                        },
                        {
                            text: 'Ok',
                            onPress: () => this.props.navigation.navigate('HomeScreen'),
                        }
                    ]
                )

                console.log('getLoginUser_res11: ', res.statusCode);

            } else {

                alert(res.message);

            }
        });

    }


    render() {
        return (
            <View style={styles.container}>

                <View style={styles.title_container}>
                    <Text style={styles.title} onPress={() => this.props.navigation.navigate('TestModelShowLocation')}>Login</Text>

                    {/* <Image source={{
                    uri:'https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png'
                }} style={styles.image}></Image> */}

                    <Image source={require('../assets/user.png')} style={styles.image}></Image>

                </View>

                <View>
                    <TextInput style={styles.input}
                        underlineColorAndroid="transparent"
                        placeholder="Enter Mobile No"
                        placeholderTextColor='#C6C8C8'
                        autoCapitalize="none"
                        keyboardType='numeric'
                        onChangeText={(mobile) => this.setState({ mobile })}
                        value={this.state.mobile} />



                    <Text style={{ fontSize: 10, color: 'red', paddingLeft: 30 }}>{this.state.errorMobile}</Text>



                    <TextInput style={styles.input}
                        underlineColorAndroid="transparent"
                        placeholder="Password"
                        placeholderTextColor="#C6C8C8"
                        autoCapitalize="none"
                        keyboardType='numeric'
                        onChangeText={(password) => this.setState({ password })}
                        value={this.state.password} />

                    <Text style={{ fontSize: 10, color: 'red', paddingLeft: 30 }}>{this.state.errorPassword}</Text>

                </View>
                <View style={styles.forget_password_view}>
                    <Text style={styles.underlineword} onPress={this.forgotpassword}>Forget Password</Text>
                </View>
                <View style={styles.buttonView} >
                    {/* <Text style={styles.buttonView_Text} onPress={() => {alert('You have pressed login button'), this.props.navigation.navigate('ListViewConcepts')}}>Login</Text> */}
                    <Text style={styles.buttonView_Text} onPress={this.login_Process}>Login</Text>

                </View>

                <View style={styles.signup_view}>
                    <Text>Don't have an account?   <Text style={styles.underlineword} onPress={this.goto_signup}>Signup Here</Text></Text>
                </View>

                <View style={styles.skip_for_now}>
                    <Text style={styles.underlineword} onPress={this.goto_home}>{"Skip for Now >"}</Text>
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