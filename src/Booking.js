import React from 'react'

const NameDisplay = ({name, gender}) => (
	<span>
		{gender === 'M' ? "Mr. " : "Ms. "} {name}
	</span>
)

const Koniec = ({name, gender, text}) => (
	/* Try to delete <div>, it won't work. */
	<div>
		{text}<br/>
		{/* You can even use a React element inside JSX, because that too is an expression. Remember, a React element is just a function call. If no gender is blank, no greeting statement will be displayed. (Try erasing M in gender.) */}
		Greetings { gender && <NameDisplay name={name} gender={gender}/> }
	</div>
)

const Guests = ({guestList}) => (
	<div>
		<u>Guests:</u><br/>
			{
				guestList.map((guest, i) =>  {
					return (
						<span key={i}>
							{i+1}. <NameDisplay name={guest.name} gender={guest.gender} /><br/>
						</span>
					)
				})
			}
	</div>
)

/* Every component gets a special instance property called props that holds all values passed to that component’s element when it was instantiated. Unlike function components, the render function in class-based components does not receive any arguments. */
class Booking extends React.Component {

	state = {
		name: "Cem",
		gender: "M",
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
					<Guests guestList={[{"name": "Ewa", "gender": "F"}, {"name": "Cem", "gender": "M"}]} />
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
				{ /* Sometimes we use a JavaScript object inside curly brackets to pass a CSS style object to the special style attribute in React. */}
				<div style={ { color:'yellow', backgroundColor:'navy' } }>
					<p>Cash: {cash}</p>
				</div>
				<div>
					{/* This is equivalent to the ${} interpolation syntax in JavaScript template literals. This is the only constraint inside JSX: Only expressions. For example, you cannot use a regular if-statement, but a ternary expression is okay. JavaScript variables are also expressions. */}
					<button onClick={this.toggleTip}>{this.state.tip ? "Cancel tip" : "Add tip" }</button>
					<p>Tip: {this.state.tip ? this.calculateTip(cash) : "no tip" }</p>
					<Koniec name={this.state.name} gender={this.state.gender} text="Your booking has been confirmed."/>
				</div>
			</section>
		)
	}
}

export default Booking