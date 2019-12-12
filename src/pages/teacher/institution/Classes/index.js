import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'

import logo from '../../../../assets/image/professor.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight
		} from '@fortawesome/free-solid-svg-icons'

export default class Classes extends React.Component {

	constructor(props) {
		super(props)
	}

	componentDidMount() {

	}

	render() {

		return (

			<>
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
								<h5 className="card-text mt-3">Turma A</h5>
								<img src={logo} alt="" className="card-img-top" />
								<h5 className="card-text mt-3">3° DSN</h5>
								<h5 className="card-text">Qualidade e Teste de Software</h5>
							</div>
						</Link>
					</div>

					<div className="card bg-purple zoom">
						<Link to="#" className="nav-link text-white">
							<div className="card-body text-center">
								<h3>Terça Feira</h3>
								<hr className="white" />
								<h5 className="card-text mt-3">Turma A</h5>
								<img src={logo} alt="" className="card-img-top" />
								<h5 className="card-text mt-3">2° DSN</h5>
								<h5 className="card-text">Programação Web II</h5>
							</div>
						</Link>
					</div>

					<div className="card bg-blue zoom">
						<Link to="#" className="nav-link text-white">
							<div className="card-body text-center">
								<h3>Quarta Feira</h3>
								<hr className="white" />
								<h5 className="card-text mt-3">Turma A</h5>
								<img src={logo} alt="" className="card-img-top" />
								<h5 className="card-text mt-3">3° DSN</h5>
								<h5 className="card-text">Segurança de Sistemas da Informação</h5>
							</div>
						</Link>
					</div>

					<div className="card bg-green zoom">
						<Link to="#" className="nav-link text-white">
							<div className="card-body text-center">
								<h3>Quinta Feira</h3>
								<hr className="white" />
								<h5 className="card-text mt-3">Turma A</h5>
								<img src={logo} alt="" className="card-img-top" />
								<h5 className="card-text mt-3">1° DSN</h5>
								<h5 className="card-text">Programação Web I</h5>
							</div>
						</Link>
					</div>

					<div className="card bg-orange zoom">
						<Link to="#" className="nav-link text-white">
							<div className="card-body text-center">
								<h3>Sexta Feira</h3>
								<hr className="white" />
								<h5 className="card-text mt-3">Turma A</h5>
								<img src={logo} alt="" className="card-img-top" />
								<h5 className="card-text mt-3">3° DSN</h5>
								<h5 className="card-text">Sistemas Embarcados</h5>
							</div>
						</Link>
					</div>
				</div>


				<div className="row align-items-center dash-title">
					<div className="col-md-12 col-xs-12 mt-4">
						<h3 className="text-white"><FontAwesomeIcon icon={faChevronRight} className="fa fa-fw fa-chevron-right white"/>2º Bloco - 20:52 às 22:45</h3>
					</div>
				</div>

				<div className="card-deck mt-2">
					<div className="card bg-purple2 zoom">
						<Link to="#" className="nav-link text-white">
							<div className="card-body text-center">
								<h3>Segunda Feira</h3>
								<hr className="white" />
								<h5 className="card-text mt-3">Turma B</h5>
								<img src={logo} alt="" className="card-img-top" />
								<h5 className="card-text mt-3">3° DSN</h5>
								<h5 className="card-text">Qualidade e Teste de Software</h5>
							</div>
						</Link>
					</div>

					<div className="card bg-purple zoom">
						<Link to="#" className="nav-link text-white">
							<div className="card-body text-center">
								<h3>Terça Feira</h3>
								<hr className="white" />
								<h5 className="card-text mt-3">Turma B</h5>
								<img src={logo} alt="" className="card-img-top" />
								<h5 className="card-text mt-3">2° DSN</h5>
								<h5 className="card-text">Programação Web II</h5>
							</div>
						</Link>
					</div>

					<div className="card bg-blue zoom">
						<Link to="#" className="nav-link text-white">
							<div className="card-body text-center">
								<h3>Quarta Feira</h3>
								<hr className="white" />
								<h5 className="card-text mt-3">Turma B</h5>
								<img src={logo} alt="" className="card-img-top" />
								<h5 className="card-text mt-3">3° DSN</h5>
								<h5 className="card-text">Segurança de Sistemas da Informação</h5>
							</div>
						</Link>
					</div>

					<div className="card bg-green zoom">
						<Link to="#" className="nav-link text-white">
							<div className="card-body text-center">
								<h3>Quinta Feira</h3>
								<hr className="white" />
								<h5 className="card-text mt-3">Turma B</h5>
								<img src={logo} alt="" className="card-img-top" />
								<h5 className="card-text mt-3">1° DSN</h5>
								<h5 className="card-text">Programação Web I</h5>
							</div>
						</Link>
					</div>

					<div className="card bg-orange zoom">
						<Link to="#" className="nav-link text-white">
							<div className="card-body text-center">
								<h3>Sexta Feira</h3>
								<hr className="white" />
								<h5 className="card-text mt-3">Turma B</h5>
								<img src={logo} alt="" className="card-img-top" />
								<h5 className="card-text mt-3">3° DSN</h5>
								<h5 className="card-text">Sistemas Embarcados</h5>
							</div>
						</Link>
					</div>
				</div>

			</>

		);
	}
}
