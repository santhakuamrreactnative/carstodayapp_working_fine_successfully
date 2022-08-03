import React, { Component } from 'react';
import { StyleSheet, View, Modal, Button, Text, Image, TouchableOpacity, TextInput, TouchableHighlight, FlatList, TouchableWithoutFeedback } from 'react-native';
import { shadow } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { Checkbox } from 'react-native-paper';

import { home_page_car_list } from '../action';

export default class MainPage extends Component {




    constructor(props) {
        super(props);
        this.state = {
            searchbar_two: false,
            filter: false,
            compare: false,
            sort: false,

            dataone: [],
            popupvisible: false,
            checkboxchecked: false

        }
    }




    componentDidMount = () => {
        let data = {
            dataOption: "all",
            searchCriteriaList: [
                {
                    filterKey: "lookupCarStatus.tag",
                    operation: "ne",
                    value: "Sold"
                },
                { filterKey: "brand.category", operation: "eq", value: "R" },
                { filterKey: "status", operation: "eq", value: true },
                { filterKey: "price", operation: "ge", value: 0.0 },

                {
                    filterKey: "city.name",
                    operation: "cn",
                    value: "chennai"
                }

            ]

        }



        home_page_car_list(data).then(res => {
            console.log('getHomePage_car_list: ', res.data);
            if (!res.error) {
                //    DataService.setData(res)
                //    const resdata = DataService.getData()
                // this.setState({
                //     dataone : res.data,
                // })

                //     console.log('getSingleUser1: ', dataone);

                // alert(res.message);

                this.setState({
                    dataone: res.data.cars,
                })



            } else {



            }
        });
    }

    showSearchBar = () => {

        this.state.searchbar_two ?

            this.setState({

                searchbar_two: false
            })

            :

            this.setState({

                searchbar_two: true
            })


    }

    filterClick = () => {

        this.state.filter ?

            this.setState({

                filter: false
            })

            :

            this.setState({

                filter: true
            })




    }

    compareClick = () => {


        this.state.compare ?

            this.setState({
                compare: false
            })

            :

            this.setState({
                compare: true
            })

    }

    sort = () => {
        this.state.sort ?

            this.setState({
                sort: false
            })


            :

            this.setState({
                sort: true
            })

    }

    onItemClick = (item) => {
        this.props.navigation.navigate("ItemInfoScreen", {
            itemDetails: item,
        })
    }

    showDropDown = () => {
        alert('Show DropDown')
    }

    showListOne = () => {
        this.setState({
            popupvisible: true
        })
    }






    render() {
        let colors = ['#34495E', '#884EA0', '#3498DB'];

        // this code to create a line in list view for every item
        const renderSeparatorView = () => {
            return (
                <View
                    style={{
                        height: 1,
                        width: "100%",
                        backgroundColor: "#607D8B",
                    }}
                />
            );
        };



        return (
            <View>

                {/* this is for popup list view showing in locations */}
                <Modal
                    animationType='slide'
                    transparent={true}
                    visible={this.state.popupvisible}
                    onRequestClose={() => {
                        this.setState({
                            popupvisible: false
                        })
                    }}
                >

                    <View style={{ flex: 1, alignItems: 'center', marginTop: 200 }}>
                        <View style={styles.popupListDesign}>
                            <View style={{ alignItems: 'center' }}>
                                <Text style={{ fontSize: 15, fontWeight: 'normal', color: 'red', marginTop: 10 }}>City</Text>
                            </View>

                            <View>
                                <TextInput style={styles.input_location}
                                    underlineColorAndroid="transparent"
                                    placeholder="City"
                                    placeholderTextColor='#C6C8C8'
                                    autoCapitalize="none"
                                    keyboardType='numeric'
                                    onChangeText={(mobile) => this.setState({ mobile })}
                                    value={this.state.mobile} />
                            </View>

                            <View style={styles.container_location}>


                                <FlatList
                                    data={[
                                        { key: 'Chennai' },
                                        { key: 'Coimbatore' },
                                        { key: 'Dindugul' },
                                        { key: 'Erode' },
                                        { key: 'Hosur' },
                                        { key: 'Madurai' },
                                        { key: 'Nagarkoil' },
                                        { key: 'Pondichery' },
                                        { key: 'Salem' },
                                        { key: 'Tanjavore' },
                                        { key: 'Thirunelveli' },
                                        { key: 'Thoothukudi' },

                                        { key: 'Trichy' },
                                        { key: 'Tripur' },
                                        { key: 'Vellore' },
                                    ]}

                                    showsVerticalScrollIndicator={false}
                                    renderItem={({ item }) =>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }} >

                                            <Text style={styles.item} >{item.key}</Text>

                                            <Checkbox
                                                style={{ elevation: 3, shadow: 5 }}
                                                status={this.state.checkboxchecked ? 'checked' : 'unchecked'}
                                                onPress={() => {
                                                    this.setState({
                                                        checkboxchecked: false,
                                                        popupvisible: false
                                                    })
                                                }}
                                            />
                                        </View>

                                    }

