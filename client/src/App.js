import React from 'react';
import {connect} from 'react-redux'
import { BrowserRouter, Link, Route } from 'react-router-dom';
import Register from './components/user/Register'
import Login from './components/user/Login'
import _ from 'lodash'
import NavBar from './components/common/NavBar'
import Account from './components/user/Account'
import Logout from './components/user/Logout';
//import './App.css'
import EventsList from './components/events/list'
import CategoriesList from './components/categories/list'
function App(props) {
	return (
	  
	<BrowserRouter>
	<NavBar/>
			<Route path="/register" component={Register} exact={true} />
			<Route path="/" component={CategoriesList} exact={true} />
			<Route path="/" component={EventsList} exact={true}/>
			<Route path="/login" component={Login} exact={true}/>
			<Route path="/account" component={Account} exact={true}/>
			<Route path="/logout" component={Logout} exact={true} />
			
    </BrowserRouter>
      )
		}
const mapStateToProps = (state)=>{
	return{
		user: state.user
	}
}

export default connect(mapStateToProps)(App);


// {
// 	!_.isEmpty(props.user) ?
// 	(<div>
// 		<ul>
// 			<li><Link to="/profile">Profile</Link> </li>
// 			<li><Link to="/events">Events</Link></li>
// 			<li><Link to="/logout">logout</Link></li>
// 		</ul>
// 	</div>
// 	) : (
// 			<div> 
// 					<Link to="/user/register">register</Link> 
// 					<Link to="/login">login</Link>
// 			</div>
// 		)
// }