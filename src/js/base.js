var React = require("react");
var ReactDOM = require("react-dom");

const app = document.getElementById('app');

var FirstComp = React.createClass({
	
	render : function(){
		return (
			<div className="center">
			
				<h1>Suuuupppp!!!</h1>
				<p>React and webpack baby!!!!</p>
			
			</div>
		);
	}
	
})

ReactDOM.render(<FirstComp />, app)