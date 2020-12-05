import React, {useState, useEffect} from "react";
// import playerdata from "../data/userseeds.json";
import Table from 'react-bootstrap/Table';
import TableHead from './tableHead';
import TableBody from './tableBody';
// import owStats from '../data/owStats';
import Searchbar from './searchbar';
import getPlayerStat from '../utils/getPlayerStat';

let sortCategory = 'username';
let sortDirection = 'descending';
let playerData;

function TableMain () {
  const [players, setPlayers] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchCategory, setSearchCategory] = useState('team');

  useEffect(() => {
    if (players !== null) {
      let searchedPlayers = playerData.filter(player => {
        let playerStat = getPlayerStat(player, searchCategory);
        if(playerStat !== undefined && playerStat.toLowerCase().includes(searchQuery)) {
          return true;
        } else { 
          return false; 
        }
      });
      setPlayers(searchedPlayers);
    }
  }, [searchQuery]);

  useEffect(() => {
    fetch("https://api.overwatchleague.com/players")
      .then (res => res.json())
      .then (results => {
        playerData = results.content;
        console.log("pdata", playerData);
      })
      .then (() => {
        setPlayers(playerData);
      })
  }, []);


  


  function sortByCategory (category) {
    if (sortCategory === category) {
      toggleDirection();
    } else {
      sortDirection = 'descending';
      sortCategory = category;
    }
    
    let catA, catB;
    let sortedPlayers = players.sort(function(a, b) {
      catA = getPlayerStat(a, category);
      catB = getPlayerStat(b, category);

      // If either category is null, then sort accordingly
      if(catA === undefined || catB === undefined) {
        if (catA === undefined && catB === undefined) { return 0; } 
        else if (catA === undefined) { return 1; } 
        else if (catB === undefined) { return -1; }
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

  function handleSearchQuery (event) {
    let query = event.target.value.toLowerCase();
    setSearchQuery(query);
  }

  function handleSearchCategory (event) {
    console.log("event: ", event.target.value);
    setSearchCategory(event.target.value);
  }

  // ANCHOR Return JSX!
  if (players === null) { 
    return (
      <div>
        Loading...
      </div>
    )
  } else {
    return (
      <>
      <Searchbar 
        searchMethod={handleSearchQuery} 
        categoryMethod={handleSearchCategory} 
        category={searchCategory} 
        query={searchQuery}/>
      <Table striped bordered hover>
        <TableHead sortMethod={sortByCategory}/>
        <TableBody players={players}/>
      </Table>
      </>
    );
  }
}

export default TableMain;