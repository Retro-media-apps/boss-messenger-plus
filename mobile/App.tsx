    import React from 'react';
    import { NavigationContainer } from '@react-navigation/native';
    import { createNativeStackNavigator } from '@react-navigation/native-stack';
    import Home from './screens/Home';
    import HelpScreen from './screens/HelpScreen';
    import ChatScreen from './screens/ChatScreen';

    const Stack = createNativeStackNavigator();

    export default function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Help' component={HelpScreen} />
        <Stack.Screen name='Chat' component={ChatScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
