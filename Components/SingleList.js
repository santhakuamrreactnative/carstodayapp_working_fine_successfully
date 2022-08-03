

import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

import { getSingleUser } from '../action';



const DataService = require("../action/data")






export default class SingleList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dataone: '',
            email: 'email',
            firstname: 'testing',
            url: "",
            text: ""
        }

        // this.SingleUserData();

    }

    componentDidMount() {
        this.SingleUserData();
    }

    SingleUserData = () => {
        // let data = {
        //     deviceId: DeviceInfo.getUniqueId(),
        //     apiKey: '12345',
        //   };

        //   getSingleUser(data).then(res => {

        getSingleUser().then(res => {
            console.log('getSingleUser: ', res);
            if (!res.error) {

                //    DataService.setData(res)
                //    const resdata = DataService.getData()
                this.setState({
                    email: res.data.email,
                    name: res.data.first_name,
                    url: res.support.url,
                    text: res.support.text
                })

                //     console.log('getSingleUser1: ', dataone);

            } else {

            }
        });


    }






    render() {
        return (
            <View>

                <Text>Email : {this.state.email}</Text>
                <Text>Name :  {this.state.name}</Text>
                <Text>Url : {this.state.url}</Text>
                <Text>Text :  {this.state.text}</Text>
            </View>
        );
    }
}