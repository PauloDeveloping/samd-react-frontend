import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faChevronRight
		} from '@fortawesome/free-solid-svg-icons'

import logo from '../../../../assets/image/professor.png'

export default class Grid extends React.Component {

	constructor(props) {
		super(props)
	}

	componentDidMount() {

	}

	render() {

		return (

			<div className="container-fluid">

				<div className="row align-items-center dash-title">
					<div className="col-md-12 col-xs-12">
						<h2 className="text-white">Turma A - 3º Modúlo</h2>
					</div>
				</div>

				<div className="row mt-2">
					<div className="col-md-2 col-sm-12">
						<select className="custom-select">
							<option selected>Filtrar por: </option>
							<option value="1">Modúlo</option>
							<option value="2">Turma</option>
							<option value="3">Bloco</option>
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

				<div className="row align-items-center dash-title">
					<div className="col-md-12 col-xs-12">
						<h3 className="text-white"><FontAwesomeIcon icon={faChevronRight} className="fa fa-fw fa-chevron-right white"/>1º Bloco - 18:50 às 20:42</h3>
					</div>
				</div>

				<div className="card-deck mt-2">
					<div className="card bg-purple2 zoom">
						<Link to="#" className="nav-link text-white">
							<div className="card-body text-center">
								<h3>Segunda Feira</h3>
								<hr className="white" />
								<img src={logo} alt="" className="card-img-top" />
								<h5 className="card-text mt-3">Emerson</h5>
								<h5 className="card-text">Qualidade e Teste de Software</h5>
							</div>
						</Link>
					</div>

					<div className="card bg-purple zoom">
						<Link to="#" className="nav-link text-white">
							<div className="card-body text-center">
								<h3>Terça Feira</h3>
								<hr className="white" />
								<img src={logo} alt="" className="card-img-top" />
								<h5 className="card-text mt-3">Paulo</h5>
								<h5 className="card-text">Programação Web III</h5>
							</div>
						</Link>
					</div>

					<div className="card bg-blue zoom">
						<Link to="#" className="nav-link text-white">
							<div className="card-body text-center">
								<h3>Quarta Feira</h3>
								<hr className="white" />
								<img src={logo} alt="" className="card-img-top" />
								<h5 className="card-text mt-3">Emerson</h5>
								<h5 className="card-text">Segurança de Sistemas da Informação</h5>
							</div>
						</Link>
					</div>

					<div className="card bg-green zoom">
						<Link to="#" className="nav-link text-white">
							<div className="card-body text-center">
								<h3>Quinta Feira</h3>
								<hr className="white" />
								<img src={logo} alt="" className="card-img-top" />
								<h5 className="card-text mt-3">Aline</h5>
								<h5 className="card-text">Programação para Aplicativos Mobile II</h5>
							</div>
						</Link>
					</div>

					<div className="card bg-orange zoom">
						<Link to="#" className="nav-link text-white">
							<div className="card-body text-center">
								<h3>Sexta Feira</h3>
								<hr className="white" />
								<img src={logo} alt="" className="card-img-top" />
								<h5 className="card-text mt-3">Marcos</h5>
								<h5 className="card-text">Sistemas Embarcados</h5>
							</div>
						</Link>
					</div>
				</div>

				<div className="row align-items-center dash-title">
					<div className="col-md-12 col-xs-12 mt-2">
						<h3 className="text-white"><FontAwesomeIcon icon={faChevronRight} className="fa fa-fw fa-chevron-right white"/>2º Bloco - 20:52 às 22:45</h3>
					</div>
				</div>

				<div className="card-deck mt-2">
					<div className="card bg-purple2 zoom">
						<Link to="#" className="nav-link text-white">
							<div className="card-body text-center">
								<img src={logo} alt="" className="card-img-top" />
								<h5 className="card-text mt-3">Gilmar</h5>
								<h5 className="card-text">Ética e Cidadania Organizacional</h5>
							</div>
						</Link>
					</div>

					<div className="card bg-purple zoom">
						<Link to="#" className="nav-link text-white">
							<div className="card-body text-center">
								<img src={logo} alt="" className="card-img-top" />
								<h5 className="card-text mt-3">Cristiano</h5>
								<h5 className="card-text">Programação Web III</h5>
							</div>
						</Link>
					</div>

					<div className="card bg-blue zoom">
						<Link to="#" className="nav-link text-white">
							<div className="card-body text-center">
								<img src={logo} alt="" className="card-img-top" />
								<h5 className="card-text mt-3">Marcos</h5>
								<h5 className="card-text">Banco de Dados III</h5>
							</div>
						</Link>
					</div>

					<div className="card bg-green zoom">
						<Link to="#" className="nav-link text-white">
							<div className="card-body text-center">
								<img src={logo} alt="" className="card-img-top" />
								<h5 className="card-text mt-3">Cristiano</h5>
								<h5 className="card-text">Qualidade e Teste de Software</h5>
							</div>
						</Link>
					</div>

					<div className="card bg-orange zoom">
						<Link to="#" className="nav-link text-white">
							<div className="card-body text-center">
								<img src={logo} alt="" className="card-img-top" />
								<h5 className="card-text mt-3">Aline e Marcos</h5>
								<h5 className="card-text">DTCC</h5>
							</div>
						</Link>
					</div>
				</div>

				<div className="row align-items-center dash-title mt-4">
					<div className="col-md-12 col-xs-12">
						<h2 className="text-white">Turma B - 3º Modúlo</h2>
					</div>
				</div>

				<div className="row align-items-center dash-title">
					<div className="col-md-12 col-xs-12">
						<h3 className="text-white"><FontAwesomeIcon icon={faChevronRight} className="fa fa-fw fa-chevron-right white"/>1º Bloco - 18:50 às 20:42</h3>
					</div>
				</div>

				<div className="card-deck mt-2">
					<div className="card bg-purple2 zoom">
						<Link to="#" className="nav-link text-white">
							<div className="card-body text-center">
								<h3>Segunda Feira</h3>
								<hr className="white" />
								<img src={logo} alt="" className="card-img-top" />
								<h5 className="card-text mt-3">Wilhelm</h5>
								<h5 className="card-text">Qualidade e Teste de Software</h5>
							</div>
						</Link>
					</div>

					<div className="card bg-purple zoom">
						<Link to="#" className="nav-link text-white">
							<div className="card-body text-center">
								<h3>Terça Feira</h3>
								<hr className="white" />
								<img src={logo} alt="" className="card-img-top" />
								<h5 className="card-text mt-3">Paulo</h5>
								<h5 className="card-text">Programação Web III</h5>
							</div>
						</Link>
					</div>

					<div className="card bg-blue zoom">
						<Link to="#" className="nav-link text-white">
							<div className="card-body text-center">
								<h3>Quarta Feira</h3>
								<hr className="white" />
								<img src={logo} alt="" className="card-img-top" />
								<h5 className="card-text mt-3">Wilhelm</h5>
								<h5 className="card-text">Segurança de Sistemas da Informação</h5>
							</div>
						</Link>
					</div>

					<div className="card bg-green zoom">
						<Link to="#" className="nav-link text-white">
							<div className="card-body text-center">
								<h3>Quinta Feira</h3>
								<hr className="white" />
								<img src={logo} alt="" className="card-img-top" />
								<h5 className="card-text mt-3">Aline</h5>
								<h5 className="card-text">Programação para Aplicativos Mobile II</h5>
							</div>
						</Link>
					</div>

					<div className="card bg-orange zoom">
						<Link to="#" className="nav-link text-white">
							<div className="card-body text-center">
								<h3>Sexta Feira</h3>
								<hr className="white" />
								<img src={logo} alt="" className="card-img-top" />
								<h5 className="card-text mt-3">Aline e Marcos</h5>
								<h5 className="card-text">DTCC</h5>
							</div>
						</Link>
					</div>
				</div>

				<div className="row align-items-center dash-title">
					<div className="col-md-12 col-xs-12 mt-2 mt-2">
						<h3 className="text-white"><FontAwesomeIcon icon={faChevronRight} className="fa fa-fw fa-chevron-right white"/>2º Bloco - 20:52 às 22:45</h3>
					</div>
				</div>

				<div className="card-deck mt-2">
					<div className="card bg-purple2 zoom">
						<Link to="#" className="nav-link text-white">
							<div className="card-body text-center">
								<img src={logo} alt="" className="card-img-top" />
								<h5 className="card-text mt-3">Gilmar</h5>
								<h5 className="card-text">Ética e Cidadania Organizacional</h5>
							</div>
						</Link>
					</div>

					<div className="card bg-purple zoom">
						<Link to="#" className="nav-link text-white">
							<div className="card-body text-center">
								<img src={logo} alt="" className="card-img-top" />
								<h5 className="card-text mt-3">Cristiano</h5>
								<h5 className="card-text">Programação Web III</h5>
							</div>
						</Link>
					</div>

					<div className="card bg-blue zoom">
						<Link to="#" className="nav-link text-white">
							<div className="card-body text-center">
								<img src={logo} alt="" className="card-img-top" />
								<h5 className="card-text mt-3">Marcos</h5>
								<h5 className="card-text">Banco de Dados III</h5>
							</div>
						</Link>
					</div>

					<div className="card bg-green zoom">
						<Link to="#" className="nav-link text-white">
							<div className="card-body text-center">
								<img src={logo} alt="" className="card-img-top" />
								<h5 className="card-text mt-3">Cristiano</h5>
								<h5 className="card-text">Qualidade e Teste de Software</h5>
							</div>
						</Link>
					</div>

					<div className="card bg-orange zoom">
						<Link to="#" className="nav-link text-white">
							<div className="card-body text-center">
								<img src={logo} alt="" className="card-img-top" />
								<h5 className="card-text mt-3">Aline e Marcos</h5>
								<h5 className="card-text">DTCC</h5>
							</div>
						</Link>
					</div>
				</div>
			</div>

		);
	}
}
