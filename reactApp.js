// Deafault App component that all other compents are rendered through

class HomeTeam extends React.Component {
  constructor(props) {
    super(props);
    this.name = "Gallifrey Time Lords";
    // this.logo = //why won't it make a logo and not just a string version of the path to the logo?
  }

  render() {
    return (
      <h1>
        Team Name: {this.name} {this.logo}
      </h1>
    );
  }
}
class AwayTeam extends React.Component {
  constructor(props) {
    super(props);
    this.name = "Planet Mondas Cybermen";
    // this.logo = something it actually recognizes as a logo NOT a string
  }

  render() {
    return (
      <h1>
        Team Name: {this.name} {this.logo}
      </h1>
    );
  }
}
function App(props) {
  return (
    <div>
      <HomeTeam />
      <AwayTeam />
    </div>
  );
}

//Render the application
ReactDOM.render(<App />, document.getElementById("root"));
