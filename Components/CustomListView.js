import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, FlatList, Image, ToachableOpacity } from 'react-native';

import { getAllUser } from '../action';



export default class CustomListView extends Component {



    constructor(props) {
        super(props);
        this.state = {
            dataone: []
        }
    }

    componentDidMount() {
        this.getAllData();
    }

    getAllData = () => {

        // let data = {
        //     deviceId: DeviceInfo.getUniqueId(),
        //     apiKey: '12345',
        //   };

        //   getSingleUser(data).then(res => {
        getAllUser().then(res => {
            console.log('getAllUser: ', res);
            if (!res.error) {
                //    DataService.setData(res)
                //    const resdata = DataService.getData()
                this.setState({
                    dataone: res.data,

                })

                //     console.log('getSingleUser1: ', dataone);

            } else {

            }
        });

    }





    render() {
        return (
            <View>

                <FlatList
                    data={this.state.dataone}
                    keyExtractor={({ id }, index) => id}
                    renderItem={({ item }) => (
                        <View style={styles.container}>
                            <View style={styles.sub_container}>
                                <View>
                                    <Image source={{ uri: item.avatar }} style={{ height: 100, width: 100 }} />
                                </View>
                                <View style={{ flexDirection: 'column', paddingLeft: 10, justifyContent: 'space-around' }}>
                                    <Text style={{ fontSize: 10, color: 'black', fontWeight: 'bold' }}>FirstName : {item.first_name}</Text>
                                    <Text style={{ fontSize: 10, color: 'black', fontWeight: 'bold' }}>LastName : {item.last_name}</Text>
                                    <Text style={{ fontSize: 10, color: 'black', fontWeight: 'bold' }}>Email : {item.email}</Text>
                                </View>
                            </View>
                        </View>
                    )}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'pink',
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 10,
        paddingBottom: 10
    },
    sub_container: {
        backgroundColor: 'grey',
        paddingLeft: 5,
        paddingRight: 5,
        paddingTop: 5,
        paddingBottom: 5,
        flexDirection: 'row'
    }
})