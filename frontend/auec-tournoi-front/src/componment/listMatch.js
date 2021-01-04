import React from 'react';
import Match from './match';
import ajaxGET from "../ajax";

export default class ListMatch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        /*var myHeaders = new Headers();
      myHeaders.append("Authorization", "Token 5876e596bd4a4f94ef2f32f991d5b7d77e836507");
      myHeaders.append("Access-Control-Allow-Origin", "*");*/
        fetch("http://localhost:3018/match", {"method": "GET", "mode": "cors", "contentType":"application/json"})
            .then(res => res.json())
            .then(
                (result) => {
                    if (this.props.filterTeam != null) {
                        for (var i = 0; i < result.length; i++) {
                            if (result[i] != this.props.filterTeam) {
                                result.splice(i, 1);
                                i = i - 1;
                            }
                        }
                    }
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
        var result = ajaxGET("http://auec-leaderboard-dev.herokuapp.com/api/match/");
        if (this.props.filterTeam != null) {
            for (var i = 0; i < result.length; i++) {
                if (result[i] != this.props.filterTeam) {
                    result.splice(i, 1);
                    i = i - 1;
                }
            }
        }
        this.setState({
            isLoaded: true,
            items: result
        });
    }

    render() {
        const { error, isLoaded, items } = this.state;
        console.log(items);
        if (error) {
            return <div>Erreur : {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Chargement…</div>;
        } else {
            return (
                <div>
                    <ul>
                        {items.results.map(item => (
                            <Match team1="null" score1={item.scoreAuec} team2={item.teamAdvName} score2={item.scoreAdv} date={item.date} />
                        ))}
                    </ul>
                </div>
            );
        }
    }
}
