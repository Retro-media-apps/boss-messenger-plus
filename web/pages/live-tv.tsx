    import React from 'react';
    import ReactPlayer from 'react-player';

    export default function LiveTV(){
  return (
    <div style={{padding:24}}>
      <h1>Live TV</h1>
      <ReactPlayer url="https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8" controls playing width="100%" height={480} />
    </div>
  )
}
