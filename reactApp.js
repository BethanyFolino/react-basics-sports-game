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
      shots: 0,
      score: 0,
      name: props.name,
      logo: props.logo,
    };
  }

  //Shots taken
  shotsTaken = () => {
    this.setState((...state) => ({
      shots: this.state.shots + 1,
    }));
  };

  //Event handler for button
  onClick = (event) => {
    this.shotsTaken();
  };

  render() {
    return (
      <div>
        <h2>{this.props.name}</h2>
        <img src={this.props.logo} width="200" />
        <br />
        Shots: {this.state.shots}
        <br />
        Score: {this.state.score}
        <br />
        <button onClick={this.onClick}>Shoot!</button>
      </div>
    );
  }
}

//Render the application
ReactDOM.render(<App />, document.getElementById("root"));
