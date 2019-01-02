import React, {Component} from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class ShiftTable extends Component {
	render() {
		const shiftItems = this.props.shiftObj;
		return(
			<BootstrapTable data={ shiftItems }>
				<TableHeaderColumn dataField='shiftNumber' isKey>Shift Number</TableHeaderColumn>
        		<TableHeaderColumn dataField='shiftDate'>Shift Date - Day</TableHeaderColumn>
        		<TableHeaderColumn dataField='shiftStartTime'>AM Shift</TableHeaderColumn>
        		<TableHeaderColumn dataField='shiftEndTime'>PM Shift</TableHeaderColumn>
			</BootstrapTable>
		);
	}
}

export default ShiftTable;