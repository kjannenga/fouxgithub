import React from 'react';
import {getUser} from '../api/jsonData';
import store from '../api/store'
import './sidebar.css'







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

    render(){
        return(
            <div className="sidebar">

              <img src={this.state.user.avatar_url} alt={this.state.user.login+'selfie'}/>

              <div className="name">{this.state.user.name}</div>
              <div className="login">{this.state.user.login}</div>
              <div className="bio">{this.state.user.bio}</div>
              <hr/>
              <div className="location">{this.state.user.location}</div>
              <hr/>
              <div className="Organizations">Organizations</div>
                
            </div>
            

      )
    }
})
 