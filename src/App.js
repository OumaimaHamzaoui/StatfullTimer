import Timer from './Component/Timer/Timer'
import React, { Component } from 'react'

export class App extends Component {
 constructor(){
   super()
    this.state={
    hour:0,
    minute:0,
    second:0,
    started:false,
    interval:''
  }
}
  starthandler=()=>{
    
    if(!this.state.started) {
      this.setState({started:true});
      this.setState({interval:
        setInterval( ()=>{
      this.setState({second:this.state.second + 1})
      if(this.state.second===59){this.setState({second:0,minute:this.state.minute + 1})}
      if(this.state.minute===59){this.setState({second:0,minute:0, hour:this.state.hour + 1})}
            },1000) })
          }else{
            this.setState({started:false})
            clearInterval(this.state.interval)
          }
        }
  
  resethandler=()=>{
    this.setState({second:0,minute:0,hour:0})

  }
  render() {
    return (
      <div className="timer">
        <Timer 
              hour={this.state.hour}
              minute={this.state.minute} 
              second={this.state.second}
              start={this.starthandler}
              reset={this.resethandler}
              name={this.state.started}
         />
      </div>
    )
  }
}


export default App




