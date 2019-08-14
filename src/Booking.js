import React from 'react'
import PropTypes from 'prop-types'

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

/* Every component gets a special instance property called props that holds all values passed to that component’s element when it was instantiated. Unlike function components, the render function in class-based components does not receive any arguments. Also function components don't have state, but class components do. */
class Booking extends React.Component {

	guestList = [{"name": "Ewa", "gender": "F"}, {"name": "Cem", "gender": "M"}];

	constructor(props) {
		super(props);
		this.date = Date(Date.now());
	}

	/** This is no different than setting state in the constructor.
	 * State is what DOM watches the changes on. Here tip value updates the front-end with a switch.
	 */
	state = {
		tip: false
	}

	/* Lifecycle methods are essentially escape hatches. If you are not doing anything special, you can create full applications without them. They are very handy for analyzing what is going on in the application and for further optimizing the performance of React updates. */
	componentWillUpdate() {
		console.log('React computes the new rendered output and compares it with the last rendered output.')
	}
	componentDidUpdate() {
		console.log('If there is a difference, React takes that difference to the browser and update process happens.')
	}

	/** Using third party plugins, we may need to watch the mount/unmounting of our components (in the DOM) on the browser.*/
	componentDidMount() {
		console.log('Component is mounted.');
	}
	componentWillUnmount() {
		console.log('Component is unmounted.');
	}
	
	toggleTip = () => {
		this.setState(prevState => ({
			tip: !prevState.tip
		}))
	}
	
	calculateTip = (cash) => {
		if(cash < 50) {
			this.date = Date(Date.now());
			return cash * 0.05;
		} else {
			this.date = Date(Date.now());
			return cash * 0.1;
		}
	}

	render() {
		const { user, unit=3, people, from, to, cash } = this.props
		return (
			<section>
				<div>
					<p>Table No: {unit}</p>
				</div>
				<div>
					<Guests guestList={this.guestList} />
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
				<div>
					<p>Cash: {cash}</p>
				</div>
				<div>
					{/* This is equivalent to the ${} interpolation syntax in JavaScript template literals. This is the only constraint inside JSX: Only expressions. For example, you cannot use a regular if-statement, but a ternary expression is okay. JavaScript variables are also expressions. */}
					<button onClick={this.toggleTip}>{this.state.tip ? "Cancel tip" : "Add tip" }</button>
					<p>Tip: {this.state.tip ? this.calculateTip(cash) : "no tip" }</p>
					<Koniec name={user.name} gender={user.gender} text="Your booking has been confirmed."/>
				</div>
				<div style={ { fontSize: 10, color:'yellow', backgroundColor:'navy' } }>
					Date: {this.date}
				</div>
			</section>
		)
	}
}

Booking.propTypes = {
	user: PropTypes.object,
	unit: PropTypes.number,
	people: PropTypes.number,
	from: PropTypes.number,
	to: PropTypes.number,
	cash: PropTypes.number
}

export default Booking