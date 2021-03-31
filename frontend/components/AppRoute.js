// Dit wordt de automatische routing file die kijkt of de gebruiker 
// naar home (index.js) of login (login.js) gaat 
// 

import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Application from "../components/Application.js";
import Login from "../components/Login.js";
import ErrorMessage from "../components/ErrorMessage.js";
import PrivateRoute from './PrivateRoute'
import Dashboard from './Dashboard.js'
import {Button, ButtonToolbar} from 'rsuite';



class AppRoute extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayed_form: '',
      logged_in: localStorage.getItem('token') ? true : false,
      username: ''
    };
    // console.log('token is: ',  localStorage.getItem('token'), typeof localStorage.getItem('token'))
    // console.log('counts as logged in: ' + logged_in)
    
  }

  ComponentDidMount() {
    //if logged in, change username in state
    // naast naam aanmaken doet dit niets volgens mij. 
    // iets vergelijkbaars aanmaken om extra controle uit te voeren
    if (this.state.logged_in) {
      fetch('http://localhost:8000/scraper/current_user/', { 
        headers: {
          Authorization: `JWT ${localStorage.getItem('token')}`
        }
      })
        .then(res => res.json())
        .then(json => {
          this.setState({ username: json.username });
          this.setState({logged_in: true})
          console.log(json.username)
        });
        
      }
  }
  

  // signup not yet implemented
  // handle_signup = (e, data) => {
  //   e.preventDefault();
  //   fetch('http://localhost:8000/scraper/UserList/', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(data)
  //   })
  //     .then(res => res.json())
  //     .then(json => {
  //       localStorage.setItem('token', json.token);
  //       this.setState({
  //         logged_in: true,
  //         displayed_form: '',
  //         username: json.username
  //       });
  //     });
  // };  

  handle_logout = () => {
    localStorage.removeItem('token');
    this.setState({ logged_in: false, username: '' });
  };
  
 
  render(){
    return (
    <Router>
      <div>
          <div className='navbarStyle'>
            <ButtonToolbar>
              {/* {this.state.logged_in == true && <Link to="/"><Button>Home</Button></Link>}
              {this.state.logged_in == true && <Link to="/account"><Button>Account</Button></Link>} */}
              {this.state.logged_in == true && <Button onClick={this.handle_logout}>Logout</Button>}
            </ButtonToolbar>   
          </div>
        <PrivateRoute authed = {this.state.logged_in} exact path="/" component={Application}/>
        <Route handleLoginChange = {this.handleLoginChange} path="/login" component={Login} />
        <PrivateRoute authed = {this.state.logged_in} exact path="/dashboard" component={Dashboard} />
        {/* <Route component={ErrorMessage} /> */}
      </div>
    </Router>
  );
  }
}

export default AppRoute;