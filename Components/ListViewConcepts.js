import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SingleList from './SingleList';
import CustomListView from './CustomListView';
import ArrayListView from './ArrayListView';

export default class ListViewConcepts extends Component {
    constructor(props) {
        super(props)
    }

    singleList = () => {
        this.props.navigation.navigate('SingleList');

    }

    render() {
        return (
            <View>
                <Button title='Single' onPress={this.singleList}>Single</Button>
                <Button title='CustomList' onPress={() => this.props.navigation.navigate('CustomListView')}>CustomList</Button>
                <Button title='ArrayList' onPress={() => this.props.navigation.navigate('ArrayListView')}>ArrayListView</Button>
            </View>
        );
    }
}