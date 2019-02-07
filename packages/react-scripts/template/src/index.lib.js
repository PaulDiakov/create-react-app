import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

 export default {
    render: (selector) => {
        ReactDOM.render(<App />, document.getElementById(selector));
    },
    unmount: (selector) => {
    	const el = document.getElementById(selector);

     	if (el !== null) {
    		ReactDOM.unmountComponentAtNode(el);
    	}
    }
}