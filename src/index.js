import React from 'react';
import { render } from 'react-dom'
import Booking from './Booking'

/* ReactDOM renders DOM elements backed by instances of their components. This is true for class components. For function components, ReactDOM renders just DOM elements. Function components do not have instances (that can be accessed with this), so when using a function component, ReactDOM renders a DOM element generated from the function’s returned element. */
render(
	<Booking people="2" from="20" to="22" cash="300" />, 
	document.getElementById('root')
)