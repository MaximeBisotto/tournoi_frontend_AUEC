import React from 'react';

function Match(props) {
  return (<div> 
  		<div>
         	<a className="single past event">
            	<div className="EventTime">
                	<div className="time"><span className="hour">11</span><span className="minute">15</span></div>
                </div>
                <div className="teams winner-team1">
                	<div className="team team1">
                    	<div className="team-info">
                        	<h2><span className="name">{props.team1}</span><span className="tricode">DWG</span></h2>
                        </div>
                    </div>
                    <div className="score"><span className="scoreTeam1">{props.score1}</span><span className="hyphen">-</span><span
                                  className="scoreTeam2">{props.score2}</span></div>
                    <div className="team team2">
                    	<div className="team-info">
                        	<h2><span className="name">{props.team2}</span><span className="tricode">SN</span></h2>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    </div>);
  }
  
  export default Match;
