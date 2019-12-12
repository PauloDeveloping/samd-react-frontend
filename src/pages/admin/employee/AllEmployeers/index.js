import React from 'react'
import api from '../../../../services/api'
import './index.css'
import SamdTable from '../../../../components/SamdTable'

export default class AllEmployeers extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			loading: true,
			data: []
		}

		this.columns = [{
			dataField: 'user_tbl.user_rm',
			text: 'RM'
		}, {
			dataField: 'user_tbl.user_full_name',
			text: 'Nome'
		}, {
			dataField: 'user_tbl.user_email_inst',
			text: 'Email'
		}, {
			dataField: 'user_tbl.user_cel',
			text: 'Celular'
		}, {
			dataField: 'empl_id',
			text: 'Opções',
			formatter: this.optionsFormatter
		}]
	}

	optionsFormatter(value, row, index) {
		return (
			<div className="table-buttons">
				<button className="btn btn-info btn-sm">DETALHES</button>
				<button className="btn btn-warning btn-sm">EDITAR</button>
				<button className="btn btn-danger btn-sm">DESATIVAR</button>
			</div>
		);
	}

	componentDidMount() {

		api.get('/admin/allEmployeers').then(response => {


			const data = response.data
			if (data !== '0') {
				this.setState({ data, loading: false })
			}


		})

	}

	render() {
		return (
			<>
			<a href="/admin/funcionarios/novo"><button className="btn btn-success mt-4 mb-4">Adicionar novo funcionário</button></a>
			<SamdTable columns={this.columns} data={this.state.data} keyField='empl_id' />
			</>
		)
	}

}
