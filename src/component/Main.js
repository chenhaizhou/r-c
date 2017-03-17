import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';
import UserList from './UserList';

class Main extends Component {
	constructor(props) {
        super(props);
        this.state = {
        	list: []
        }
    }
componentDidMount() {
	
	/*fetch('http://location-service.rea.global/v2/suggest?where=mel&country=au', {
		mode: 'no-cors',
		dataType: 'text',
        headers: {
            'Content-Type': 'application/text',
        	'Accept': 'application/text',
        	'Access-Control-Allow-Origin': '*'
        }   
	})*/
	fetch('http://localhost:8080/api/data.json')
    .then(function(response) {
        if (response.status >= 400) {
            throw new Error("Bad response from server");
        }
        console.log(response, 'jjjjj')
        return response.json();
    })
    .then((stories) => {
    	this.setState({
    		list: stories
    	})
        console.log(stories, '11');
    });
}

  render() {
    return (
      <section className="main">
        <div className="hero"></div>
        <UserList list={this.state.list} />
      </section>
      )
  }
}

export default Main;