console.log('HI');
import 'babel-polyfill'; //ES^ to ES7
import React from 'react';
import {render} from 'react-dom';

import '../src/styles/style.css';//webpack can
// 	import '../styles/style.css';//webpack can
import "../node_modules/bootstrap/dist/css/bootstrap.min.css" ;


const Home = React.createClass({
	render: function() {
		return(
          <div className='jumbotron'> Hello ES5 Syntex </div>
		);
	}
 });

 const HomePage = React.createClass({
	render: function() {
		return(
		  <div className='jumbotron'> 
           <Home/>
          HomePage ES5 Syntex </div>
        );
	}
 });

render(<HomePage/>, document.getElementById('app'));

