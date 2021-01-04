//import logo from './logo.svg';
import './App.css';
import Team from './componment/team';
import ListTeam from "./componment/listTeam";
import React from "react";

function team() {
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
    return(<div>
            <Team/>
            <ListTeam />
        </div>
    );

}

export default team;
