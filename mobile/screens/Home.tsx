    import React, {useState} from 'react';
    import { View, Text, TextInput, Button } from 'react-native';
    import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
    import '../firebaseConfig';

    export default function Home({navigation}){
  const [email,setEmail]=useState('');const [password,setPassword]=useState('');
  const auth = getAuth();
  const login = async ()=>{try{await signInWithEmailAndPassword(auth,email,password);navigation.navigate('Chat')}catch(e){alert(e)}}
  const reg = async ()=>{try{await createUserWithEmailAndPassword(auth,email,password);alert('Registered!');}catch(e){alert(e)}}
  return (
    <View style={{padding:20}}>
      <Text>Boss Messenger Plus (Mobile Demo)</Text>
      <TextInput placeholder='Email' value={email} onChangeText={setEmail} style={{borderWidth:1,marginTop:8}} />
      <TextInput placeholder='Password' value={password} onChangeText={setPassword} secureTextEntry style={{borderWidth:1,marginTop:8}} />
      <Button title='Login' onPress={login} />
      <Button title='Register' onPress={reg} />
      <Button title='Help' onPress={()=>navigation.navigate('Help')} />
    </View>
  )
}
