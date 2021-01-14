import React from 'react';
import ListTeam from "./listTeam";
import ajaxGET from "../ajax";
import {createBrowserHistory} from "history";
const history = createBrowserHistory();



export default class Team extends React.Component {
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
        //     .then(res => res.json())
        //     .then(
        //         (result) => {
        //             var team;
        //             for (var i = 0; i < result.results.length; i++) {
        //                 if (result.results[i].teamName == this.props.teamName) {
        //                     team = result.results[i];
        //                     break;
        //                 }
        //             }
        //                 this.setState({
        //                 isLoaded: true,
        //                 items: team
        //             });
        //         },
        //         // Remarque : il est important de traiter les erreurs ici
        //         // au lieu d'utiliser un bloc catch(), pour ne pas passer à la trappe
        //         // des exceptions provenant de réels bugs du composant.
        //         (error) => {
        //             this.setState({
        //                 isLoaded: true,
        //                 error
        //             });
        //         }
        //     )
        var team;
        var result = ajaxGET("http://auec-leaderboard-dev.herokuapp.com/api/teams/");
        for (var i = 0; i < result.results.length; i++) {
            if (result.results[i].id == this.props.filterTeam) {
                team = result.results[i];
                break;
            }
        }
        this.setState({
            isLoaded: true,
            items: team
        });
    }

    // shouldComponentUpdate() {
    //     var team;
    //     var result = ajaxGET("http://auec-leaderboard-dev.herokuapp.com/api/teams/");
    //     for (var i = 0; i < result.results.length; i++) {
    //         if (result.results[i].teamName == this.props.teamName) {
    //             team = result.results[i];
    //             break;
    //         }
    //     }
    //     this.setState({
    //         isLoaded: true,
    //         items: team
    //     });
    // }

    render() {
        const { error, isLoaded, items } = this.state;

        if (error) {
            return <div>Erreur : {error.message}</div>;
        }
        else if (!isLoaded) {
            return <div>Chargement…</div>;
        }
        else if (items == null)
            return <div>Aucune équipe sélectionné</div>;
        else {
            return <div>Liste des joueur de l'équipe {items.teamName}
                <ul>
                    {items.players_auec.map(item => (
                        <li key={item.nickname}>
                            <div className="name" onClick={() => history.push(this.props.location.pathname + item.id)} href='this.props.location.pathname + {item.id}'>{item.nickname}</div>
                        </li>
                    ))}
                </ul>
            </div>;
        }
    }
}
