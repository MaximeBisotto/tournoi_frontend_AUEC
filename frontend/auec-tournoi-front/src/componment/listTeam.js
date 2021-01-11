import React from 'react';
import ajaxGET from '../ajax'
import {createBrowserHistory} from "history";
const history = createBrowserHistory();

export default class ListTeam extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    // fetch("http://localhost:3018/team", {"method": "GET", "mode": "cors", "Access-Control-Allow-Origin": "http://localhost:3018"})
    //   .then(res => res.json())
    //   .then(
    //     (result) => {
    //       this.setState({
    //         isLoaded: true,
    //         items: result
    //       });
    //     },
    //     // Remarque : il est important de traiter les erreurs ici
    //     // au lieu d'utiliser un bloc catch(), pour ne pas passer à la trappe
    //     // des exceptions provenant de réels bugs du composant.
    //     (error) => {
    //       this.setState({
    //         isLoaded: true,
    //         error
    //       });
    //     }
    //   )
    var result = ajaxGET("http://auec-leaderboard-dev.herokuapp.com/api/teams/");
    this.setState({
      isLoaded: true,
      items: result
    });
    console.log(result);
  }

  clickTeam(idTeam) {
    history.push(history.location.pathname + idTeam);
    history.location.reload();
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Erreur : {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Chargement…</div>;
    } else {
      return (
          <ul>
            <li className="league selected">
              <div className="info">
                <div className="label">
                  <div className="name">Toutes les équipes</div>
                </div>
              </div>
            </li>
            {items.results.map(item => (
                <li key={item.teamName} className="league">
                  <div className="info">
                    <div className="label">
                      <div className="name" onClick={() => this.clickTeam(item.id)}>
                        {item.teamName}
                      </div>
                    </div>
                  </div>
                </li>
            ))}
          </ul>
      );
    }
  }
}
