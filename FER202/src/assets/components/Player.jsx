import React, { Component } from "react";
import { Players } from "./ListOfPlayers";
import { useState } from "react";
class Player extends Component {
  render() {
    return (
      <div className="content">
        {Players.map((player) => (
          <div className="container" key={player.id}>
            <div className="col col-third">
              <div className="card">
                <img src={player.img} />
                <h3>{player.name}</h3>
                <p className="title">{player.club}</p>
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
          </div>
        ))}
      </div>
    );
  }
}

export default Player;
