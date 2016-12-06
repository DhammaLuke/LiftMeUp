'use strict';
import React from 'React';
import {messages} from '../data/messages';

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
    this.setState({value: 'Thank you for spreading the love! <3'});
    messages.push('Blarghargharghargh');
    console.log('A message has been submitted.');
    event.preventDefault();
  }

  render() {
    return (
      <div className="sendLoveBody">
        <form name="sendLoveForm" onSubmit={this.handleSubmit}>
          <textarea name="sendLove" rows="10" cols="50" value={this.state.value} onChange={this.handleChange} required/>
          <button type="submit" className="btn btn-primary">Send Love!</button>
        </form>
      </div>
    )
  }
}
