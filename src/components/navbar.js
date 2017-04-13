import React from 'react';
import octocat from "./images/ocotocat.png"
import "./navbar.css"
import {getUser} from '../api/jsonData';
import store from '../api/store'








export default React.createClass({
    getInitialState(){
        return{
            user:[]
        }
    },


    componentWillMount(){
        this.unsubscribe = store.subscribe(()=>{
            const appState = store.getState()
            this.setState({
                user:appState.user,
            })
        })
        getUser()
    },

    componentWillunMount(){
        this.unsubscribe()
    },





  render() {
    return (

      <div> 
   
   	<div className="navbar">

      	<img className="octocat" src={octocat} alt="octocat" />

      	<form >
      		<input className="search" type="search" className="search" placeholder="Search GitHub"/>
      	</form>

      	<ul className="list">
      		<li><a href="#">Pull Requests</a></li>
      		<li><a href="#">Issues</a></li>
      		<li><a href="#">Gist</a></li>
      	</ul>

      	<p>+</p>
        <img className="headerimg" src={this.state.user.avatar_url} alt={this.state.user.login+'selfie'}/>
      	</div>

        </div>

    
    )
  }
})
