import React from 'react';

import {FlatList,Text} from 'react-native';
import ToDoItem from "./ToDoItem";

import {responsiveHeight} from "react-native-responsive-dimensions";

export default class ListContainer extends React.Component {
    render() {
        return (
            <FlatList
                style={{flex:1}}
                data={this.props.items}
                KeyExtractor={(data,item)=> data.key + ""}
                renderItem = {({item}) => <ToDoItem checkItem={(key) => this.props.checkItem(key)} item={item}/>}
            />
        );
    }
}