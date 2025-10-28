'use client'
import React, { useState } from 'react';
//import { Stack } from '../../../lib/stack';
import "../globals.css";
export default function LineupForm() {

    const [team1Lineup, setTeam1Lineup] = useState([]);
    const [team2Lineup, setTeam2Lineup] = useState({});


function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();

  const form = e.currentTarget; // ✅ properly typed HTMLFormElement
  console.log(form);
  console.log("TEST");

  // Convert HTMLFormControlsCollection to array
  Array.from(form.elements).forEach((el) => {
    if (el instanceof HTMLInputElement) {
      if (el.id && (el.id.includes("I") || el.id.includes("V"))) {
        console.log(el.value);
      }
    }
  });
}


    return (
        <div>
            <div id="team1">
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div id="team1">
                        <input id="1-I"></input>
                        <input id="1-II"></input>
                        <input id="1-III"></input>
                        <input id="1-IV"></input>
                        <input id="1-V"></input>
                        <input id="1-VI"></input>
                    </div>


                    <div id="team2">
                        <input id="2-I"></input>
                        <input id="2-II"></input>
                        <input id="2-III"></input>
                        <input id="2-IV"></input>
                        <input id="2-V"></input>
                        <input id="2-VI"></input>
                    </div>

                    <button type="submit">Submit form</button>
                </form>
            </div>
        </div >
    )
}