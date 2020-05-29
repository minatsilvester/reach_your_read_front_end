import React from 'react';

class App extends React.Component{
  constructor(props){
    super(props);

    this.state = { res: "" }
  }

  componentDidMount(){
    this.getResponse()
  }

  getResponse(){
    fetch("http://localhost:9000/test")
    .then(response => response.text())
    .then(response => this.setState({ res: response }))
    .catch(err => console.log(err))
  }

  render(){
    return(
      <div>
        <center>
          <h1>Welcome to the big test</h1>
          <h1>{this.state.res}</h1>
        </center>
      </div>
    );
  }
}
export default App;
