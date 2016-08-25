var React = require('react');
// result component that is used in the Calc.js file
// this.props are the values that is passed in from the parent (Calc.js) file
var Result = React.createClass({
  render: function() {
    return (
         <div className="col-lg-6">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title">Result</h3>
                    </div>
                    <div className="panel-body">
                        
                        <h1 id="firstNumber">{this.props.first}</h1>
                        
                        <h1 id="operator">{this.props.operator}</h1>
                        
                        <h1 id="secondNumber">{this.props.second}</h1>
                        
                        <hr></hr>
                        <h1 id="result">{this.props.result}</h1>
                    </div>
                </div>    
            </div>
    );
  }
});

module.exports = Result;