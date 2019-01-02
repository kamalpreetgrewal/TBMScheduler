import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import ShiftTable from './ShiftTable';
import 'react-datepicker/dist/react-datepicker.css';

class InputField extends React.Component {
	render() {
		return (
			<label>
				{this.props.name}
				<input type={this.props.type} onChange={this.props.onChange}
				value={this.props.value} name={this.props.name} />
			</label>
		);
	}
}

class ShiftForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			shiftDate: this.shiftDate,
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
			["shift" + event.target.name]: event.target.value
		});
	}

	handleSubmit(event) {
		event.preventDefault();
		let shiftObj = [...this.state.shiftObj]

		shiftObj.push({
			shiftDate: this.state.shiftDate.toDateString(),
			shiftStation: this.state.shiftStation,
			shiftStartTime: Number(this.state.shiftStartTime.split(":")[0]) <= 11 ?
							this.state.shiftStartTime + "-" + this.state.shiftEndTime : '',
			shiftEndTime: Number(this.state.shiftStartTime.split(":")[0]) >= 12 ?
							this.state.shiftStartTime + "-" + this.state.shiftEndTime : '',
			shiftNumber: this.state.shiftNumber
		});

		this.setState({
			shiftObj,
			shiftDate: this.shiftDate,
			shiftStation: '',
			shiftStartTime: '',
			shiftEndTime: '',
			shiftNumber: '',
			showShiftTable: true
		});
	}

	render() {
		return (
		<div>
			<form onSubmit={this.handleSubmit}>
				<h2>Shift Details</h2>
				<label>
					Shift Date
				<DatePicker 
					selected={this.state.shiftDate}
					onChange={this.handleDate}
					placeholderText="Click to select a date"
				/>
				</label><br/>
				<InputField name="Number" type="number" value={this.state.shiftNumber}
							onChange={this.handleChange}/><br/>
				<InputField name="Station" type="text" value={this.state.shiftStation}
							onChange={this.handleChange}/><br/>
				<InputField name="StartTime" type="time" value={this.state.shiftStartTime}
							onChange={this.handleChange}/><br/>
				<InputField name="EndTime" type="time" value={this.state.shiftEndTime}
							onChange={this.handleChange}/><br/>
				<button type="submit" value="Submit">Add Shift</button>
			</form>
			{this.state.showShiftTable && <ShiftTable shiftObj={this.state.shiftObj}/>}
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