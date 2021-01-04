//import logo from './logo.svg';
import './App.css';
import Schedule from './componment/schedule';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

function App() {
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
    return(
        <div className="riotbar-bar-content" id="riotbar-bar-content">
            <div className="riotbar-navbar-navitem-container" data-link-id="schedule"><a
                className="riotbar-navbar-link riotbar-active-link" data-riotbar-link-id="schedule"
                href="/schedule" target="">PLANNING</a></div>
            <div className="riotbar-navbar-navitem-container" data-link-id="team"><a
                className="riotbar-navbar-link " onClick={() => history.push('/team')} href='/team'
                target="">Team</a></div>
            <div className="riotbar-navbar-navitem-container" data-link-id="standings"><a
                className="riotbar-navbar-link " data-riotbar-link-id="standings" onClick={() => history.push('/team')}
                target="">CLASSEMENT</a></div>
            <div className="riotbar-navbar-navitem-container" data-link-id="rewards"><a
                className="riotbar-navbar-link " data-riotbar-link-id="rewards" onClick={() => history.push('/team')}
                target="">RÉCOMPENSES</a></div>
        </div>
    );

}

export default App;