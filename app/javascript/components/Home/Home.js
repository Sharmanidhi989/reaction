import React, { Component } from 'react';
import Jumbotron from "./Jumbotron";
import Table from "./Table/Table";
class Home extends Component {
  constructor() {
    super()

    this.state = { 
      course_modules: [
        { id: 1, title: "happy q", description: "me", active: false },
        { id: 2, title: "happy w", description: "mee", active: false },
        { id: 3, title: "happy e", description: "meee", active: false }
      ]
    }
  }

  handleVideoChange(item, event){
    event.preventDefault();
    let course_modules = [...this.state.course_modules]
    course_modules.map(item => {
      item.active = false
    })

    item.active = !item.active
    course_modules[item.id-1] = item
    this.setState({course_modules})
  }

  render(){
    return(
      <div>
        <Jumbotron/>
        <Table handleVideoChange={this.handleVideoChange.bind(this)} course_modules={this.state.course_modules}/>
      </div>
    )
  }
}

export default Home
