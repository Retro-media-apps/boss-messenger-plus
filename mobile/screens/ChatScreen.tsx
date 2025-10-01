    import React, {useEffect, useState} from 'react';
    import { View, Text, TextInput, Button, Image } from 'react-native';
    import '../firebaseConfig';
    import { getAuth } from 'firebase/auth';
    import { collection, addDoc, onSnapshot, query, orderBy, serverTimestamp } from 'firebase/firestore';
    import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
    import { db, storage } from '../firebaseConfig';
    import * as ImagePicker from 'expo-image-picker';

    export default function ChatScreen(){
  const [messages,setMessages]=useState([]);const [text,setText]=useState('');
  useEffect(()=>{
    const q = query(collection(db,'chats/demo/messages'),orderBy('createdAt'));
    const unsub = onSnapshot(q,snap=>{setMessages(snap.docs.map(d=>({id:d.id,...d.data()})))});
    return ()=>unsub();
  },[]);
  const send = async ()=>{if(!text) return; await addDoc(collection(db,'chats/demo/messages'),{text,createdAt:serverTimestamp(),uid:getAuth().currentUser?.uid||null}); setText('');}
  const pick = async ()=>{
    const res = await ImagePicker.launchImageLibraryAsync({mediaTypes:ImagePicker.MediaTypeOptions.Images});
    if(res.cancelled) return; const resp = await fetch(res.uri); const blob = await resp.blob(); const storageRef = ref(storage, `uploads/${Date.now()}.jpg`);
    await uploadBytes(storageRef, blob); const url = await getDownloadURL(storageRef); await addDoc(collection(db,'chats/demo/messages'),{image:url,createdAt:serverTimestamp(),uid:getAuth().currentUser?.uid||null});
  }
  return (
    <View style={{flex:1,padding:16}}>
      <Text style={{fontSize:18}}>Chat — Demo</Text>
      <View style={{flex:1,marginTop:12}}>
        {messages.map(m=> (
          <View key={m.id} style={{marginBottom:8}}>
            {m.text && <Text>{m.text}</Text>}
            {m.image && <Image source={{uri:m.image}} style={{width:120,height:80}} />}
          </View>
        ))}
      </View>
      <TextInput value={text} onChangeText={setText} placeholder='Message' style={{borderWidth:1,padding:8}} />
      <Button title='Send' onPress={send} />
      <Button title='Attach Image' onPress={pick} />
    </View>
  )
}
