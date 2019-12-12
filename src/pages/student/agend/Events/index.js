import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faCalendarWeek, faTrophy 
		} from '@fortawesome/free-solid-svg-icons'

export default class Events extends React.Component {

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

				<div className="card-deck mt-2">
					<div className="card bg-purple2 zoom">
						<Link to="#" className="nav-link text-white">
							<div className="card-body text-center">
								<h3><FontAwesomeIcon icon={faCalendarWeek} className="fa fa-fw fa-calendar-week white spacing"/>Evento</h3>
								<hr className="white" />
								<h5 className="card-text"><FontAwesomeIcon icon={faTrophy} className="fa fa-fw fa-trophy fa-4x white spacing"/></h5>
								<h5 className="card-text mt-3">Semana Técnica</h5>
								<h5 className="card-text">Data: 18/10/2019</h5>
							</div>
						</Link>
					</div>

					<div className="card bg-purple zoom">
						<Link to="#" className="nav-link text-white">
							<div className="card-body text-center">
								<h3><FontAwesomeIcon icon={faCalendarWeek} className="fa fa-fw fa-calendar-week white spacing"/>Evento</h3>
								<hr className="white" />
								<h5 className="card-text"><FontAwesomeIcon icon={faTrophy} className="fa fa-fw fa-trophy fa-4x white spacing"/></h5>
								<h5 className="card-text mt-3">Hackathon</h5>
								<h5 className="card-text">Data: 22/11/2019</h5>
							</div>
						</Link>
					</div>

					<div className="card bg-green zoom">
						<Link to="#" className="nav-link text-white">
							<div className="card-body text-center">
								<h3><FontAwesomeIcon icon={faCalendarWeek} className="fa fa-fw fa-calendar-week white spacing"/>Evento</h3>
								<hr className="white" />
								<h5 className="card-text"><FontAwesomeIcon icon={faTrophy} className="fa fa-fw fa-trophy fa-4x white spacing"/></h5>
								<h5 className="card-text mt-3">Feira das profissões</h5>
								<h5 className="card-text">Data: 15/12/2019</h5>
							</div>
						</Link>
					</div>
				</div>
			</div>

		);

	}
}
