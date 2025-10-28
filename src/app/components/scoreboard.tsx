'use client'
import React, { useState } from 'react';
import { Stack } from '../../../lib/stack';
import LineupForm from './lineups';
export default function Scoreboard() {

    const [score, setScore] = useState({
        team1: 0,
        team2: 0
    });
    const [servingTeam, setServingTeam] = useState(1); //1 or 2
    const [server1, setServer1] = useState(1); //1-6 player numbers //should get from other component
    const [server2, setServer2] = useState(1); //1-6 player numbers //should get from other component
    //do later //const [stack] = useState(() => new Stack());

    //need to make accurate to clicks for increase/decrease
    function increaseScoreTeam1() {
        setScore({ team1: score.team1 + 1, team2: score.team2 });

        //to change server or not
        //if team 1 serving and team 1 scores, do not change servingTeam
        if (servingTeam === 1) { //and scores
            setServingTeam(1);
        }

        //if team 2 serving and team 1 scores, change servingTeam to 1  
        else if (servingTeam === 2) {
            setServingTeam(1);
            setServer1(server1 + 1);
            if (server1 >= 6) {
                setServer1(1);
            }
        }

        console.log(servingTeam);

    }

    function increaseScoreTeam2() {
        setScore({ team1: score.team1, team2: score.team2 + 1 });

        //if team 2 serving and team 2 scores, do not change servingTeam
        if (servingTeam === 2) { //and scores
            setServingTeam(2);
        }

        //if team 1 serving and team 2 scores, change servingTeam to 2  
        else if (servingTeam === 1) {
            setServingTeam(2);
            setServer2(server2 + 1);
            if (server2 >= 6) {
                setServer2(1);
            }
        }
        console.log(servingTeam);
    }

    // const addPoint = () => {
    //     stack.push(score);
    //     console.log(stack);
    // }



    return (
        <div>
            <div id="scores">
                <div id="team1">
                    <div id="nums" onClick={increaseScoreTeam1}>{score.team1}</div>
                </div>
                <div id="team2">
                    <div id="nums" onClick={increaseScoreTeam2}>{score.team2}</div>
                </div>
            </div>
            <div id="serving">
                <h1>Serving Team: {servingTeam}</h1>
            </div>
            <div id="serving">
                <h1>Server: {servingTeam == 1 ? server1 : server2}</h1>
            </div>
            <div id="timeout"></div>
            <div id="more"></div>
        </div>
    )
}