'use client'
import React, { useState } from 'react';
import { Stack } from '../../../lib/stack';

export default function Scoreboard() {

    const [score, setScore] = useState({
        team1: 0,
        team2: 0
    });
    const [servingTeam, setServingTeam] = useState(1); //1 or 2
    const [server, setServer] = useState(1); //1-6 player numbers
    const [stack] = useState(() => new Stack());

    //need to make accurate to clicks for increase/decrease
    function increaseScore() {
        setScore({team1: score.team1 + 1, team2: score.team2});

        //to change server or not
        //if team 1 serving and scores, do not change servingTeam
        if (servingTeam === 1) { //and scores
            setServingTeam(1);
        }

        //if team 1 serving and team 2 scores, change servingTeam to 2
        else if (servingTeam === 1) {
            setServingTeam(2);
        }
        
        //if team 2 serving and scores, do not change servingTeam
        else if (servingTeam === 2) { //and scores
            setServingTeam(2);
        }

        //if team 2 serving and team 1 scores, change servingTeam to 1  
        else if (servingTeam === 2) {
            setServingTeam(1);
        }
    }

    const addPoint = () => {
        stack.push(score);
        console.log(stack);
    }



    return (
        <div>
            <div id="scores" className='bg-black-200'>
                <div id="team1">
                    <div id="nums" onClick={increaseScore}>{score.team1}</div>
                </div>
                <div id="team2">
                    <div id="nums" onClick={addPoint}>{score.team2}</div>
                </div>
            </div>
            <div id="serving">
                <h1>Serving Team: {servingTeam}</h1>
            </div>
            <div id="timeout"></div>
            <div id="more"></div>
        </div>
    )
}