import React from 'react';

import {View,Text,StyleSheet,TouchableOpacity } from 'react-native';
import {responsiveHeight,responsiveFontSize,responsiveWidth} from 'react-native-responsive-dimensions';

import {ACCENT_COLOR,WHITE_COLOR} from "../colors";

export default class Button extends React.Component {
    render(){
        return(
            <TouchableOpacity style={[styles.buttonContainer,this.props.styles]} onPress={()=>
            this.props.onPress()}>
                <Text style={styles.textContainer}>{this.props.title}</Text>

            </TouchableOpacity>
        );
    }
}

Button.defaultProps = {
  styles:{}
};

const styles = StyleSheet.create({
   buttonContainer :{
       flexDirection:'row',
       justifyContent:'center',
       alignItems:'center',
       backgroundColor : ACCENT_COLOR,
       paddingVertical: responsiveHeight(2),


   } ,
    textContainer:{
       color:WHITE_COLOR,
        fontSize:responsiveFontSize(2.5)
    }
});