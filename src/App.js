import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import ShiftTable from './ShiftTable';
import 'react-datepicker/dist/react-datepicker.css';

class InputField extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<label>
				Shift {this.props.name}
				<input type={this.props.type} onChange={this.props.onChange}
				value={this.props.value} />
			</label>
		);
	}
}

class ShiftForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			shiftDate: new Date(),
			shiftStation: '',
			shiftStartTime: '',
			shiftEndTime: '',
			shiftNumber: '',
			shiftObj: [],
			showShiftTable: false
		};
		this.handleDate = this.handleDate.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleDate(date) {
		this.setState({
			shiftDate : date
		});
	}

	handleChange(event) {
		this.setState({
		   	[event.target.name]: event.target.value
		});
	}

	handleSubmit(event) {
		event.preventDefault();
		let shiftObj = [...this.state.shiftObj]

		shiftObj.push({
			shiftDate: this.state.shiftDate,
			shiftStation: this.state.shiftStation,
			shiftStartTime: this.state.shiftStartTime,
			shiftEndTime: this.state.shiftEndTime,
			shiftNumber: this.state.shiftNumber
		})

		this.setState({
			shiftObj,
			shiftDate: new Date(),
			shiftStation: '',
			shiftStartTime: '',
			shiftEndTime: '',
			shiftNumber: ''
		});
	}

	render() {
		return (
		<div>
			<form>
				<h2>Shift Details</h2>
				<label>
					Shift Date
				<DatePicker 
					selected={this.state.shiftDate}
					onChange={this.handleDate}
					placeholderText="Click to select a date"
				/>
				</label><br/>
				<InputField name="Station" type="text" onChange={this.handleChange}
							value={this.props.shiftStation}/><br/>
				<InputField name="Start Time" type="time" onChange={this.handleChange}
							value={this.props.shiftStartTime}/><br/>
				<InputField name="End Time" type="time" onChange={this.handleChange}
							value={this.props.shiftEndTime}/><br/>
				<InputField name="Number" type="number" onChange={this.handleChange}
							value={this.props.shiftNumber}/><br/>
				<button type="submit" value="Submit">Add Shift</button>
			</form>
			</div>
		);
	}
}

class App extends Component {
  render() {
    return (
      <div className="App">
      	<ShiftForm/>
      </div>
    );
  }
}

export default App;