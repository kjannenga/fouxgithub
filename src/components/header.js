import React from 'react';
import {getUser} from '../api/jsonData'
import store from '../api/store'
import './header.css'


export default React.createClass({
    getInitialState(){
        return{
            user:[],

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

    render(){
        return(
          <div >
             <ul className="headList">
              <li>Overview </li>
              <li>Repositories {this.state.user.public_repos}</li>
              <li>Stars </li>
              <li>Followers {this.state.user.followers}</li>
              <li>Following {this.state.user.following}</li>
            </ul>
            <hr />
            <div className="form">
            <form>
              <input type="search" className="searchbar" placeholder="Search repositories..."/>
              <select className="type" name="type">
                <option value="All">All</option>
                <option value="Public">Public</option>
                <option value="Private">Private</option>
                <option value="Sources">Sources</option>
                <option value="Forks">Forks</option>
                <option value="Mirrors">Mirrors</option>
              </select>
              <select className="language">
                <option  value="All">All</option>
                <option value="CSS">CSS</option>
                <option value="HTML">HTML</option>
                <option value="JavaScript">JavaScript</option>
              </select>
              <button type="button">New</button>

            </form>
          </div>
          </div>

            

      )
    }
})
 