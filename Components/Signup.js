import React, { Component } from 'react';
import { StyleSheet, View, Button, Text, Image, TextInput } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


export default class LoginPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            mobile: '',
        }
    }

    forget_pwd() {
        alert('You have pressed forget password');
    }

    backClick = () => {
        this.props.navigation.goBack();
    }


    continueButton = () => {
        if (!this.state.mobile.trim()) {
            alert('Please insert your mobile number')
        } else if (this.state.mobile.trim().length < 10) {
            alert('Please enter valid mobile number')
        } else {
            this.props.navigation.navigate('SignupDetailScreen')
        }


        return false;
    }


    render() {
        return (
            <View style={styles.container}>



                <View style={styles.title_bar_content}>
                    <MaterialCommunityIcons name="arrow-left" color='red' size={25} onPress={this.backClick} style={{ marginTop: 3 }} />
                    <Text style={styles.title}>Signup</Text>
                    <Text>     </Text>
                </View>

                <View style={styles.title_container}>

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
                        maxLength={10}
                        keyboardType='numeric'
                        onChangeText={(mobile) => this.setState({ mobile })}
                        value={this.state.mobile} />

                </View>
                <View style={styles.buttonView} >
                    <Text style={styles.buttonView_Text} onPress={this.continueButton}>Continue</Text>
                </View>

                <View style={styles.signup_view}>
                    <Text>Already have account?  <Text style={styles.underlineword} onPress={() => this.props.navigation.goBack()}>Login Here</Text></Text>
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
        marginTop: 20
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
    },
    title_bar_content: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 10,
        marginRight: 10,
        marginTop: 20
    }
})