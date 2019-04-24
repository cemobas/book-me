import React from 'react';
import { render } from 'react-dom'

let bookingData = {
    unit: 3,
    people: 5,
    from: 20,
    to: 22,
    cash: 300
}

const calculateTip = (cash) => {
    if(cash<50)
        return cash * 0.05
    else
        return cash * 0.1
}


const Booking = ({unit, people, from, to, cash}) => {
	return (
		<section>
				<div>
					<p>Table No: {unit}</p>
				</div>
				<div>
					<p>People: {people}</p>
				</div>
				<div>
					<p>From: {from}:00</p>
				</div>
				<div>
					<p>To: {to}:00</p>
				</div>
				<div>
					<p>Cash: {cash}</p>
				</div>
				<div>
					<p>Tip: {calculateTip(cash)}</p>
				</div>
		</section>
	)
}

render(
	<Booking 
		unit={bookingData.unit}
		people={bookingData.people}
		from={bookingData.from}
		to={bookingData.to}
		cash={bookingData.cash}/>, 
	document.getElementById('root')
)