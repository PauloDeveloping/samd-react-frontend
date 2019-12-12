import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'

export default class StudentFrequency extends React.Component {

	constructor(props) {
		super(props)
	}

	componentDidMount() {

	}

	render() {

		return (

			<div className="container-fluid">

				<div className="row">
					<div className="col-md-2 col-sm-12">
						<select className="custom-select">
							<option selected>Filtrar por: </option>
							<option value="1">Disciplina</option>
							<option value="2">Frequência Parcial I</option>
							<option value="3">Frequência Parcial II</option>
							<option value="4">Frequência Final</option>
							<option value="5">Faltas</option>
						</select>
					</div>

					<div className="col-md-2 offset-sm-12 offset-md-8">
						<div className="pesquisar">
							<div className="input-group mb-2">
								<div className="input-group-prepend">
									<div className="input-group-text"><label className="fas fa-search"></label></div>
								</div>
								<input type="text" className="form-control" id="inlineFormInputGroup" placeholder="Pesquisar: " />
							</div>
						</div>
					</div>
				</div>

				<div className="card-deck mt-2">
					<div className="card new bg-orange">
						<div className="face face1">
							<Link to="#" className="nav-link text-white">
								<h4 className="card-text"><label className="fas fa-chevron-right spacing margin"></label>3º Módulo</h4>
								<hr className="white" />
								<h5 className="card-text mt-3">Frequência Parcial I: 100%</h5>
								<h5 className="card-text">Frequência Parcial II: 100%</h5>
								<h5 className="card-text">Frequência Final: 100%</h5>
								<h5 className="card-text">Quantidade de faltas: 0</h5>
							</Link>
						</div>
						<div className="orange face face2"><h3><i className="fas fa-database spacing"></i>Banco de dados III</h3></div>
					</div>

					<div className="card new bg-orange2">
						<div className="face face1">
							<Link to="#" className="nav-link text-white">
								<h4 className="card-text"><label className="fas fa-chevron-right spacing margin"></label>3º Módulo</h4>
								<hr className="white" />
								<h5 className="card-text mt-3">Frequência Parcial I: 97%</h5>
								<h5 className="card-text">Frequência Parcial II: 98%</h5>
								<h5 className="card-text">Frequência Final: 97%</h5>
								<h5 className="card-text">Quantidade de faltas: 2</h5>
							</Link>
						</div>
						<div className="orange2 face face2"><h3><i className="fas fa-award spacing"></i>Qualidade de Teste de Software</h3></div>
					</div>

					<div className="card new bg-blue">
						<div className="face face1">
							<Link to="#" className="nav-link text-white">
								<div className="card-body text-center">
									<h4 className="card-text"><label className="fas fa-chevron-right spacing margin"></label>3º Módulo</h4>
									<hr className="white" />
									<h5 className="card-text mt-3">Frequência Parcial I: 75%</h5>
									<h5 className="card-text">Frequência Parcial II: 76%</h5>
									<h5 className="card-text">Frequência Final: 75%</h5>
									<h5 className="card-text">Quantidade de faltas: 12</h5>
								</div>
							</Link>
						</div>
						<div className="blue face face2"><h3><i className="fas fa-code spacing"></i>Programação Web III</h3></div>
					</div>
				</div>

				<div className="card-deck mt-2">
					<div className="card new bg-green">
						<div className="face face1">
							<Link to="#" className="nav-link text-white">
								<h4 className="card-text"><label className="fas fa-chevron-right spacing margin"></label>3º Módulo</h4>
								<hr className="white" />
								<h5 className="card-text mt-3">Frequência Parcial I: 88%</h5>
								<h5 className="card-text">Frequência Parcial II: 88%</h5>
								<h5 className="card-text">Frequência Final: 88%</h5>
								<h5 className="card-text">Quantidade de faltas: 8</h5>
							</Link>
						</div>
						<div className="green face face2"><h3><i className="fas fa-file-contract spacing"></i>DTCC</h3></div>
					</div>

					<div className="card new bg-purple">
						<div className="face face1">
							<Link to="#" className="nav-link text-white">
								<h4 className="card-text"><label className="fas fa-chevron-right spacing margin"></label>3º Módulo</h4>
								<hr className="white" />
								<h5 className="card-text mt-3">Frequência Parcial I: 100%</h5>
								<h5 className="card-text">Frequência Parcial II: 98%</h5>
								<h5 className="card-text">Frequência Final: 99%</h5>
								<h5 className="card-text">Quantidade de faltas: 1</h5>
							</Link>
						</div>
						<div className="purple face face2"><h3><i className="fas fa-award spacing"></i>Qualidade de Teste de Software</h3></div>
					</div>

					<div className="card new bg-purple2">
						<div className="face face1">
							<Link to="#" className="nav-link text-white">
								<h4 className="card-text"><label className="fas fa-chevron-right spacing margin"></label>3º Módulo</h4>
								<hr className="white" />
								<h5 className="card-text mt-3">Frequência Parcial I: 100%</h5>
								<h5 className="card-text">Frequência Parcial II: 100%</h5>
								<h5 className="card-text">Frequência Final: 100%</h5>
								<h5 className="card-text">Quantidade de faltas: 0</h5>
							</Link>
						</div>
						<div className="purple2 face face2"><h3><i className="fas fa-microchip spacing"></i>Sistema Embarcados</h3></div>
					</div>
				</div>
			</div>
		);
	}
}
