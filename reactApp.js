// Default App component that all other components are rendered through
function App(props) {
  return (
    <React.Fragment>
      <Game
        homeTeam="Gallifrey Time Lords"
        awayTeam="Planet Mondas Cybermen"
        homeLogo="./time-lords-logo.jpg"
        awayLogo="./cybermen-logo.png"
      />
    </React.Fragment>
  );
}

class Team extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: props.name,
      logo: props.logo,
    };
  }

  render() {
    return (
      <div>
        <h2>{this.props.name}</h2>
        <img src={this.props.logo} width="200" />
      </div>
    );
  }
}

//Render the application
ReactDOM.render(<App />, document.getElementById("root"));
