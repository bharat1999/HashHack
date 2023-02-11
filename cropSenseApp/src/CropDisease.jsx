import { View, Text } from 'react-native'
import React from 'react'


const CropDisease = () => {
  return (
    <View style={{height:'100%',alignItems:'center',justifyContent:'center'}}>
      <Text style={{fontSize:30}}>Select an Image</Text>
      <Text style={{fontSize:20}}>to Detect Disease in Rice Crops</Text>
    </View>
  )
}

export default CropDisease;