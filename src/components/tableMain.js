import React, {useState, useEffect} from "react";
// import playerdata from "../data/userseeds.json";
import Table from 'react-bootstrap/Table';
import TableHeader from './tableHeader';
import TableBody from './tableBody';
import owStats from '../data/owStats';

// let playerdata = null;
let sortCategory = 'username';
let sortDirection = 'descending';
let searchQuery = null;

function TableMain () {
  const [players, setPlayers] = useState(null);
  // const [isLoaded, setIsLoaded] = useState(false);
  // let [sortOptions, setSortOptions] = useState({
  //   category : 'username',
  //   direction : 'descending',
  //   searchQuery : null
  // })
  // const [sortCategory, setSortCategory] = useState("username");
  // const [sortDirection, setSortDirection] = useState("descending");
  // const [searchQuery, setSearchQuery] = useState(null);

  useEffect(() => {
    console.log("Players updated! Re-rendering.");
  }, [players])

  useEffect(() => {
    
  }, [sortCategory, sortDirection, searchQuery]);

  // ANCHOR API CALL!
  useEffect(() => {
    let newPlayers;
    fetch("https://randomuser.me/api/?results=30&inc=name,nat,login,")
      .then (res => res.json())
      .then (results => {
        newPlayers = results.results;
        for (let player of newPlayers) {
          let stats = owStats();

          player.role = stats.role;
          player.hero = stats.hero;
          player.rank = stats.rank;
          player.team = stats.team;
        }
        console.log("newPlayers: ", newPlayers);
      })
      .then (() => {
        setPlayers(newPlayers);
      })
  }, []);

  if (players === null) { 
    return (
      <div>
        Loading...
      </div>
    )
  } else {
    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <TableHeader text="Team" category="team" sortMethod={sortByCategory}/>
            <TableHeader text="Username" category="username" sortMethod={sortByCategory}/>
            <TableHeader text="First Name" category="firstName" sortMethod={sortByCategory}/>
            <TableHeader text="Last Name" category="lastName" sortMethod={sortByCategory}/>
            <TableHeader text="Nationality" category="nat" sortMethod={sortByCategory}/>
            <TableHeader text="Rank" category="competitiveRank" sortMethod={sortByCategory}/>
            <TableHeader text="Main Role" category="mainRole" sortMethod={sortByCategory}/>
            <TableHeader text="Main Hero" category="mainHero" sortMethod={sortByCategory}/>
          </tr>
        </thead>
        <TableBody players={players}/>
      </Table>
    );
  }


  function sortByCategory (category) {
    if (sortCategory === category) {
      toggleDirection();
    } else {
      sortDirection = 'descending';
      sortCategory = category;
    }

    let catA, catB;
    let sortedPlayers = players.sort(function(a, b) {
      catA = a[category];
      catB = b[category];

      // If either category is null, then sort accordingly
      if(catA === null || catB === null) {
        if (catA === null && catB === null) { return 0; } 
        else if (catA === null) { return 1; } 
        else if (catB === null) { return -1; }
      }

      // If neither are null, then sort accordingly.
      else {
        // If both are strings, then capitalize
        if(typeof catA === 'string' && typeof catB === 'string') {
          catA = catA.toUpperCase();
          catB = catB.toUpperCase();
        }

        if(catA > catB) { return 1; } 
        else if (catA < catB) { return -1; } 
        else { return 0; }
      }
    });

    // If the category is based on numbers, reverse it. The sorting algorithm sorts these in reverse by default
    if (typeof catA === "number") { 
      sortedPlayers.reverse(); 
    } 

    if (sortDirection === "ascending") {
      sortedPlayers.reverse();
    }

    /* NOTE I DID IT!!!!! There was a HUGE issue here where I was using `setPlayers(sortedPlayers)` and it wasn't updating state, which wasn't re-rendering the component. 
      I believe this was caused because though I was reording the array, I wasn't actually re-assigning it. 
      For some reason, spreading the array is what solved this incredibly frustrating issue.
      This article helped me solve this: https://stackoverflow.com/questions/43638938/updating-an-object-with-setstate-in-react
      This article explains the issue: https://stackoverflow.com/questions/56266575/why-is-usestate-not-triggering-re-render
    */
    setPlayers([...sortedPlayers]);
  }

  function toggleDirection () {
    if(sortDirection === "ascending") {
      sortDirection = "descending";
    } else {
      sortDirection = "ascending";
    }
  }
}

export default TableMain;