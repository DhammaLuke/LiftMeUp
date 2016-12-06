'use strict';
import React from 'React';
import LiftMeUp from './LiftMeUp.jsx'
import SendLove from './SendLove.jsx'

export default class Layout extends React.Component {
  constructor(props) {
    super(props)
    console.log("Layout props", props);
  }
  render() {
    return (
      <div>
      <div className="col-md-6">
        <LiftMeUp
          liftMessage={this.props.liftMessage}
          getRandomMessage={this.props.getRandomMessage}
          />
      </div>
      <div className="col-md-6">
        <SendLove writeMessage={this.props.writeMessage}/>
      </div>
      </div>
    )
  }
}
