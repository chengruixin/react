// Import the React and ReactDOM libraries
// ES2015 Module system
import React from 'react';
import ReactDOM from 'react-dom';

// CommonJS Module system
/*  They can be done by:
    const React = require('react');
    const ReactDOM = require('react-dom');
*/


// Create a react component
// function-based component
const App = () => {
    const buttonText = 'Clickasdfas me!';
    const getButtonText = () => {
        return "helo changed!";
    }
    //return <div>Hellasdfo!!!</div>;
    return (
        <div style={{border:'1px solid black', width:'50%'}}>
            <label className="dontKnow" htmlFor="nafame">input here:</label>
            <input id='name' type='text'/>
            <button style={{backgroundColor: 'red', color:'white'}}>
                {/* {buttonText} */ getButtonText()}
            </button>
        </div>
    );
    //more information about translation to html can be found on "babeljs.io/repl"
}

// Take the react component and show it on the screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);