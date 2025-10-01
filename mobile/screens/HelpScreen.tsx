    import React from 'react';
    import { ScrollView, View, Text, Button } from 'react-native';
    import AsyncStorage from '@react-native-async-storage/async-storage';

    export default function HelpScreen(){
  const startOnboarding = async ()=>{await AsyncStorage.setItem('onboard_seen','true');alert('Onboarding started (demo)');}
  return (
    <ScrollView style={{padding:16}}>
      <Text style={{fontSize:22,fontWeight:'700'}}>Welcome to Boss Messenger Plus</Text>
      <Text style={{marginTop:10}}>Quick topics: Video Calls, Send Payments, Customize Themes, Use Webcam on Desktop</Text>
      <View style={{marginTop:20}}>
        <Button title='Start Onboarding' onPress={startOnboarding} />
      </View>
    </ScrollView>
  )
}
