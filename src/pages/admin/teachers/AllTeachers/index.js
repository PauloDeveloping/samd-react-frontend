import React from 'react'
import api from '../../../../services/api'
import './index.css'
import SamdTable from '../../../../components/SamdTable'

export default class AllTeachers extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			loading: true,
			data: []
		}
	}

	componentDidMount() {

		api.get('/admin/allTeachers').then(response => {

			const data = response.data
			console.log('data', data)
			if (data !== '0') {
				this.setState({ data, loading: false })
			}

		})

	}

	render() {

		const columns = [{
			dataField: 'tchr_id',
			text: 'Id. Professor'
		}, {
			dataField: 'user_tbl.user_full_name',
			text: 'Nome'
		}, {
			dataField: 'user_tbl.user_email_inst',
			text: 'Email'
		}, {
			dataField: 'user_tbl.user_cel',
			text: 'Upado em'
		},  {
			dataField: 'user_tbl.estatus',
			text: 'Opções',
			formatter: optionsFormatter
		}]

		function optionsFormatter(value, row, index) {

			return (
				<div className="table-buttons">
					<button className="btn btn-primary btn-sm" onClick={e => handleStatusClick(e, value, row, index)}>VER</button>
					<button className="btn btn-warning btn-sm" onClick={e => handleEditClick(e, value, row, index)}>EDITAR</button>
					<button className="btn btn-danger btn-sm">DESATIVAR</button>
				</div>
			)
		}

		function handleStatusClick(event, value, row, index) {
			console.log('status clicked!')
		}

		function handleEditClick(event, value, row, index) {
			console.log('edit clicked!')
		}

		function handleDestroyClick(event, value, row, index) {
			console.log('destroy clicked!')
		}

		if (this.state.loading) {
			return 'low'
		}

		return (
			<>
			<button class="btn btn-success">Novo professor</button>
			<hr />
			<SamdTable columns={columns} data={this.state.data} keyField='tchr_id' />
			</>
		)

	}
}
