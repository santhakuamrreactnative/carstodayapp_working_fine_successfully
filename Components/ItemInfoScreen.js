// import React, {Component} from 'react';
// import {StyleSheet,View,Text} from 'react-native';

// export default class ItemInfoScreen extends Component {

//     // let { itemTitle, itemYear} = this.props.route.params;



//     render(){

//         const {itemDetails} = this.props.route.params;
//         return(
//             <View>
//                 {/* <Text>{JSON.stringify(itemDetails)}</Text> */}
//                 <Text>{itemDetails.title}</Text>
//                 {/* <Text>{itemDetails.year}</Text> */}
//             </View>
//         );
//     }
// }




import React, { Component } from 'react';
import { StyleSheet, View, Button, Text, Image, TouchableHighlight } from 'react-native';
import { shadow } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default class ItemInfoScreen extends Component {
    render() {

        const { itemDetails } = this.props.route.params;

        return (
            <View>
                <View style={styles.container}>
                    <View style={{ justifyContent: 'center', marginRight: 40 }}>
                        <MaterialCommunityIcons name="arrow-left" color='red' size={25} onPress={() => this.props.navigation.goBack()} style={{ justifyContent: 'center' }} />
                    </View>
                    <Image
                        source={
                            require('../assets/logo.png')
                        } style={styles.top_bar_title}
                    ></Image>
                </View>

                <View style={styles.container_header}>


                    {
                        itemDetails.image ?

                            <Image
                                source={{
                                    uri: itemDetails.image,
                                }} style={{
                                    backgroundColor: 'white',
                                    height: 200,
                                    width: '95%',
                                    marginRight: 10,
                                    marginLeft: 10,
                                    borderRadius: 20
                                }}
                            ></Image>

                            :

                            <Image
                                source={{
                                    uri: 'https://icon-library.com/images/no-picture-available-icon/no-picture-available-icon-1.jpg',
                                }} style={{
                                    backgroundColor: 'white',
                                    height: 200,
                                    width: '95%',
                                    marginRight: 10,
                                    marginLeft: 10,
                                    borderRadius: 20
                                }}
                            ></Image>

                    }


                </View>

                <View style={styles.buttonView} >
                    {/* <Text style={styles.buttonView_Text} onPress={() => {alert('You have pressed login button'), this.props.navigation.navigate('ListViewConcepts')}}>Login</Text> */}
                    <Text style={styles.buttonView_Text} onPress={() => alert('You have clicked test drive')}>Book Test Drive</Text>

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