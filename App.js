import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CheckBox from "./components/CheckBox";

export default class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isChecked : false
        }
    }
    render() {
        return (
            <View style={styles.container}>
               <CheckBox onValueChange={(status)=> this.setState({isChecked:status})}
                          isChecked={this.state.isChecked}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
