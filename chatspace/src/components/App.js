import React from 'react';
import HeaderComp from './HeaderComp'
import Chatroom from './Chatroom'
import '../stylesheets/App.css';

function App() {
  return (
    <main id="wrapper">
      <div id="chat-box-wrapper" >
        <HeaderComp />
        <Chatroom />
      </div>
    </main>
  );
}

export default App;
