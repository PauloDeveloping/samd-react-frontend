import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'

export default class StudentActions extends React.Component {

	constructor(props) {
		super(props)
	}

	componentDidMount() {

	}

	render() {

		return (

			<div className="card-deck mt-2">

				<div className="card bg-blue text-center">
					<Link to="/teacher/alunos/consulta" className="nav-link text-white">
						<div className="card-body">
							<small>Alunos registrados: <span className="badge badge-light">350</span></small>

							<hr className="white" />

							<h3 className="mt-3"><strong>VER ALUNOS</strong></h3>
						</div>
					</Link>
				</div>

				<div className="card bg-green text-center">
					<Link to="/teacher/alunos/mencoes/2" className="nav-link text-white">
						<div className="card-body">
							<small>Gerar relatório</small>

							<hr className="white" />

							<h3 className="mt-3"><strong>MÉDIA DE MENÇÕES</strong></h3>
						</div>
					</Link>
				</div>

			</div>


		);
	}
}
