import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, Alert, TextInput } from 'react-native';

export default class LogIn extends Component {
    render() {
        return (
            <View style={styles.container}> 
                <View style={styles.topContainer}> 
                    <View>
                        <Text style={{color: 'white', fontSize: 18}}> Login To Reddit </Text> 
                    </View>
                    <View style={styles.inputContainer}>
                        <TextInput style={styles.inputStyle} placeholder="Username" />
                        <TextInput style={styles.inputStyle} placeholder="Password" />
                    </View>
                    <View style={styles.bottomTextContainer}>
                        <Text style={{color: "#0074CD"}}> SIGN UP </Text>
                        <Text style={{color: "#0074CD"}}> FORGOT PASSWORD </Text>
                    </View>
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
        width: '100%',
        // borderWidth: 1,
        // borderColor: "#fff",
        // borderStyle: "solid"
    },
    buttonContainer: {
        // borderWidth: 1,
        // borderColor: 'white',
        // borderStyle: 'solid',
        width: '85%',
        paddingBottom: 35
    },
    inputContainer: {
        paddingTop : 35,
        paddingLeft: 10,
        paddingRight: 10
    },
    inputStyle: {
        height: 48,
        borderBottomWidth: 1,
        borderBottomColor: '#0074CD',
        borderStyle: 'solid',
        color: 'white'
    },
    bottomTextContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop : 25,
        paddingLeft: 10,
        paddingRight: 10
    }
})