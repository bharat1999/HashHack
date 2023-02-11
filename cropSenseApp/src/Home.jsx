import {Text, View, ImageBackground, Button, Alert} from 'react-native';
import {TouchableOpacity} from 'react-native';
import React, {Component} from 'react';


const Home = props => {
  return (
    <View style={{flex: 1, backgroundColor: 'green'}}>
      <View style={{flex: 7, justifyContent: 'flex-end'}}>
        <View style-={{alignItems: 'centre'}}>
          <ImageBackground
            source={require('../assests/farming_welcome_2-removebg.png')}
            style={{height: '85%'}}
          />
          <Text style={{color: 'white', fontSize: 30}}>
            An Initiation towards
          </Text>
          <Text style={{color: 'white', fontSize: 40}}>Smart Farming</Text>
        </View>
      </View>
      <View
        style={{
          flex: 1,

          margin: 20,
          justifyContent: 'center',
        }}>
        <TouchableOpacity
          style={{
            backgroundColor: 'lightgreen',
            alignItems: 'center',
            height: 40,
          }}
          onPress={() => {
            props.navigation.navigate('Mpage');
          }}>
          <Text style={{fontSize: 20, padding: 5}}>Lets Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;
