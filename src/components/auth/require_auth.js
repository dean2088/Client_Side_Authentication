import React, { Component } from 'react';
import { connect } from 'react-redux';

export default function(ComposedComponent){

	class Authentication extends Component {

		static contextTypes = {
			router: React.PropTypes.object
		}

		componentWillMount(){
			if( !this.props.authenticated){
				this.context.router.push('/');
			}
		}

		componentWillUpdate(nextProps){
			if(!nextProps.authenticated){
				this.context.router.push('/');
			}
		}

		render(){
			//console.log('Rendering', this.props.authenticated,this.context);
			return <ComposedComponent {...this.props} />
		}
	}

	function mapStateToProps(state){
		return {authenticated: state.auth.authenticated };
	}

	return connect(mapStateToProps)(Authentication);

}


/*
// In some other location...Not in this file...
// We want to use this HOC

import Authentication // This is my HOC
import Resource // This is the component I want to wrap

const ComposedComponent = Authentication(Resources);

//In some render method...
<ComposedComponent />
*/