'use strict';
import React from 'React';

export default class SendLove extends React.Component {
  constructor(props) {
    super(props)
    console.log("SendLove props", props);
  }

  render() {
    return (
      <div className="sendLove">
        <div className="sendLoveBody">
          {this.props.writeMessage}
        </div>
        <button type="button" className="btn btn-primary">Send Love</button>
      </div>
    )
  }
}
