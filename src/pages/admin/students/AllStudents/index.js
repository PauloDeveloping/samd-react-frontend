import React from 'react'
import './index.css'
import api from '../../../../services/api'
import SamdTable from '../../../../components/SamdTable'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

export default class AllStudents extends React.Component {

	constructor(props) {

		super(props)
		this.state = {
			data: [],
			loading: true
		}

		this.MySwal = withReactContent(Swal)

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
			dataField: 'student_id',
			text: 'Opções',
			formatter: this.optionsFormatter
		}]

	}

	optionsFormatter(value, row, index) {
		return (
			<div className="table-buttons">
				<button className="btn btn-info btn-sm" onClick={e => this.handleDetailsClick(e, value, row, index)}>DETALHES</button>
				<button className="btn btn-warning btn-sm" onClick={e => this.handleEditClick(e, value, row, index)}>EDITAR</button>
				<button className="btn btn-danger btn-sm" onClick={e => this.handleDestroyClick(e, value, row, index)}>DESATIVAR</button>
			</div>
		);
	}

	handleDetailsClick(e, value, row, index) {

	}

	handleEditClick(e, value, row, index) {

	}

	handleDestroyClick(e, value, row, index) {
		this.MySwal.fire({
			title: <p>Tem certeza que deseja desativar esse aluno?</p>,
			icon: 'question',
			showCancelButton: true,
			cancelButtonColor: '#a00',
			cancelButtonText: 'Cancelar',
			confirmButtonText: 'Confirmar',
			//footer: 'Copyright 2018',
			onOpen: () => {
				// `MySwal` is a subclass of `Swal`
				//   with all the same instance & static methods
				//this.MySwal.clickConfirm()
			}
		}).then(isConfirm => {
			if(isConfirm.value) {
				this.MySwal.fire({
					title: 'Atenção!',
					text: 'Usuário '+row.user_tbl.user_full_name+' desativado',
					icon: 'success'
				})
			}
		})
	}

	componentDidMount() {

		api.get('/admin/allStudents').then(response => {

			let data = []

			response.data.map((index, object) =>  {
				data.push(index)
			})

			this.setState({ data, loading: false })
			console.log('data', this.state.data);
		})

	}

	handleNavigateClick(e) {
		this.props.route.history.push('/admin/alunos/novo');
	}


	render() {

		if (this.state.loading) {
			return 'Loading'
		}

		return (
			<>
			<button className="btn btn-success mt-4 mb-4" onClick={e => this.handleNavigateClick(e)}>Adicionar novo aluno</button>
			<SamdTable columns={this.columns} data={this.state.data} keyField='student_id' />
			</>
		)

	}

}
