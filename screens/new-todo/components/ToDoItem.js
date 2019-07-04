import React from 'react';

import {View,Text,StyleSheet} from 'react-native';

import {responsiveHeight,responsiveFontSize,responsiveWidth} from "react-native-responsive-dimensions";

import {WHITE_COLOR} from "../../../colors";

import CheckBox from "../../../components/CheckBox";

export default class ToDoItem extends React.Component{
    render(){
        return(
          <View style={styles.itemContainer}>
              <View style={styles.checkboxContainer}>
                  <CheckBox containerStyles={styles.checkbox}
                            isChecked={this.props.item.isChecked}
                            onValueChange ={(status) => this.onCheck(status)}
                  />
              </View>
              <Text numberOfLines={1} ellipsizeMode={'tail'} style={styles.messageStyles}>{this.props.item.message}</Text>
          </View>
        );
    }

    onCheck(status){
        if(status){
            setInterval(()=> this.props.checkItem(this.props.item.key),500);
        }
    }
}

const styles = StyleSheet.create({
   itemContainer : {
       alignSelf:'stretch',
       marginHorizontal:responsiveWidth(6),
       marginVertical:responsiveHeight(1),
       backgroundColor:WHITE_COLOR,
       flexDirection: 'row',
       alignItems:'center',
       borderRadius:responsiveWidth(2),
   },
    checkbox:{
       width: responsiveWidth(10),
        height : responsiveWidth(10),
    },
    checkboxContainer:{
       padding: responsiveWidth(5)
    },
    messageStyles:{
       fontSize: responsiveFontSize(2.25),
       flex:1,
        paddingRight: responsiveWidth(5),
    }
});