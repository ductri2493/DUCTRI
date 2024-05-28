import React, { Component } from "react";
import { Players } from "../components/ListOfPlayers";
import PlayerPresentation from "./PlayerPresentation";

export class Main extends Component {
  constructor() {
    super();
    this.state = {
      players: Players,
    };
  }
  render() {
    return <PlayerPresentation players={this.state.players} />;
  }
}
export default Main;
