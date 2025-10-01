import { useState } from 'react';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import '../firebaseConfig';

export default function Home() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const auth = getAuth();

  async function login() {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setMessage('Logged in — go to /chat');
      window.location.href = '/chat';
    } catch (e) { setMessage('Login failed: ' + e); }
  }
  async function register() {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setMessage('Account created — verify your email in Firebase console for testing.');
    } catch (e) { setMessage('Register failed: ' + e); }
  }
  async function google() {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      window.location.href = '/chat';
    } catch (e) { setMessage('Google login failed: ' + e); }
  }

  return (
    <div style={{padding:40,fontFamily:'Inter, sans-serif'}}>
      <h1>Boss Messenger Plus — Demo</h1>
      <p>Login (web demo)</p>
      <input placeholder='Email' value={email} onChange={e=>setEmail(e.target.value)} /><br/>
      <input placeholder='Password' type='password' value={password} onChange={e=>setPassword(e.target.value)} /><br/>
      <button onClick={login}>Login</button>
      <button onClick={register}>Register</button>
      <button onClick={google}>Sign in with Google</button>
      <p>{message}</p>
      <p><a href='/help'>Help / Walkthrough</a> · <a href='/chat'>Chat stub</a> · <a href='/live-tv'>Live TV</a></p>
    </div>
  )
}
