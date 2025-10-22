export default function Form() {
    return (
        <div>
            <form>
                <select id="teams">
                    <option id="selectTeam" value="4">4 Teams</option>
                    <option id="selectTeam" value="5">5 Teams</option>  
                </select>
            </form>
        </div>
    )
}

// in human words 

// 1: how many teams? 4 or 5? 
// 2: make corresponding number of inputs 
// 3: enter team names 
// 4: submit 
// 5: in db each team has name, wins, losses, points for, points against, point diff, games played 
// serve/receive lineups (hash of numbers: keys are roman numerals, values are player numbers) 


// 6: go to new screen with schedule and scores
// 7: button to go to scorebook 
// different component from here 