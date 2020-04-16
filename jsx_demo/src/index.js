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
const App = function() {
    return <div>Hellasdfo!!!</div>;
}

// Take the react component and show it on the screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);