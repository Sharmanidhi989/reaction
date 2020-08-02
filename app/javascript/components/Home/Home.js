import React, { Component } from 'react';
import Jumbotron from "./Jumbotron";
import Table from "./Table/Table";
import axios from "axios";

class Home extends Component {
  constructor() {
    super()

    this.state = { 
      course_modules: []
    }
  }

  componentDidMount(){
    let result = []
    axios.get('/episodes.json')
      .then(data => {
        data.data.data.map((item) => {
          result.push({id: item.id, title: item.title, description: item.description, url: item.url, active: false})
          this.setState({course_modules: result})
        })
      })
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
