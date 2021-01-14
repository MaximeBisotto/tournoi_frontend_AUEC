import React from 'react';
import ListTeam from './listTeam';
import ListMatch from './listMatch';

function Schedule(props) {
  return (<div>
          <div className="events">
              <div className="Event">
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
                          <ListMatch />
                      </a>
                  </div>
              </div>
              <div className="sidebar">
                  <div className="EventFilter">
                      <ul className="leagues">
                          <div>
                              <ListTeam />
                              <ListMatch filterTeam={props.filterTeam}/>
                          </div>
                      </ul>
                  </div>
              </div>
        </div>
      </div>);
  }
  
  export default Schedule;
