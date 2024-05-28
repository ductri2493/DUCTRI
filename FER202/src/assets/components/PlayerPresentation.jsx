import React from "react";
import { Players } from "./ListOfPlayers";
import { useState } from "react";
export default function PlayerPresentation() {
  const [player, setPlayer] = useState([]);
  return (
    <div className="container">
      {Players.map((player) => (
        <div className="column col-third" key={player.id}>
          <div className="card">
            <img src={player.img} />
            <h3>{player.name}</h3>
            <p className="title"></p>
            <p>
              <button
                onClick={() => {
                  setPlayer(player);
                }}
              >
                <a href="#popup1" id="openPopUp">
                  Detail
                </a>
              </button>
            </p>
          </div>
        </div>
      ))}
      <div id="popup1" className="overlay">
        <div className="popup">
          <img src={player.img} />
          <h2>{player.name}</h2>
          <a href="#" className="close">
            &times;
          </a>
          <div className="content">{player.info}</div>
        </div>
      </div>
    </div>
  );
}
