import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const style = {
   			color: 'red'
   		}

const red = 'red';

class App extends Component {
	constructor() {
	    super();
			
	    this.state = {
	        data: 
	        [
	            {
	               "id":1,
	               "name":"Foo",
	               "age":"20"
	            },
					
	            {
	               "id":2,
	               "name":"Bar",
	               "age":"30"
	            },
					
	            {
	               "id":3,
	               "name":"Baz",
	               "age":"40"
	            }
         	],
         	stuff: "This is from state: stuff",
         	header: "Header from App state",
         	data2:[]
      	}

      	this.setStateHandler = this.setStateHandler.bind(this);
      	this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
      	this.findDomNodeHandler = this.findDomNodeHandler.bind(this);
   	};

   	setStateHandler() {
   	    var item = "setState...";
   	    var myArray = [...this.state.data2, item];
	    this.setState({data2: myArray});
   	};

   	forceUpdateHandler(){
   		this.forceUpdate();
   	};

   	findDomNodeHandler(){
   		var myDiv = document.getElementById('myDiv');
   		ReactDOM.findDOMNode(myDiv).style.color = "green";
   	}

   render() {
   		
      return (
         <div>
            <h1 style={style}>Header</h1>
            <p>{this.state.stuff}</p>
            <Header class={red} header={this.state.header}/>
            <Content />
            {/* These are comments...*/ }
            <table>
            	<tbody>
            		{this.state.data.map((person, i) =>
            			<TableRow key = {i} data = {person} />
        			)}
            	</tbody>
            </table>
            <hr />

            <button onClick={this.setStateHandler}>SET STATE</button>
            <h4>State Array: {this.state.data2}</h4>
            <hr />

            <button onClick={this.forceUpdateHandler}>FORCE UPDATE</button>
            <h4>Random Number: {Math.random()}</h4>
            <hr />

            <button onClick = {this.findDomNodeHandler}>FIND DOM NODE</button>
            <div id='myDiv'>NODE</div>
         </div>
      );
   }
}

class Header extends Component {

	render() {
		return (
			<h1 className={this.props.class}>{this.props.header}</h1>
		);
	}
}

class Content extends Component {

	render() {
		return (
			<p>Content</p>
		);
	}
}

class TableRow extends React.Component {
   render() {
      return (
         <tr>
            <td>{this.props.data.id}</td>
            <td>{this.props.data.name}</td>
            <td>{this.props.data.age}</td>
         </tr>
      );
   }
}

export default App;