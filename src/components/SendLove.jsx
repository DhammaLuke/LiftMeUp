'use strict';
import React from 'React';
import {messages} from '../data/messages';
// import submitMessage from '../../server/messageController.js';

export default class SendLove extends React.Component {
  constructor(props) {
    super(props)
    console.log("SendLove props", props);
    this.state = {
      value: 'Feeling the love? Spread it to a random soul!'
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    console.log(this.state.value);
    // $.post("http://localhost:1337/api/messages/", {
    //   "text": this.state.value
    // }, function() {
    //   console.log("A message has been submitted");
    // });
    // $.ajax({
    //   type: 'POST',
    //   url: "http://localhost:1337/api/messages/",
    //   contentType: 'application/json',
    //   data: { "text": this.state.value },
    //   success: function(data) {
    //     console.log("A Message has been submitted: " + data);
    //   },
    //   error: function(data) {
    //     console.log("Error" + data );
    //   }
    // });
  fetch('/messages', {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      text: this.state.value
    })
  });
    // console.log('A message has been submitted.');
    this.setState({value: 'Thank you for spreading the love! <3'});
    event.preventDefault();
  }

  render() {
    return (
      <div className="sendLoveBody">
        <form name="sendLoveForm" onSubmit={this.handleSubmit}>
          <textarea name="sendLove" rows="10" cols="50" value={this.state.value} onChange={this.handleChange} required/>
          <button type="submit" id="loveBtn" className="btn btn-primary">Send Love!</button>
        </form>
      </div>
    )
  }
}
