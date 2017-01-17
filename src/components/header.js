import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Header extends Component {

  renderLinks(){

    if(this.props.authenticated){
      return <li className="nav-item">
                <Link className="nav-link" to="/signout" key='header-signout'>Sign Out</Link>
             </li>;
    }else{
      return [<li className="nav-item" key='header-signin'>
                <Link className="nav-link" to="/signin">Sign In</Link>
              </li>,
              <li className="nav-item" key='header-signup'>
                <Link className="nav-link" to="/signup">Sign Up</Link>
              </li>,
              ];
    }
  }

  render() {
    return (
      <nav className="navbar navbar-default">
        <Link to='/' className="navbar-brand">Redux Auth</Link>
      	<ul className="nav navbar-nav">
      		<li className="nav-item">
      			<Link to='/feature' className="nav-link" >Feature</Link>
      		</li>
      		{this.renderLinks()}

      	</ul>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated
  };
}


export default connect(mapStateToProps)(Header);