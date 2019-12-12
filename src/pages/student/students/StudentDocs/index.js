import React from 'react'
import './index.css'
import SamdTable from '../../../../components/SamdTable'

export default class StudentDocs extends React.Component {

	constructor(props) {
		super(props)
	}

	componentDidMount() {

	}

	render() {

		return (

			<div className="container-fluid">

				<h3 className="dash-title">Requerimento de Documentos</h3>

				<hr className="bg" />

				<div className="row">
					<div className="col-md-3 col-xs-12">
						<input type="text" className="form-control doc_filter" name="doc_filter" placeholder="Filtrar por documento" />
					</div>

					<div className="col-md-6 col-xs-12"></div>

					<div className="col-md-3 col-xs-12">
						<input type="text" className="form-control doc_filter" name="alumn_filter" placeholder="Filtrar por aluno" />
					</div>
				</div>

				<hr />

				<table className="table table-sm table-light table-striped table-hover">
					<thead className="bg-custom">
						<tr>
							<th scope="col">Nome</th>
							<th scope="col">Curso</th>
							<th scope="col">Módulo</th>
							<th scope="col">Documento</th>
						</tr>
					</thead>

					<tbody>
						<tr>
							<td scope="row">João Schmidt</td>
							<td>Desenvolvimento de Sistemas</td>
							<td>1º</td>
							<td>Carteirinha escolar</td>
						</tr>

						<tr>
							<td scope="row">Ariele Oliveira</td>
							<td>Desenvolvimento de Sistemas</td>
							<td>2º</td>
							<td>Declaração escolar</td>
						</tr>

						<tr>
							<td scope="row">Lucas Luz</td>
							<td>Desenvolvimento de Sistemas</td>
							<td>3º</td>
							<td>Cartão de ônibus EMTU</td>
						</tr>
					</tbody>
				</table>
			</div>

		);
	}
}
