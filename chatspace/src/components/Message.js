import React from 'react';

const Message = (props) => {
  return(
    <section className="message">
      <span>{props.now}</span>
      <h1 className="title" >{props.text}</h1>
    </section>
  )
}

export default Message
