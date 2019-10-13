import React from 'react';
import '../stylesheets/App.css';

class Chatroom extends React.Component {
  state = {

  }


  render(){
    return(
      <>
        <article id="chat-room" >
          <section>
            Test Message
          </section>
        </article>
        <article id="text-input" >
          <form className="centered-input">
            <textarea className="textarea-styles">

            </textarea>
          </form>
        </article>
      </>
    )
  }
}

export default Chatroom
