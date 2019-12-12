import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faChevronRight, faDatabase, faMobile, faCode, faFileContract, faAward, faMicrochip, faLock, faGraduationCap
		} from '@fortawesome/free-solid-svg-icons'

export default class StudentMentions extends React.Component {

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
							<option value="2">Menção Parcial-I</option>
							<option value="3">Menção Parcial-II</option>
							<option value="4">Menção Final</option>
						</select>
					</div>

					<div className="col-md-2 offset-sm-12 offset-md-8">
						<div className="pesquisar">
							<div className="input-group mb-2">
								<div className="input-group-prepend">
									<div className="input-group-text"><FontAwesomeIcon icon={faSearch} className="fa fa-fw fa-search black"/></div>
								</div>
								<input type="text" className="form-control" id="inlineFormInputGroup" placeholder="Pesquisar: " />
							</div>
						</div>
					</div>
				</div>

				<div className="card-deck mt-2">
					<div className="card new bg-purple2">
						<div className="face face1">
							<Link to="#" className="nav-link text-white">
								<h4 className="card-text"><FontAwesomeIcon icon={faChevronRight} className="fa fa-fw fa-chevron-right white spacing mt-3"/>3º Módulo</h4>
								<hr className="white" />
								<h5 className="card-text mt-3">Menção Parcial I: B</h5>
								<h5 className="card-text">Menção Parcial II: B</h5>
								<h5 className="card-text">Menção Final: B</h5>
							</Link>
						</div>
						<div className="purple2 face face2"><h3><FontAwesomeIcon icon={faDatabase} className="fa fa-fw fa-database white spacing"/>Banco de dados III</h3></div>
					</div>

					<div className="card new bg-purple">
						<div className="face face1">
							<Link to="#" className="nav-link text-white">
								<h4 className="card-text"><FontAwesomeIcon icon={faChevronRight} className="fa fa-fw fa-chevron-right white spacing mt-3"/>3º Módulo</h4>
								<hr className="white" />
								<h5 className="card-text mt-3">Menção Parcial I: MB</h5>
								<h5 className="card-text">Menção Parcial II: B</h5>
								<h5 className="card-text">Menção Final: MB</h5>
							</Link>
						</div>
						<div className="purple face face2"><h3><FontAwesomeIcon icon={faMobile} className="fa fa-fw fa-mobile white spacing"/>Programação de Aplicativos Mobile II</h3></div>
					</div>

					<div className="card new bg-green">
						<div className="face face1">
							<Link to="#" className="nav-link text-white">
								<div className="card-body text-center">
									<h4 className="card-text"><FontAwesomeIcon icon={faChevronRight} className="fa fa-fw fa-chevron-right white spacing mt-3"/>3º Módulo</h4>
									<hr className="white" />
									<h5 className="card-text mt-3">Menção Parcial I: R</h5>
									<h5 className="card-text">Menção Parcial II: R</h5>
									<h5 className="card-text">Menção Final: R</h5>
								</div>
							</Link>
						</div>
						<div className="green face face2"><h3><FontAwesomeIcon icon={faCode} className="fa fa-fw fa-code white spacing"/>Programação Web III</h3></div>
					</div>
				</div>

				<div className="card-deck mt-2">
					<div className="card new bg-blue">
						<div className="face face1">
							<Link to="#" className="nav-link text-white">
								<h4 className="card-text"><FontAwesomeIcon icon={faChevronRight} className="fa fa-fw fa-chevron-right white spacing mt-3"/>3º Módulo</h4>
								<hr className="white" />
								<h5 className="card-text mt-3">Menção Parcial I: MB</h5>
								<h5 className="card-text">Menção Parcial II: MB</h5>
								<h5 className="card-text">Menção Final: MB</h5>
							</Link>
						</div>
						<div className="blue face face2"><h3><FontAwesomeIcon icon={faFileContract} className="fa fa-fw fa-file-contract white spacing"/>DTCC</h3></div>
					</div>

					<div className="card new bg-orange2">
						<div className="face face1">
							<Link to="#" className="nav-link text-white">
								<h4 className="card-text"><FontAwesomeIcon icon={faChevronRight} className="fa fa-fw fa-chevron-right white spacing mt-3"/>3º Módulo</h4>
								<hr className="white" />
								<h5 className="card-text mt-3">Menção Parcial I: B</h5>
								<h5 className="card-text">Menção Parcial II: B</h5>
								<h5 className="card-text">Menção Final: B</h5>
							</Link>
						</div>
						<div className="orange2 face face2"><h3><FontAwesomeIcon icon={faAward} className="fa fa-fw fa-award white spacing"/>Qualidade de Teste de Software</h3></div>
					</div>

					<div className="card new bg-orange">
						<div className="face face1">
							<Link to="#" className="nav-link text-white">
								<h4 className="card-text"><FontAwesomeIcon icon={faChevronRight} className="fa fa-fw fa-chevron-right white spacing mt-3"/>3º Módulo</h4>
								<hr className="white" />
								<h5 className="card-text mt-3">Menção Parcial I: I</h5>
								<h5 className="card-text">Menção Parcial II: R</h5>
								<h5 className="card-text">Menção Final: R</h5>
							</Link>
						</div>
						<div className="orange face face2"><h3><FontAwesomeIcon icon={faMicrochip} className="fa fa-fw fa-microchip white spacing"/>Sistema Embarcados</h3></div>
					</div>
				</div>
			</div>

		);
	}
}
