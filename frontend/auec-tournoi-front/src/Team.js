//import logo from './logo.svg';
import './App.css';
import Team from './componment/team';
import ListTeam from "./componment/listTeam";
import React from "react";

class team extends React.Component{
    render() {
        return(<div>
                <Team/>
                <ListTeam teamName={this.props.selectTeam}/>
            </div>
        );
    }

}

export default team;
