import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'

export default class AllNotifications extends React.Component {

	constructor(props) {
		super(props)
	}

	componentDidMount() {

	}

	render() {

		return (

			<div className="container-fluid">

				<div className="row align-items-center dash-title">

					<div className="col-md-6 col-xs-12">
						<h2 className="text-white">Avisos</h2>
					</div>

				</div>

				<hr className="bg" />

				<div className="row">
					<div className="col-md-2 col-sm-12">
						<select className="custom-select">
							<option selected>Filtrar por: </option>
							<option value="1">Eventos</option>
							<option value="2">Notícia</option>
							<option value="3">Postagens</option>
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

				<div className="row mt-2">

					<div className="col-lg-4 col-md-12 col-xs-12 col-sm-12">
						<div className="card bg-purple2 zoom">
							<Link to="#" className="nav-link text-white">
								<div className="card-body text-center">
									<h3><i className="fas fa-calendar-week spacing"></i>Evento</h3>
									<hr className="white" />
									<h5 className="card-text"><i className="fas fa-trophy fa-4x"></i></h5>
									<h5 className="card-text mt-3">Semana Técnica</h5>
									<h5 className="card-text">Data: 18/10/2019</h5>
								</div>
							</Link>
						</div>
					</div>

					<div className="col-lg-4 col-md-12 col-xs-12 col-sm-12">
						<div className="card bg-purple zoom">
							<Link to="#" className="nav-link text-white">
								<div className="card-body text-center">
									<h3><i className="fas fa-calendar-week spacing"></i>Evento</h3>
									<hr className="white" />
									<h5 className="card-text"><i className="fas fa-trophy fa-4x"></i></h5>
									<h5 className="card-text mt-3">Hackathon</h5>
									<h5 className="card-text">Data: 22/11/2019</h5>
								</div>
							</Link>
						</div>
					</div>

					<div className="col-lg-4 col-md-12 col-xs-12 col-sm-12">
						<div className="card bg-green zoom">
							<Link to="#" className="nav-link text-white">
								<div className="card-body text-center">
									<h3><i className="fas fa-calendar-week spacing"></i>Evento</h3>
									<hr className="white" />
									<h5 className="card-text"><i className="fas fa-trophy fa-4x"></i></h5>
									<h5 className="card-text mt-3">Feira das profissões</h5>
									<h5 className="card-text">Data: 15/12/2019</h5>
								</div>
							</Link>
						</div>
					</div>

				</div>

				<div className="row mt-4">

					<div className="col-lg-4 col-md-12 col-xs-12 col-sm-12">
						<div className="card bg-blue">
							<Link to="#" className="nav-link text-white">
								<div className="card-body text-center">
									<h3><i className="fas fa-newspaper spacing"></i>Notícia</h3>
									<hr className="white" />
									<h5 className="card-text"><i className="fas fa-bullhorn fa-4x"></i></h5>
									<h4>Vagas de emprego</h4>
									<h5 className="card-text mt-3">Estágio em Suporte Técnico</h5>
									<h5 className="card-text">Empresa: Besttec</h5>
									<button className="btn btn-custom-blue-warnings mt-2 zoom"><label className="fas fa-chevron-right spacing"></label>Inscrição</button>
								</div>
							</Link>
						</div>
					</div>

					<div className="col-lg-4 col-md-12 col-xs-12 col-sm-12">
						<div className="card bg-orange2">
							<Link to="#" className="nav-link text-white">
								<div className="card-body text-center">
									<h3><i className="fas fa-newspaper spacing"></i>Notícia</h3>
									<hr className="white" />
									<h5 className="card-text"><i className="fas fa-bullhorn fa-4x"></i></h5>
									<h4>Vagas de emprego</h4>
									<h5 className="card-text mt-3">Estágio em Administração</h5>
									<h5 className="card-text">Empresa: Optimus</h5>
									<button className="btn btn-custom-orange2-warnings mt-2 zoom"><label className="fas fa-chevron-right spacing"></label>Inscrição</button>
								</div>
							</Link>
						</div>
					</div>

					<div className="col-lg-4 col-md-12 col-xs-12 col-sm-12">
						<div className="card bg-orange">
							<Link to="#" className="nav-link text-white">
								<div className="card-body text-center">
									<h3><i className="fas fa-newspaper spacing"></i>Notícia</h3>
									<hr className="white" />
									<h5 className="card-text"><i className="fas fa-bullhorn fa-4x"></i></h5>
									<h4>Vagas de emprego</h4>
									<h5 className="card-text mt-3">Estágio de Programador Júnior</h5>
									<h5 className="card-text">Empresa: Synchro</h5>
									<button className="btn btn-custom-orange-warnings mt-2 zoom"><label className="fas fa-chevron-right spacing"></label>Inscrição</button>
								</div>
							</Link>
						</div>
					</div>
				</div>

			</div>

		);
	}
}
