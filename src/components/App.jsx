'use strict';
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      liftMessage: "This is an inspirational message.",
      writeMessage: "Feeling the love? Spread it to a random soul!"
    };
  }

  render() {
    return (
      <div className="col-md-12">
        <Nav/>
        <Layout liftMessage={this.state.liftMessage} writeMessage={this.state.writeMessage}/>
      </div>
    );
  }
}
