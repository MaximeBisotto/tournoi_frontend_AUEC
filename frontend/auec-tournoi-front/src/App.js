import logo from './logo.svg';
import './App.css';
import ListTeam from './componment/listTeam';

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
      <div>
          <div className="events">
              <div className="Event">
                  <div className="today-button scroll-up">
                      Aujourd'hui&nbsp;
                      <svg className="icon" height="10px" viewBox="126 10 10 9" width="10px" xmlns="https://www.w3.org/2000/svg">
                          <path className="shape" d="M131,10 L127,14 L135.001,14 L131,10 Z M130,19 L132.001,19 L132.001,14 L130,14 L130,19 Z"
                                fill="#5ABBD4"
                                fillRule="evenodd"></path>
                      </svg>
                  </div>
                  <div className="divider past"></div>
                  <div className="EventDate">
                      <div className="date"><span className="weekday">Vendredi</span><span className="dash">–</span><span
                          className="monthday">25 septembre</span></div>
                  </div>
                  <div className="EventMatch">
                      <a className="single past event">
                          <div className="EventTime">
                              <div className="time"><span className="hour">14</span><span className="minute">00</span></div>
                          </div>
                          <div className="teams winner-team1">
                              <div className="team team1">
                                  <div className="team-info">
                                      <h2><span className="name">Team Liquid</span><span className="tricode">TL</span></h2>
                                      <div className="winloss">4V-1D</div>
                                  </div>
                              </div>
                              <div className="score"><span className="scoreTeam1">1</span><span className="hyphen">-</span><span
                                  className="scoreTeam2">0</span></div>
                              <div className="team team2">
                                  <div className="team-info">
                                      <h2><span className="name">MAD Lions</span><span className="tricode">MAD</span></h2>
                                      <div className="winloss">2V-3D</div>
                                  </div>
                              </div>
                          </div>
                          <div className="league">
                              <div className="name">Mondial</div>
                              <div className="strategy">série de 1</div>
                          </div>
                      </a>
                  </div>
                  <div className="EventDate">
                      <div className="date"><span className="weekday">Samedi</span><span className="dash">–</span><span className="monthday">26 septembre</span>
                      </div>
                  </div>
                  <div className="EventMatch">
                      <a className="single past event">
                          <div className="EventTime">
                              <div className="time"><span className="hour">11</span><span className="minute">00</span></div>
                          </div>
                          <div className="teams winner-team1">
                              <div className="team team1">
                                  <div className="team-info">
                                      <h2><span className="name">DAMWON Gaming</span><span className="tricode">DWG</span></h2>
                                      <div className="winloss">3V-0D</div>
                                  </div>
                              </div>
                              <div className="score"><span className="scoreTeam1">3</span><span className="hyphen">-</span><span
                                  className="scoreTeam2">1</span></div>
                              <div className="team team2">
                                  <div className="team-info">
                                      <h2><span className="name">Suning</span><span className="tricode">SN</span></h2>
                                      <div className="winloss">2V-1D</div>
                                  </div>
                              </div>
                          </div>
                          <div className="league">
                              <div className="name">Mondial</div>
                              <div className="strategy">série de 5</div>
                          </div>
                      </a>
                  </div>
              </div>
              <div className="sidebar">
                  <div className="EventFilter">
                      <div className="header">
                          <div className="filter">FILTRER</div>
                      </div>
                      <ul className="leagues">
                          <div>
                              <ListTeam />
                          </div>
                      </ul>
                  </div>
              </div>
        </div>
      </div>
  );

}

export default App;
