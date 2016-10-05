import React, { Component } from 'react'
// import Home from './layout/Home'
// import Search from './layout/Search'
import {Home, Search} from './layout'

class Main extends Component {

  componentWillMount(){
    // console.log('Page = ' + this.props.page)
    // console.log('Params = ' + JSON.stringify(this.props.params))

  }
  render() {
    const layout = (this.props.page == '/') ? <Home /> : <Search params={this.props.params}/>
    return (
      <div>
          {layout}
      </div>
    )
  }
}

export default Main
