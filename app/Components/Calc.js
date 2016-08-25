var React = require('react');
// import result component to include in this component
var Result = require('./Result');
// Main class
var Calc = React.createClass({
	getInitialState: function() {
		return {
			num1: "",
			num2: "",
			operator: "",
			result: ""
		}
	},
	// executed function when a number is clicked
	numberClick: function(event) {
		if (this.state.num1 === "") {
		this.setState({
			num1: event.target.value
		})
		}
		// If number 1 has a value stored then store the number into number 2
		if (this.state.num1 !== "") {
			this.setState({
				num2: event.target.value
			})
		}
	},
	// executed function when an operator is clicked
	operatorClick: function(event) {
		this.setState({
			operator: event.target.value
		})
		console.log(this.state)
	},
	// executed function to calculate the equation (when equal sign is clicked)
	operation: function() {
		console.log(this.state)
		if (this.state.num1 !== "" && this.state.num2 !== "" && this.state.operator !== "") {
			if (this.state.operator === 'plus') {
				var add = parseInt(this.state.num1) + parseInt(this.state.num2)
				this.setState({
					result: add
				})
			}
			if (this.state.operator === 'minus') {
				var minus = parseInt(this.state.num1) - parseInt(this.state.num2)
				this.setState({
					result: minus
				})
			}
			if (this.state.operator === 'times') {
				var times = parseInt(this.state.num1) * parseInt(this.state.num2)
				this.setState({
					result: times
				})
			}
			if (this.state.operator === 'divide') {
				var divide = parseInt(this.state.num1) / parseInt(this.state.num2)
				this.setState({
					result: divide
				})
			}
			if (this.state.operator === 'power') {
				var first = parseInt(this.state.num1)
				var second = parseInt(this.state.num2)
				var power = Math.pow(first, second)
				this.setState({
					result: power
				})
			}
		}
	},
	// clear out all the values from the state
	clearClick: function() {
		this.setState({
			num1: "",
			num2: "",
			operator: "",
			result: ""
		})
	},
	// main class render function
	render: function() {
		return (
				<div className="container">
					<div className="jumbotron">
					    <h1 className="text-center">React Calculator</h1>
					    <h3 className="text-center">Perform basic mathematic operations using the power of React!</h3>
					</div>
					<div className="container">
					    <div className="row">
					        <div className="col-lg-4">
					            <div className="panel panel-default">
					                <div className="panel-heading">
					                    <h3 className="panel-title">React Calculator</h3>
					                </div>
					                <div className="panel-body">
					                <button id="button1" className="btn btn-primary number" onClick={this.numberClick} value="1">1</button>
					                <button id="button2" className="btn btn-primary number" onClick={this.numberClick} value="2">2</button>
					                <button id="button3" className="btn btn-primary number" onClick={this.numberClick} value="3">3</button>
					                <button id="buttonPlus" className="btn btn-danger operator" onClick={this.operatorClick} value="plus">+</button>
					                <br></br><br></br>
					                <button id="button4" className="btn btn-primary number" onClick={this.numberClick} value="4">4</button>
					                <button id="button5" className="btn btn-primary number" onClick={this.numberClick} value="5">5</button>
					                <button id="button6" className="btn btn-primary number" onClick={this.numberClick} value="6">6</button>
					                <button id="buttonMinus" className="btn btn-danger operator" onClick={this.operatorClick} value="minus">-</button>
					                <br></br><br></br>
					                <button id="button7" className="btn btn-primary number" onClick={this.numberClick} value="7">7</button>
					                <button id="button8" className="btn btn-primary number" onClick={this.numberClick} value="8">8</button>
					                <button id="button9" className="btn btn-primary number" onClick={this.numberClick} value="9">9</button>
					                <button id="buttonMultiply" className="btn btn-danger operator" onClick={this.operatorClick} value="times">x</button>
					                <br></br><br></br>
					                <button id="button0" className="btn btn-primary number" onClick={this.numberClick} value="0" value="0">0</button>
					                <button id="buttonDivide" className="btn btn-danger operator" onClick={this.operatorClick} value="divide">/</button>
					                <button id="buttonPower" className="btn btn-danger operator" onClick={this.operatorClick} value="power">^</button>
					                <button id="buttonEqual" className="btn btn-success equal" onClick={this.operation} value="equals">=</button>
					                <br></br><br></br>
					                <button id="buttonClear" className="btn btn-default clear" onClick={this.clearClick} value="clear">clear</button>
					            </div>
					            </div>
					        </div>
					        <Result first={this.state.num1} second={this.state.num2} operator={this.state.operator} result={this.state.result}/>
					    </div>
					</div>
				</div>
			)
	}
})

module.exports = Calc;
