import React from 'react'
import api from '../../../../services/api'
import './index.css'
import SamdTable from '../../../../components/SamdTable'

export default class StudentDocs extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			loading: true,
			data: []
		}
	}

	componentDidMount() {

		api.get('/admin/studentDocs').then(response => {

			const data = response.data

			if (data !== '0') {
				this.setState({ data, loading: false })
			}

		})

	}

	render() {

		const columns = [{
			dataField: 'doc_id',
			text: 'Id. Documento'
		}, {
			dataField: 'doc_name',
			text: 'Nome'
		}, {
			dataField: 'doc_desc',
			text: 'Descrição'
		}, {
			dataField: 'createdat',
			text: 'Upado em'
		}, {
			dataField: 'user_full_name',
			text: 'Aluno'
		}, {
			dataField: 'estatus',
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
			return 'Loading'
		}

		return (

			<SamdTable columns={columns} data={this.state.data} keyField='doc_id' />
		)

	}
}
