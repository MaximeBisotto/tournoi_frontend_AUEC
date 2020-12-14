import React from 'react';

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
    fetch("http://localhost:3018/team", {"method": "GET", "mode": "cors", "Access-Control-Allow-Origin": "http://localhost:3018"})
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result
          });
        },
        // Remarque : il est important de traiter les erreurs ici
        // au lieu d'utiliser un bloc catch(), pour ne pas passer à la trappe
        // des exceptions provenant de réels bugs du composant.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
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
		    {items.map(item => (
		    <li key={item.nomEquipe} className="league">
		    	<div className="info">
		    	    <div className="label">
		    	        <div className="name">{item.nomEquipe}</div>
		            </div>
		        </div>
		    </li>
		    ))}
        </ul>
      );
    }
  }
}
