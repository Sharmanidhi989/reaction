import React, { Component } from 'react';
import Jumbotron from "./Jumbotron";

class Home extends Component {
  constructor() {
    super()

    this.state = { 
      modules: [
        { id: 1, title: "happy q", description: "me", active: false },
        { id: 2, title: "happy w", description: "mee", active: false },
        { id: 3, title: "happy e", description: "meee", active: false }
      ]
    }
  }

  render(){
    return(
      <div>
        <Jumbotron/>
      </div>
    )
  }
}

export default Home