                                    ItemSeparatorComponent={renderSeparatorView}
                                />
                            </View>





                        </View>
                    </View>
                </Modal>



                {/* this is for title bar    */}
                <View style={styles.container}>
                    <Image
                        source={
                            require('../assets/logo.png')
                        } style={styles.top_bar_title}
                    ></Image>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity onPress={this.showListOne}>
                            <View style={styles.subTopic_option_location}>
                                <Text style={{ marginTop: 5, fontSize: 15, marginLeft: 5, color: 'black', marginRight: 5 }}>Chennai</Text>
                                <MaterialCommunityIcons name="menu-down" color='red' size={20} style={{ marginTop: 7 }} />

                            </View>
                        </TouchableOpacity>

                        <MaterialCommunityIcons name="magnify" color="red" size={23} style={styles.searchbar} onPress={this.showSearchBar} />
                        <MaterialCommunityIcons name="dots-vertical" color="red" size={23} style={styles.searchbar} onPress={this.showDropDown} />

                    </View>
                </View>

                {/* this is other options below of Title bar */}
                {

                    this.state.searchbar_two ?

                        <View style={styles.input}>
                            <TextInput
                                underlineColorAndroid="transparent"
                                placeholder="Search"
                                placeholderTextColor='#C6C8C8'
                                autoCapitalize="none"
                                onChangeText={this.handleEmail}>
                            </TextInput>
                            <View style={styles.searchbar_black}>
                                <MaterialCommunityIcons name="magnify" color="black" size={26} onPress={() => alert('search clicked...')} />
                            </View>
                        </View>

                        :

                        null

                }

                <View style={styles.subTopic}>
                    <TouchableHighlight style={{ borderRadius: 20 }} onPress={this.filterClick}>

                        {
                            this.state.filter ?

                                <View style={styles.subTopic_option_red}>
                                    <MaterialCommunityIcons name="filter-outline" color='white' size={25} />
                                    <Text style={{ marginTop: 5, fontSize: 15, marginLeft: 5, color: 'white' }}>Filters</Text>
                                </View>

                                :

                                <View style={styles.subTopic_option}>
                                    <MaterialCommunityIcons name="filter-outline" color='black' size={25} />
                                    <Text style={{ marginTop: 5, fontSize: 15, marginLeft: 5, color: 'black' }}>Filters</Text>
                                </View>

                        }

                    </TouchableHighlight>

                    <TouchableHighlight style={{ borderRadius: 20 }} onPress={this.compareClick}>


                        {
                            this.state.compare ?

                                <View style={styles.subTopic_option_red}>
                                    <MaterialCommunityIcons name="compare-horizontal" color='white' size={25} />
                                    <Text style={{ marginTop: 5, fontSize: 15, marginLeft: 5, color: 'white' }}>Compare</Text>
                                </View>

                                :

                                <View style={styles.subTopic_option}>
                                    <MaterialCommunityIcons name="compare-horizontal" color='black' size={25} />
                                    <Text style={{ marginTop: 5, fontSize: 15, marginLeft: 5, color: 'black' }}>Compare</Text>
                                </View>

                        }


                    </TouchableHighlight>

                    <TouchableHighlight style={{ borderRadius: 20 }} onPress={this.sort}>

                        {
                            this.state.sort ?

                                <View style={styles.subTopic_option_red}>
                                    <MaterialCommunityIcons name="sort-variant" color='white' size={25} />
                                    <Text style={{ marginTop: 5, fontSize: 15, marginLeft: 5, color: 'white' }}>Sort</Text>
                                </View>


                                :


                                <View style={styles.subTopic_option}>
                                    <MaterialCommunityIcons name="sort-variant" color='black' size={25} />
                                    <Text style={{ marginTop: 5, fontSize: 15, marginLeft: 5, color: 'black' }}>Sort</Text>
                                </View>
                        }

