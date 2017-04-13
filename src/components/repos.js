import React from 'react'
import {getRepo} from '../api/jsonData'
import store from '../api/store'
import "./repos.css"








export default React.createClass({
    getInitialState(){
        return{
            repo:[],

        }
    },


    componentWillMount(){
        this.unsubscribe = store.subscribe(()=>{
            const appState = store.getState()
            this.setState({
                repo:appState.repo,
            })
        })
        getRepo()
    },

    componentWillunMount(){
        this.unsubscribe()
    },

    render(){
        return(
          <div className="reposit">
                    {this.state.repo.map(repo=>(
                    <div key={'repo' + repo.id} className="repo">
                      <h3 className="title"><a href={repo.svn_url}>{repo.name}</a></h3>
                      <div  >
                          <ul className="repolist">
                            <li>{repo.language}</li>
                            <li>{repo.forks_count}</li>
                            <li>updated at {repo.updated_at}</li>
                          </ul>
                      </div>
                      <hr/>
                    </div>
                    
                     ))}

                    </div>
      )
    }
})
 