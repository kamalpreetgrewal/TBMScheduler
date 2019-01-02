import React, {Component} from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class ShiftTable extends Component {
	render() {
		const shiftItems = this.props.shiftObj;
		return(
			<BootstrapTable data={ shiftItems } striped condensed>
			 	<TableHeaderColumn row='0'>Shift available at: {shiftItems[0].shiftStation}</TableHeaderColumn>
				<TableHeaderColumn row='1' dataField='shiftNumber' isKey>Shift Number</TableHeaderColumn>
        		<TableHeaderColumn row='1' dataField='shiftDate'>Shift Date - Day</TableHeaderColumn>
        		<TableHeaderColumn row='1' dataField='shiftStartTime'>AM Shift</TableHeaderColumn>
        		<TableHeaderColumn row='1' dataField='shiftEndTime'>PM Shift</TableHeaderColumn>
			</BootstrapTable>
		);
	}
}

export default ShiftTable;