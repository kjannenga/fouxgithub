import React from 'react';
import {BrowserRouter as Router} from "react-router-dom"
import Navbar from './navbar'
import Sidebar from './sidebar'
import Header from './header'
import Repos from './repos'
import './main.css'




export default React.createClass({
  render() {
    return (
   	<Router>
   	<div>

   	

      <nav className="navigation">
      	<Navbar />
      </nav>

      <div className="page">

      

      <header className="top">
      	<Header />
      </header>

	  <main className="body">
	  	<Repos />
	  </main>
	  
	  <aside className="side">
      	<Sidebar />
	  </aside>

	</div>

	 
















    </div>  
    </Router>
    )
  }
})