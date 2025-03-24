import React, { Component } from 'react'

 class forms2 extends Component {
  constructor(props){
    super(props)
    this.state ={
      username :'',
      comments : '',
    }
  }
  handledUsernameChange=(event) =>{
    this.setState({
      username : event.target.value
      //comments : event.target.value
    })

  }
  handledComments=(event) =>{
    this.setState({
      comments : event.target.value
      //comments : event.target.value
    })

  }
  handledTopics=(event) =>{
    this.setState({
      topics : event.target.value
      //comments : event.target.value
    })

  }
  handledSubmit=(event) =>{
    alert(`${this.state.username} ${this.state.comments} ${this.state.topics}`)

  }
  render() {
    return (
    <form onSubmit={this.handledSubmit}>
        <div>
            <label>Username</label>
            <input type="text" value={this.state.username} onChange={this.handledUsernameChange}></input>
        </div>
        <div>
            <label>Comments</label>
           <textarea value={this.state.comments} onChange={this.handledComments}></textarea>
        </div>
        <div>
        <label>Topics</label>
        <input type="text" value={this.state.topics} onChange={this.handledTopics}></input>
        </div>
        <button type='submit'>Submit Now</button>
    </form>
    )
  }
}

export default forms2