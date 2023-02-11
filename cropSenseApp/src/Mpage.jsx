import { Text, View, ImageBackground} from 'react-native'
import React, { Component } from 'react'
import { TouchableOpacity } from 'react-native';

const Mpage = props => {

    return (
      <View style={{flex:1}}>
      <View style={{flex:2}}>
        <ImageBackground
        resizeMode='contain'
            source={require('../assests/rice.png')}
            style={{height: '100%'}}
          />
      </View>
      <View style={{flex:4, backgroundColor:'lightgreen', paddingTop:50}}>
      <TouchableOpacity
          style={{
            backgroundColor:'wheat',
            borderColor:'black',
            borderWidth:3,
            alignItems: 'center',
            height: 80,
            justifyContent:'center',
            margin:20,
            marginHorizontal:50,
            borderRadius:40
          }}
          onPress={() => {
            props.navigation.navigate('CropDisease');
          }}>
          <Text style={{fontSize: 20, padding: 5}}>Crop Disease</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor:'wheat',
            borderColor:'black',
            borderWidth:3,
            alignItems: 'center',
            height: 80,
            justifyContent:'center',
            margin:20,
            marginHorizontal:50,
            borderRadius:40
          }}
          onPress={() => {
            props.navigation.navigate('Mpage');
          }}>
          <Text style={{fontSize: 20, padding: 5}}>Crop </Text>
        </TouchableOpacity>
        

      </View>
      </View>
    )
  
}

export default Mpage;