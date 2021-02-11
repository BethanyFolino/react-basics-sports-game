// Default App component that all other components are rendered through
function App(props) {
  return (
    <React.Fragment>
      <Game
        name=""
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

  //Score
  score = () => {
    let number = Math.floor(Math.random() * 2);
    if (number == 0) {
      this.setState((...state) => ({
        score: this.state.score + 1,
      }));
    }
  };

  //Shot percentage
  shotPercentage = () => {
    this.setState((state) => {
      return {
        ...state,
        percentage: Math.floor((state.score / state.shots) * 100),
      };
    });
  };

  //Event handler
  onClick = (event) => {
    this.shotsTaken();
    this.score();
    this.shotPercentage();
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
        {this.state.shots ? (
          <div>Shot Percentage: {this.state.percentage + "%"}</div>
        ) : (
          <div></div>
        )}
        <br />
        <br />
        <button onClick={this.onClick}>Shoot!</button>
        <br />
      </div>
    );
  }
}

class Game extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <h1>Welcome to {this.props.name}!</h1>
        <Team name={this.props.homeTeam} logo={this.props.homeLogo} />
        <Team name={this.props.awayTeam} logo={this.props.awayLogo} />
      </React.Fragment>
    );
  }
}

//Render the application
ReactDOM.render(<App />, document.getElementById("root"));
