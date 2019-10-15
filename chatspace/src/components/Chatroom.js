import React from 'react';
import '../stylesheets/App.css';
import Message from './Message';
import { reset } from 'ansi-colors';

const now = new Date().toLocaleTimeString('en-US', {     
  hour12: true, 
  hour: "numeric", 
  minute: "numeric"
});

function updateScroll(){
  var element = document.getElementById("chat-room");
  element.scrollTop = element.scrollHeight;
}

class Chatroom extends React.Component {
  state = {
    messageText: "",
    messages: []
  }

  handleChange(event) {
    event.preventDefault()
    console.log(event.target.value)
    this.setState({ messageText: event.target.value })
  }
  
  subMessage(event) {
    const { messages, messageText } = this.state
    event.preventDefault()
    if(messageText.length){
      this.setState({ messages: [...messages, messageText] })
      this.restart()
      event.target.reset()
      updateScroll()
    }
  }

  restart() {
    this.setState({ messageText: "" })
  }

  componentDidUpdate() {
  }

  render(){
    const { messages } = this.state
    return(
      <>
        <article id="chat-room" >
          {
            messages.map((m, i)=> (
              <Message key={i} text={m} now={now} />
            ))
          }
        </article>
        <article id="text-input" >
          <form className="centered-input" onSubmit={(event) => this.subMessage(event)}>
            <input 
              type="text" 
              className="textarea-styles"
              onSubmit={this.reset} 
              value={this.state.messageText} 
              onChange={(event) => this.handleChange(event)} 
            />
            <button type="submit" id="submit-button">

            </button>
          </form>
        </article>
      </>
    )
  }
}

export default Chatroom
