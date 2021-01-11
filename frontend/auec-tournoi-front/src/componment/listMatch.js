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
