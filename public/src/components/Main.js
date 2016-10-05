import React, { Component } from 'react'
// import Home from './layout/Home'
// import Search from './layout/Search'
import {Home, Search} from './layout'

class Main extends Component {

  componentDidMount(){
    console.log('Page = ' + this.props.page)
  }
  render() {
    return (
      <div>
          <Search />
      </div>
    )
  }
}

export default Main
