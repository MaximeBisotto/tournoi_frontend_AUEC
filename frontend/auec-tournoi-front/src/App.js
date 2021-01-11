//import logo from './logo.svg';
import './App.css';
import React from 'react';
import Schedule from './componment/schedule';

class App extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false
    };
  }

  /*return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <ListTeam />
      </header>
    </div>
  );*/
  //var htmlContent = require('./index_test2.html');
  /*return (
	//<div dangerouslySetInnerHTML={ {__html: html} } />
	<HtmlPage />
  );*/
  render() {
    return(
        <Schedule filterTeam={this.props.match.params.idTeamFilter}/>
    );
  }
}

export default App;
