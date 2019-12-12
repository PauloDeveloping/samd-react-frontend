import React from 'react'
import api from '../../../../services/api'
import './index.css'
import SamdTable from '../../../../components/SamdTable'

export default class ServiceRequest extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			loading: true,
			data: []
		}

		this.columns = [{
			dataField: 'svcreq_id',
			text: 'Id. Solicitação'
		}, {
			dataField: 'user_full_name',
			text: 'user_full_name'
		}, {
			dataField: 'req_date',
			text: 'Solicitado em'
		}, {
			dataField: 'svc_name',
			text: 'Solicitante'
		}, {
			dataField: 'svc_desc',
			text: 'Descrição'
		}, {
			dataField: 'estatus',
			text: 'Opções',
			formatter: this.optionsFormatter
		}]
	}

	handleStatusClick(event, value, row, index) {

	}

	handleEditClick(event, value, row, index) {

	}

	optionsFormatter(value, row, index) {

		return (
			<div className="table-buttons">
				<button className="btn btn-primary btn-sm" onClick={e => this.handleStatusClick(e, value, row, index)}>VER</button>
				<button className="btn btn-warning btn-sm" onClick={e => this.handleEditClick(e, value, row, index)}>EDITAR</button>
				<button className="btn btn-danger btn-sm">DESATIVAR</button>
			</div>
		)
	}

	componentDidMount() {

		api.get('/admin/serviceRequest').then(response => {
			console.log(response.data)
			const data = response.data
			if(data !== '0') {
				this.setState({data, loading: false})
			}

		})

	}

	render() {
		if (this.state.loading) {
			return 'Loading'
		}

		return (

			<SamdTable columns={this.columns} data={this.state.data} keyField='svcreq_id' />

		);
	}
}
