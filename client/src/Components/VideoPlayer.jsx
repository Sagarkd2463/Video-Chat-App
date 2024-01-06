import React, { useContext } from 'react';
import { Grid, Typography, Paper } from '@mui/material';

import { SocketContext } from '../SocketContext';

const VideoPlayer = () => {
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext);
 
  return (
    <Grid container style={{justifyContent: 'center'}}>
      {stream && (
        <Paper style={{padding: '10px', border: '2px solid black', margin: '10px'}}>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom>{name || 'Name'}</Typography>
            <video style={{width:'550px'}} playsInline muted ref={myVideo} autoPlay  />
          </Grid>
        </Paper>
      )}
      {callAccepted && !callEnded && (
        <Paper style={{padding: '10px', border: '2px solid black', margin: '10px'}}>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom>{call.name || 'Name'}</Typography>
            <video style={{width: '550px'}} playsInline ref={userVideo} autoPlay  />
          </Grid>
        </Paper>
      )}
    </Grid>
  );
};

export default VideoPlayer;