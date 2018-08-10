import React from 'react';
import { StyleSheet, Text, View, Image, Button, Alert, TouchableHighlight } from 'react-native';


export default class Home extends React.Component {

  render() {
    return (
      <View style={styles.container}>
          
        {/* <Text style={styles.white}>reddit</Text> */}
        <View style= {{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '98%', 
          height: '10%', 
          borderRadius: 4 }} >
          <Image source={require('../../assets/images/reddit.png')} style={{height: 63, width: 74}}  />
        </View>
        <View style= {{ width: 205 }} >
          <Text style={styles.header}> Welcome! </Text>
          <Text style={styles.white}> There’s a Reddit community for every topic imaginable </Text>
        </View>
        <View style= {{ width: 205 }} >
          <Text style={styles.header}> Vote! </Text>
          <Text style={styles.white}> on posts and help communities lift the best content to thhe top </Text>
        </View>
        <View style= {{ width: 205 }} >
          <Text style={styles.header}> Subscribe! </Text>
          <Text style={styles.white}> to communities to fill this home feed with freshh posts </Text>
        </View>
        <View style= {{
          width: '98%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
        //   alignItems: 'flex-end'
        }} >
            <View style={{flex: 1, padding: 10}}>
                <Button onPress={() => this.props.navigation.navigate('Login')} title="LOG IN" /> 
            </View>
            <View style={{flex: 1, padding: 10}}>
                <Button onPress={() => this.props.navigation.navigate('Signup')} title="SIGN UP" />
            </View>
        </View>
        <View style= {{
          backgroundColor: '#fff', 
          width: '100%', 
          height: '10%', 
          borderRadius: 0, 
          display: 'flex', 
          flexDirection: 'row', 
          justifyContent: 'space-around',
          alignItems: 'center' }} >
          <TouchableHighlight onPress={() => Alert.alert("Sample")}>
            <Image source={require('../../assets/images/reddit.png')} />
          </TouchableHighlight>
          <TouchableHighlight onPress={() => Alert.alert("Sample")}>
            <Image source={require('../../assets/images/list.png')}  />
          </TouchableHighlight>
          <TouchableHighlight onPress={() => Alert.alert("Sample")}>
            <Image source={require('../../assets/images/Message.png')}  />
          </TouchableHighlight>
          <TouchableHighlight onPress={() => Alert.alert("Sample")}>
            <Image source={require('../../assets/images/Email.png')}  />
          </TouchableHighlight>
          <TouchableHighlight onPress={() => Alert.alert("Sample")}>
            <Image source={require('../../assets/images/Person.png')}  />
          </TouchableHighlight>
          
        </View>
      </View> 
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    // paddingTop: '10%', 
    backgroundColor: '#000',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%'
  },
  white: {
    color: 'white',
    textAlign: 'center'
  },
  header: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18
  }
});
 