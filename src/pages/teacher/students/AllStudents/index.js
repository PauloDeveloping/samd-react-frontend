import React from 'react'
import './index.css'
import SamdTable from '../../../../components/SamdTable'

export default class AllStudents extends React.Component {

	constructor(props) {
		super(props)
	}

	componentDidMount() {

	}

	render() {

		return (

			<div className="container-fluid">

				<h3 className="dash-title">Consulta de Alunos</h3>

				<hr className="bg" />

				<div className="row">
					<div className="col-md-3 col-xs-12 ">
						<input type="text" name="filtro_alunos" id="filtro_alunos" className="form-control" placeholder="Pesquisar" />
					</div>

					<div className="col-md-6 col-xs-12"></div>

					<div className="col-md-3 col-xs-12">
						<select name="filtro_aluno_curso" id="filtro_aluno_curso" className="custom-select">
							<option>- Filtrar por curso -</option>
							<option value="administracao">Administração</option>
							<option value="contabilidade">Contabilidade</option>
							<option value="desenvolvimento">Desenvolvimento de Sistemas</option>
							<option value="medio">Ensino Médio</option>
							<option value="etim">E.T.I.M</option>
							<option value="logistica">Logística</option>
							<option value="redes">Redes de Computadores</option>
						</select>
					</div>
				</div>

				<hr />

				<table className="table table-sm table-light table-striped table-hover">
					<thead className="bg-custom">
						<tr>
							<th scope="col">RM</th>
							<th scope="col">Nome</th>
							<th scope="col">Curso</th>
							<th scope="col">Módulo</th>
						</tr>
					</thead>

					<tbody>
						<tr>
							<td scope="row">16190</td>
							<td>João Schmidt</td>
							<td>Desenvolvimento de Sistemas</td>
							<td>3º</td>
						</tr>

						<tr>
							<td scope="row">16191</td>
							<td>Ariele Oliveira</td>
							<td>Desenvolvimento de Sistemas</td>
							<td>3º</td>
						</tr>

						<tr>
							<td scope="row">16192</td>
							<td>Lucas Primo</td>
							<td>Desenvolvimento de Sistemas</td>
							<td>1º</td>
						</tr>
					</tbody>
				</table>

			</div>

		);
	}
}
