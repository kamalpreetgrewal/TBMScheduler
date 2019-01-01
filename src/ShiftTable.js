import React, {Component} from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

class ShiftTable extends Component {
	constructor(props) {
		super(props);
		console.log(this.props);
	}
	render() {
		const shiftItems = this.props.shiftObj;
		console.log("hello");
		return(
			<BootstrapTable data={ shiftItems } striped hover condensed>
				<TableHeaderColumn dataField='shiftNumber' isKey>Shift Number</TableHeaderColumn>
        		<TableHeaderColumn dataField='shiftStartDate'>Shift Date - Day</TableHeaderColumn>
        		
			</BootstrapTable>
		);
	}
}

export default ShiftTable;