import { View, Text,PermissionsAndroid } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native';

const requestCameraPermission = async () => {
    try {
        console.log(PermissionsAndroid.RESULTS.GRANTED);
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Cool Photo App Camera Permission',
          message:
            'Cool Photo App needs access to your camera ' +
            'so you can take awesome pictures.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the camera');
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };
const CropDisease = () => {
   
  return (
    <View style={{flex:1}}>
    <View style={{flex:1, height:'100%',alignItems:'center',justifyContent:'flex-end'}}>
      <Text style={{fontSize:30}}>Select an Image</Text>
      <Text style={{fontSize:20}}>to Detect Disease in Rice Crops</Text>
      {/* <TouchableOpacity
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
          }}>  <Text style={{fontSize: 20, padding: 5}}>Button</Text>
        </TouchableOpacity> */}
    
      </View>
      <View style={{flex:1}}>
      <TouchableOpacity
          style={{
            backgroundColor:'wheat',
            borderColor:'black',
            borderWidth:3,
            alignItems: 'center',
            height: 80,
            justifyContent:'center',
            margin:20,
            marginHorizontal:160,
            borderRadius:100
          }}
          onPress={requestCameraPermission}>
          <Text style={{fontSize: 20, padding: 5}}>B</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default CropDisease;