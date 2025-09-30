    import React, { useEffect, useState, useRef } from 'react';
    import '../firebaseConfig';
    import { getAuth } from 'firebase/auth';
    import { collection, addDoc, onSnapshot, query, orderBy, serverTimestamp } from 'firebase/firestore';
    import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
    import { db, storage } from '../firebaseConfig';

    export default function ChatPage(){
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState('');
  const fileRef = useRef(null);

  useEffect(() => {
    const q = query(collection(db, 'chats/demo/messages'), orderBy('createdAt'));
    const unsub = onSnapshot(q, snap => {
      const msgs = snap.docs.map(d => ({ id: d.id, ...d.data() }));
      setMessages(msgs);
    });
    return () => unsub();
  }, []);

  async function send() {
    if (!text) return;
    await addDoc(collection(db, 'chats/demo/messages'), { text, createdAt: serverTimestamp(), uid: getAuth().currentUser?.uid||null });
    setText('');
  }

  async function onFile(e){
    const file = e.target.files[0];
    if (!file) return;
    const storageRef = ref(storage, `uploads/${Date.now()}_${file.name}`);
    await uploadBytes(storageRef, file);
    const url = await getDownloadURL(storageRef);
    await addDoc(collection(db, 'chats/demo/messages'), { image: url, createdAt: serverTimestamp(), uid: getAuth().currentUser?.uid||null });
  }

  return (
    <div style={{padding:24}}>
      <h1>Chat — Demo</h1>
      <div style={{height:300,overflow:'auto',border:'1px solid #ddd',padding:10}}>
        {messages.map(m=> (
          <div key={m.id} style={{marginBottom:8}}>
            {m.text && <div>{m.text}</div>}
            {m.image && <img src={m.image} style={{maxWidth:200}} />}
            <small style={{color:'#666'}}>{m.createdAt?.toDate?.()?.toString?.()||''}</small>
          </div>
        ))}
      </div>
      <div style={{marginTop:12}}>
        <input value={text} onChange={e=>setText(e.target.value)} placeholder='Message' />
        <button onClick={send}>Send</button>
        <input type='file' ref={fileRef} onChange={onFile} />
      </div>
    </div>
  )
}