                    </TouchableHighlight>






                </View>




                <View style={styles.List_container}>

                    {/* <View style = {styles.sub_list_container}>
<Text style={styles.text_format}>Welcome</Text>
<Text style={styles.text_format}>Welcome</Text>
<Text style={styles.text_format}>Welcome</Text> */}


                    {/* this is for show the response data in flat list */}

                    <FlatList
                        data={this.state.dataone}

                        keyExtractor={({ id }, index) => id}
                        renderItem={({ item, index }) => (
                            <TouchableWithoutFeedback onPress={() => this.onItemClick(item)}>
                                <View style={styles.container_two}>


                                    {/* <View style ={styles.sub_container}> */}

                                    {/* <View style ={{backgroundColor: index % 2 ? 'grey' : 'blue',
        paddingLeft : 5,
        paddingRight : 5,
        paddingBottom : 5,
        flexDirection : 'row',
        height : 200,
        borderRadius : 20}}> */}

                                    <View style={{
                                        backgroundColor: colors[index % colors.length],
                                        paddingLeft: 5,
                                        paddingRight: 5,
                                        paddingBottom: 5,
                                        flexDirection: 'row',
                                        height: 200,
                                        borderRadius: 20
                                    }}>



                                        {/* <View style={{ marginTop: 10,marginBottom : 10,width : '100%',backgroundColor : 'blue',height : 180}}> */}
                                        <View style={{ marginTop: 10, marginBottom: 10, width: '100%', height: 180 }}>
                                            <Text style={{ fontSize: 15, color: 'white', fontWeight: 'bold', marginLeft: 10 }}>{item.title}</Text>
                                            {/* <View style={{flex : 1,width : '95%',marginLeft : 10, backgroundColor : 'red',flexDirection :'row'}}> */}
                                            <View style={{ flex: 1, width: '95%', marginLeft: 10, flexDirection: 'row' }}>

                                                <View style={{ marginLeft: 5 }}>
                                                    {
                                                        item.image ?
                                                            <Image source={{ uri: item.image }} style={{ height: 100, width: 150, marginTop: 5 }} />
                                                            :
                                                            <Image source={{ uri: 'https://icon-library.com/images/no-picture-available-icon/no-picture-available-icon-1.jpg' }} style={{ height: 100, width: 150, marginTop: 5 }} />

                                                    }

                                                </View>

                                                {/* <View style={{marginTop : 5,backgroundColor : 'pink',height : 100}}> */}
                                                <View style={{ marginTop: 5, height: 100 }}>
                                                    <Text style={{ fontSize: 15, color: 'white', fontWeight: 'bold', marginLeft: 10 }}>₹ {item.price}</Text>
                                                    <Text style={{ fontSize: 10, color: 'white', marginLeft: 10, fontWeight: 'bold' }}>{item.year}   |   {item.kilometers} Kms</Text>
                                                </View>

                                            </View>

                                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginLeft: 5, marginRight: 5, marginTop: 5 }}>

                                                <View style={{ flexDirection: 'row', marginLeft: 10 }}>
                                                    <MaterialCommunityIcons name='eye-arrow-left' color='white' size={20} />
                                                    <Text style={{ fontSize: 10, color: 'white', marginLeft: 10, fontWeight: 'bold', marginTop: 4 }}>{item.viewCount}</Text>
                                                </View>
                                                <View style={{ flexDirection: 'row' }}>
                                                    <MaterialCommunityIcons name='cards-heart' color='white' size={20} />
                                                    <Text style={{ fontSize: 10, color: 'white', marginLeft: 10, fontWeight: 'bold', marginTop: 4 }}>{item.favoriteCount}</Text>
                                                </View>
                                                <View style={{ flexDirection: 'row' }}>
                                                    <MaterialCommunityIcons name='car' color='white' size={20} />
                                                    <Text style={{ fontSize: 10, color: 'white', marginLeft: 10, fontWeight: 'bold', marginTop: 4 }}>{item.messageCount}</Text>
                                                </View>
                                                <View style={{ flexDirection: 'row' }}>
                                                    <MaterialCommunityIcons name='phone-outline' color='white' size={20} />
                                                    <Text style={{ fontSize: 10, color: 'white', marginLeft: 10, fontWeight: 'bold', marginTop: 4 }}>{item.seat}</Text>
                                                </View>

