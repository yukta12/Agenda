import React from 'react';
import {View,Text,StyleSheet , TextInput} from 'react-native';

import {GlobalStyles} from "../../styles";

import {responsiveWidth,responsiveFontSize,responsiveHeight} from "react-native-responsive-dimensions";

import {ACCENT_COLOR,SUCCESS_COLOR} from "../../colors";

import Button from "../../components/Button";

import {Actions} from 'react-native-router-flux';

export default class NewToDoComponent extends React.Component{
    render(){
        return(
            <View style = {GlobalStyles.mainContainer}>
                <View style={styles.container}>
                    <View>
                        <Text style={styles.labelText}> Message :</Text>
                        <TextInput
                            placeholder={"Enter your todo message"}
                            value={this.props.messageText}
                            onChangeText={(text) => this.props.onMessageChange(text)}
                            style={styles.textInput}
                        />
                    </View>
                    <View>
                        <Button title={"CANCEL"}
                                styles={{marginBottom:responsiveHeight(3)}}
                                onPress={() => Actions.pop()}
                        />

                        <Button
                            title={"ADD ITEM"}
                            styles={{backgroundColor : SUCCESS_COLOR}}
                            onPress={() => {
                                this.props.addItem();
                                Actions.reset('todoList');
                            }}
                        />
                    </View>

                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
   container:{
       flex:1,
       justifyContent:'space-between',
       paddingHorizontal: responsiveWidth(8),
       paddingTop: responsiveHeight(5),
   } ,
    labelText:{
       fontSize: responsiveFontSize(3),
        color:ACCENT_COLOR,
        fontWeight: '600',
        marginBottom: responsiveHeight(1)
    },
    textInput:{
       fontSize :responsiveFontSize(3)
    }
});