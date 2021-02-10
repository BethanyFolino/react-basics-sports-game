// Deafault App component that all other compents are rendered through
function App(props) {
  const teamOne = {
    name: "Gallifrey Time Lords",
    logo: "./time-lords-logo.jpg",
  };
  const teamTwo = {
    name: "Planet Mondas Cybermen",
    logo: "./cybermen-logo.png",
  };

  return (
    <div>
      <h1>Welcome to the sports game starter</h1>
      <Body team={teamOne} />
      <Body team={teamTwo} />
    </div>
  );
}

//Render the application
ReactDOM.render(<App />, document.getElementById("root"));
