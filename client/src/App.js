import React from 'react';
import { Typography, AppBar } from '@mui/material';
import { styled } from '@mui/system';

import VideoPlayer from './Components/VideoPlayer';
import Sidebar from './Components/Sidebar';
import Notifications from './Components/Notifications';

const AppVideo = styled('div')({
  borderRadius: '10px',
  margin: '30px 0px',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  width: '500px',
  border: '2px solid none',
});

// const Image = styled('img')({
//   marginLeft: '15px'
// });

const Wrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
});

const App = () => {
  
  return (
    <Wrapper>
      <div>
        <AppVideo>
        <AppBar position='static' color='inherit'>
        <Typography variant='h3' align='center'>Video Chat</Typography>
      </AppBar>
      </AppVideo>
      <VideoPlayer />
      <Sidebar>
        <Notifications />
      </Sidebar>

    </div>
    </Wrapper>
  )
}

export default App;
