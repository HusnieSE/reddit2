import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, Alert } from 'react-native';

export default class LogIn extends Component {
    render() {
        return (
            <View style={styles.container}> 
                <View> 
                    <Text style={styles.topContainer}> Login To Reddit </Text> 
                </View>
                <View style={styles.buttonContainer}>
                    <Button onPress = {() => Alert.alert("Hello")} title={"LOG IN"}/> 
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: '#000',
        alignItems: 'center',
        padding: 15
    },
    topContainer: {
        color: '#fff',
        textAlign: 'left'
    },
    buttonContainer: {
        // borderWidth: 1,
        // borderColor: 'white',
        // borderStyle: 'solid',
        width: '85%',
        // paddingBottom: 35
    }
})