import React from 'react';
import '../stylesheets/App.css';

class Chatroom extends React.Component {
  state = {
    messageText: ""
  }

  handleChange(event) {
    console.log(event.target.value)
    event.preventDefault()
  }
  
  subMessage(event) {
    this.setState({ messageText: event.target.value })    
    event.preventDefault()
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
          <form className="centered-input" onSubmit={this.subMessage}>
            <textarea className="textarea-styles" onChange={this.handleChange}/>
            <button type="button" id="submit-button">

            </button>
          </form>
        </article>
      </>
    )
  }
}

export default Chatroom
