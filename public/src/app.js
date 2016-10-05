import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Main from './components/Main'

class App extends Component {

  constructor(){
    super()
    this.state = {
      page: '',
      params: null
    }
  }

  componentWillMount(){
    var location = window.location
    //console.log('full: ' + location)

    var page =  location.pathname
    //console.log("componentWillMount: " + page)

    var queryParamsStr = window.location.search
    //console.log('SEARCH: ' + queryParamsStr)


    if(queryParamsStr.length > 0){
      var params = {}
      queryParamsStr = queryParamsStr.replace('?', '')
      var parts = queryParamsStr.split('&')
      parts.forEach(function(part){
        //console.log('PARAMS: ' + part)
        if (part.indexOf('=' != -1)){
          var keyValue = part.split('=')
          params[keyValue[0]] = keyValue[1]

        }
      })
      //console.log('PARAMS:' + JSON.stringify(params))
      this.setState({
        page: page,
        params: params
      })
    } else {
            this.setState({
              page: page
            })
    }


  }
  render() {
    return (
      <div>
          <Main  page={this.state.page} params={this.state.params}/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
