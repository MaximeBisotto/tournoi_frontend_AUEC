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
        var result = ajaxGET("http://auec-leaderboard-dev.herokuapp.com/api/matchs/");
        console.log("azer" + this.props.filterTeam)
        if (this.props.filterTeam != null) {
            console.log(result)
            console.log(result.results.length)
            for (var i = 0; i < result.results.length; i++) {
                console.log("choucroute" + result.results[i].teamAuec)
                if (result.results[i].teamAuec != this.props.filterTeam) {
                    result.results.splice(i, 1);
                    console.log(result)
                    console.log("testazert : " + i)
                    i = i - 1;
                }
            }
        }
        this.setState({
            isLoaded: true,
            items: result.results
        });
        console.log(result)
    }

    render() {
        const { error, isLoaded, items } = this.state;
        console.log(items)
        if (error) {
            return <div>Erreur : {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Chargement…</div>;
        } else if (items.length == 0) {
            return <div>Aucun match joué par l'équipe sélectionné</div>
        }
        else {
            return (
                <div>
                    <ul>
                        {items.map(item => (
                            <Match team1="null" score1={item.scoreAuec} team2={item.teamAdvName} score2={item.scoreAdv} date={item.date} />
                        ))}
                    </ul>
                </div>
            );
        }
    }
}
