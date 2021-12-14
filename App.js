import React, { Component } from "react";


class App extends Component {
state = {
    dogs: [],
    loaded: false
  };

componentDidMount() {
fetch("https://dog.ceo/dog-api/")
      .then(r => r.json())
      .then(dogs => this.setState({dogs: dogs}
        loaded:true
      ))
  };

render() {
  if (!this.state.loaded) return <div>Loading...</div>;
 const prop = this.props
 const {doggies} = this.state.dogs
  return (
    <div className="App">
      <h1> Dogs!</h1>
      <input>Search</input>
      <Dogs dogs={doggies} />
      </div>
  );
}
}

export default App;