                                            </View>

                                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginLeft: 5, marginRight: 5, marginTop: 5, marginBottom: 5 }}>
                                                {/* <View style={{backgroundColor :'grey',height : 100, width : 100, borderRadius : 200/2}}> */}
                                                {/* <MaterialCommunityIcons title='eye-arrow-left' color='white' size={25}/> */}
                                                <Text style={{ fontSize: 10, color: 'white', marginLeft: 10, underlineColorAndroid: 'white', textDecorationLine: 'underline', fontWeight: 'bold' }}>Gallery</Text>
                                                <Text style={{ fontSize: 10, color: 'white', marginLeft: 10, textDecorationLine: 'underline', fontWeight: 'bold' }}>More>></Text>
                                                {/* </View> */}
                                            </View>

                                        </View>



                                        {/* <View>
        <Image source={{uri : item.avatar}} style={{height:100,width:100}}/>
    </View>
    <View style={{flexDirection : 'column',paddingLeft : 10,justifyContent :'space-around'}}>
    <Text style={{fontSize: 10,color:'black',fontWeight:'bold'}}>Car : {item.title}</Text>
<Text style={{fontSize: 10,color:'black',fontWeight:'bold'}}>Location : {item.carAvailableAt}</Text>
<Text style={{fontSize: 10,color:'black',fontWeight:'bold'}}>Year : {item.year}</Text>
</View> */}



                                    </View>
                                </View>
                            </TouchableWithoutFeedback>
                        )}
                    />

                    {/* </View> */}

                </View>

            </View>
        );
    }
}


// layout UI Design process

const styles = StyleSheet.create({
    container: {
        marginLeft: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    container_two: {
        backgroundColor: 'trasparent',
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 10,
        height: 220,
    },
    List_container: {
        height: '83%',
        width: '100%',
        marginTop: 10
    },
    text_format: {
        color: 'blue',
        fontSize: 15,
        fontWeight: 'bold',
        paddingLeft: 10,
        marginBottom: 5
    },
    sub_list_container: {
        backgroundColor: 'yellow',
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
        marginTop: 10,
        height: 400,
        width: '95%'

    },
    sub_container: {
        backgroundColor: 'grey',
        paddingLeft: 5,
        paddingRight: 5,
        paddingBottom: 5,
        flexDirection: 'row',
        height: 200,
        borderRadius: 20
    },
    top_bar_title: {
        height: 50,
        width: 170,
        marginTop: 10
    },
    searchbar: {
        marginTop: 30,
        alignItems: 'flex-end',
        marginRight: 10
    },
    searchbar_black_Head: {
        flexDirection: 'row',
        backgroundColor: 'blue'
    },
    searchbar_black: {
        backgroundColor: 'transparent',
        marginRight: 10,
        marginTop: 5

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
    subTopic_option_location: {
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 20,
        paddingLeft: 10,
        marginTop: 20,
        marginRight: 10,
        paddingRight: 10,
        paddingTop: 5,
        paddingBottom: 5,
        elevation: 5

    },
    subTopic_option_red: {
        flexDirection: 'row',
        backgroundColor: 'red',
        borderRadius: 20,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 5,
        paddingBottom: 5,
        elevation: 5

    },
    input: {
        marginTop: 15,
        marginRight: 10,
        marginBottom: 5,
        height: 40,
        borderWidth: 1,
        borderRadius: 10,
        marginLeft: 20,
        marginBottom: 5,
        paddingLeft: 10,
        backgroundColor: 'white',
        borderLeftColor: 'red',
        borderRightColor: 'red',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    input_location: {
        marginTop: 15,
        marginRight: 10,
        marginBottom: 5,
        height: 40,
        borderWidth: 1,
        borderRadius: 10,
        marginLeft: 10,
        marginBottom: 5,
        paddingLeft: 10,
        backgroundColor: 'white',
        borderLeftColor: 'red',
        borderRightColor: 'red',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    popupListDesign: {
        height: 440,
        width: '75%',
        backgroundColor: 'white',
        borderRadius: 20,
        borderWidth: 2,
        marginLeft: 10,
        marginRight: 10,
    },
    modelDesign: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    container_location: {
        flex: 1,
        marginBottom: 20,
        marginRight: 5
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
})
















