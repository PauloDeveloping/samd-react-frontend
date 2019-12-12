import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faNewspaper, faBullhorn, faChevronRight
		} from '@fortawesome/free-solid-svg-icons'

export default class AllNews extends React.Component {

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
							<option value="1">Eventos</option>
							<option value="2">Notícia</option>
							<option value="3">Postagens</option>
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

				<div className="card-deck">
					<div className="card bg-blue">
						<Link to="#" className="nav-link text-white">
							<div className="card-body text-center">
								<h3><FontAwesomeIcon icon={faNewspaper} className="fa fa-fw fa-newspaper white spacing"/>Notícia</h3>
								<hr className="white" />
								<h5 className="card-text"><FontAwesomeIcon icon={faBullhorn} className="fa fa-fw fa-bullhorn fa-4x white spacing"/></h5>
								<h4>Vagas de emprego</h4>
								<h5 className="card-text mt-3">Estágio em Suporte Técnico</h5>
								<h5 className="card-text">Empresa: Besttec</h5>
								<button className="btn btn-custom-blue-warnings mt-2 zoom"><FontAwesomeIcon icon={faChevronRight} className="fa fa-fw fa-chevron-right white spacing"/>Inscrição</button>
							</div>
						</Link>
					</div>

					<div className="card bg-orange2">
						<Link to="#" className="nav-link text-white">
							<div className="card-body text-center">
								<h3><FontAwesomeIcon icon={faNewspaper} className="fa fa-fw fa-newspaper white spacing"/>Notícia</h3>
								<hr className="white" />
								<h5 className="card-text"><FontAwesomeIcon icon={faBullhorn} className="fa fa-fw fa-bullhorn fa-4x white spacing"/></h5>
								<h4>Vagas de emprego</h4>
								<h5 className="card-text mt-3">Estágio em Administração</h5>
								<h5 className="card-text">Empresa: Optimus</h5>
								<button className="btn btn-custom-orange2-warnings mt-2 zoom"><FontAwesomeIcon icon={faChevronRight} className="fa fa-fw fa-chevron-right white spacing"/>Inscrição</button>
							</div>
						</Link>
					</div>

					<div className="card bg-orange">
						<Link to="#" className="nav-link text-white">
							<div className="card-body text-center">
								<h3><FontAwesomeIcon icon={faNewspaper} className="fa fa-fw fa-newspaper white spacing"/>Notícia</h3>
								<hr className="white" />
								<h5 className="card-text"><FontAwesomeIcon icon={faBullhorn} className="fa fa-fw fa-bullhorn fa-4x white spacing"/></h5>
								<h4>Vagas de emprego</h4>
								<h5 className="card-text mt-3">Estágio de Programador Júnior</h5>
								<h5 className="card-text">Empresa: Synchro</h5>
								<button className="btn btn-custom-orange-warnings mt-2 zoom"><FontAwesomeIcon icon={faChevronRight} className="fa fa-fw fa-chevron-right white spacing"/>Inscrição</button>
							</div>
						</Link>
					</div>
				</div>
			</div>

		);
	}
}
