import React from 'react';
import { render } from 'react-dom'
import Booking from './Booking'

render(
	<Booking people="5" from="20" to="22" cash="300" />, 
	document.getElementById('root')
)