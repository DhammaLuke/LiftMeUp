'use strict';
import React from 'React';

export default class LiftMeUp extends React.Component {
  constructor(props) {
    super(props)
    console.log('LiftMeUp props', props);
  }

  render() {
    return (
      <div className="liftMeUp">
        <div className="liftMeUpBody">
          {this.props.liftMessage}
        </div>
        <button type="button" id="liftBtn" className="btn btn-primary" onClick={this.props.getRandomMessage}>Lift Me Up</button>
      </div>
    )
  }
}
