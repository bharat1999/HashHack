// import { Text, View } from 'react-native'
// import React, { Component } from 'react'

// export class App extends Component {
//   render() {
//     return (
//       <View>
//         <Text style={{fontSize:40}}>App</Text>
//       </View>
//     )
//   }
// }

// export default App
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/Home.jsx';
import Mpage from './src/Mpage';
import CropDisease from './src/CropDisease.jsx';
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Mpage" component={Mpage} />
        <Stack.Screen name="CropDisease" component={CropDisease}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;