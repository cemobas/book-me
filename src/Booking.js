import React from 'react'

class Booking extends React.Component {

	state = {
		tip: false
	}
	
	toggleTip = () => {
		this.setState(prevState => ({
			tip: !prevState.tip
		}))
	}
	
	calculateTip = (cash) => {
		if(cash < 50)
			return cash * 0.05
		else
			return cash * 0.1
	}

	render() {
		const { unit="3", people, from, to, cash } = this.props
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
					<button onClick={this.toggleTip}>{this.state.tip ? "Cancel tip" : "Add tip" }</button>
					<p>Tip: {this.state.tip ? this.calculateTip(cash) : "no tip" }</p>
				</div>
			</section>
		)
	}
}

export default Booking