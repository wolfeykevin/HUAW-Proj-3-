import React from "react";
import { useState, useEffect } from 'react'
import "../_styled/Leaderboard.css"

const Leaderboard = () => {
  let [scores, setScores] = useState([])
  useEffect(() => {
    fetch('http://localhost:8080/api/leader-board')
    .then(res => res.json())
    .then(data => setScores(data))
  },[])

  return (
    <div className='scroll'>
      <table className='tabs'>
        <thead className='header'>
          <tr>
            <th>Player Name</th>
            <th>Player Score</th>
          </tr>
        </thead>
        <tbody>
        {scores.map((entry => {
          if(entry.highscore > 0) {
            return (
              <tr>
                <td>
                  {entry.name}
                </td>
                <td>
                  {entry.highscore}
                </td>
              </tr>
            )
          }
        }))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;
