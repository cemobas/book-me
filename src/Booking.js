import React from 'react'

class Booking extends React.Component {

	calculateTip = (cash) => {
		if(cash < 50)
			return cash * 0.05
		else
			return cash * 0.1
	}

	render() {
		const { unit, people, from, to, cash } = this.props
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
					<p>Tip: {this.calculateTip(cash)}</p>
				</div>
			</section>
		)
	}
}

export default Booking