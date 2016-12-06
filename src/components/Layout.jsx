const Layout = ({liftMessage, writeMessage}) => (
  <div>
    <div className="col-md-6">
      <LiftMeUp liftMessage={liftMessage}/>
    </div>
    <div className="col-md-6">
      <SendLove writeMessage={writeMessage}/>
    </div>
  </div>
);
