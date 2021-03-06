'use strict';
import React from 'React';
import Layout from './Layout.jsx';
import {messages} from '../data/messages.js';
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      liftMessage: 'The light is in sight. Click the "Lift Me Up" button to smile.'
    };
  }

  getRandomMessage() {
    this.setState({
      liftMessage: messages[Math.floor(Math.random() * messages.length)]
    });
  }

  render() {
    return (
      <div className="col-md-12">
        <Layout
          liftMessage={this.state.liftMessage}
          getRandomMessage={this.getRandomMessage.bind(this)}
          />
      </div>
    );
  }
}
