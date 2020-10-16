import React from 'react';
import { Container } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: '0'
    };
  }

  clear() {
    this.setState({
      result: '0'
    })
  }

  onClick = button => {
    switch (button) {
      case '=':
        this.calculate();
        break;
      case 'C':
        this.clear();
        break;
      default:
        this.setState({
          result: this.state.result + button
        });
        break;
    }
  }

  calculate() {
    let noZero = this.state.result.replace(/(^0+)|((?<=[*+-/])0+)|((?<=\.)[.])/g, '');
    let cleaned = noZero.replace(/([+*/]+)(?=[*/+])/, '');
    this.setState({
      // eslint-disable-next-line
      result: eval(cleaned)
    });
  }


  render() {
    return (
      <Container fluid>
        <div id="display-div" className="row justify-content-center">
          <p id="display" className="text-success col-xs-4 col-md-4 col-sm-4 border border-secondary rounded text-right">{this.state.result}</p>
        </div>
        <div id="buttons">
          <div className="row justify-content-center">
            <button id="clear" className='col-xs-4 col-md-4 col-sm-4 btn btn-danger' onClick={() => this.onClick("C")}>C</button>
          </div>
          <div className="row justify-content-center">
            <button id="zero" className='col-xs-3 col-md-1 col-sm-1 btn btn-outline-secondary' onClick={() => this.onClick("0")}>0</button>
            <button id="one" className='col-xs-3 col-md-1 col-sm-1 btn btn-outline-secondary' onClick={() => this.onClick("1")}>1</button>
            <button id="two" className='col-xs-3 col-md-1 col-sm-1 btn btn-outline-secondary' onClick={() => this.onClick("2")}>2</button>
            <button id="add" className='col-xs-3 col-md-1 col-sm-1 btn btn-outline-primary' onClick={() => this.onClick("+")}>+</button>
          </div>
          <div className="row justify-content-center">
            <button id="three" className='col-xs-3 col-md-1 col-sm-1 btn btn-outline-secondary' onClick={() => this.onClick("3")}>3</button>
            <button id="four" className='col-xs-3 col-md-1 col-sm-1 btn btn-outline-secondary' onClick={() => this.onClick("4")}>4</button>
            <button id="five" className='col-xs-3 col-md-1 col-sm-1 btn btn-outline-secondary' onClick={() => this.onClick("5")}>5</button>
            <button id="subtract" className='col-xs-3 col-md-1 col-sm-2 btn btn-outline-primary' onClick={() => this.onClick("-")}>-</button>
          </div>
          <div className="row justify-content-center">
            <button id="six" className='col-xs-3 col-md-1 col-sm-1 btn btn-outline-secondary' onClick={() => this.onClick("6")}>6</button>
            <button id="seven" className='col-xs-3 col-md-1 col-sm-1 btn btn-outline-secondary' onClick={() => this.onClick("7")}>7</button>
            <button id="eight" className='col-xs-3 col-md-1 col-sm-1 btn btn-outline-secondary' onClick={() => this.onClick("8")}>8</button>
            <button id="multiply" className='col-xs-3 col-md-1 col-sm-2 btn btn-outline-primary' onClick={() => this.onClick("*")}>X</button>
          </div>
          <div className="row justify-content-center">
            <button id="nine" className='col-xs-3 col-md-1 col-sm-1 btn btn-outline-secondary' onClick={() => this.onClick("9")}>9</button>
            <button id="decimal" className='col-xs-3 col-md-1 col-sm-1 btn btn-outline-secondary' onClick={() => this.onClick(".")}>.</button>
            <button id="equals" className='col-xs-3 col-md-1 col-sm-1 btn btn-outline-secondary' onClick={() => this.onClick("=")}>=</button>
            <button id="divide" className='col-xs-3 col-md-1 col-sm-2 btn btn-outline-primary' onClick={() => this.onClick("/")}>/</button>
          </div>
        </div>
      </Container>
    );
  }
}

export default App;

