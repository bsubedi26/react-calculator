// Include the Main React Dependencies
var React = require('react');
var ReactDOM = require('react-dom');

var Calc = require('./Components/Calc');

// This code here allows us to render our main component (in this case "Main")
ReactDOM.render(
	<Calc />,
	document.getElementById('app')
)