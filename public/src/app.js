import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Main from './components/Main'

class App extends Component {

  constructor(){
    super()
    this.state = {
      page: ''
    }
  }

  componentWillMount(){
    var location = window.location
    console.log('full: ' + location)
    var page =  location.pathname
    console.log("componentWillMount: " + page)
    this.setState({
      page: page
    })
  }
  render() {
    return (
      <div>
          <Main  page={this.state.page}/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
