import React, {Component} from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';

class ShiftTable extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		const shiftItems = this.props.shiftObj;
		return(
			<BootstrapTable data={ shiftItems }>
				<TableHeaderColumn dataField='shiftNumber' isKey>Shift Number</TableHeaderColumn>
        		<TableHeaderColumn dataField='shiftDate'>Shift Date - Day</TableHeaderColumn>
			</BootstrapTable>
		);
	}
}

export default ShiftTable;