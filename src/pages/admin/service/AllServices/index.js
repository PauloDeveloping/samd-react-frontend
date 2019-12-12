import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIdBadge, faEdit, faIdCard, faBook, faChevronRight
		} from '@fortawesome/free-solid-svg-icons'


export default class AllServices extends React.Component {

	constructor(props) {
		super(props)
	}

	componentDidMount() {

	}

	render() {

		return (

			<div className="container-fluid">
				<div className="card-deck mt-4">
					<div className="card bg-purple">
						<Link className="nav-link text-white">
							<div className="card-body text-center">
								<h3 className="mt-4"><strong><FontAwesomeIcon icon={faIdBadge} className="fa fa-fw fa-id-badge white spacing"/>Carteirinha de estudante</strong></h3>
								<button className="btn btn-custom-purple-servicos spacing mt-2 zoom"><FontAwesomeIcon icon={faChevronRight} className="fa fa-fw fa-chevron-right white spacing"/>Solicitações</button>
								<button className="btn btn-custom-purple-servicos spacing mt-2 zoom"><FontAwesomeIcon icon={faChevronRight} className="fa fa-fw fa-chevron-right white spacing"/>Ver detalhes</button>
							</div>
						</Link>
					</div>

					<div className="card bg-purple2">
						<Link className="nav-link text-white">
							<div className="card-body text-center">
								<h3 className="mt-4"><strong><FontAwesomeIcon icon={faEdit} className="fa fa-fw fa-edit white spacing"/>Declaração de matrícula</strong></h3>
								<button className="btn btn-custom-purple2-servicos spacing mt-2 zoom"><FontAwesomeIcon icon={faChevronRight} className="fa fa-fw fa-chevron-right white spacing"/>Solicitações</button>
								<button className="btn btn-custom-purple2-servicos spacing mt-2 zoom"><FontAwesomeIcon icon={faChevronRight} className="fa fa-fw fa-chevron-right white spacing"/>Ver detalhes</button>
							</div>
						</Link>
					</div>

					<div className="card bg-orange">
						<Link className="nav-link text-white">
							<div className="card-body text-center">
								<h3 className="mt-4"><strong><FontAwesomeIcon icon={faIdCard} className="fa fa-fw fa-id-card white spacing"/>Solicitação do cartão escolar</strong></h3>
								<button className="btn btn-custom-orange-servicos spacing mt-2 zoom"><FontAwesomeIcon icon={faChevronRight} className="fa fa-fw fa-chevron-right white spacing"/>Solicitações</button>
								<button className="btn btn-custom-orange-servicos mt-2 zoom"><FontAwesomeIcon icon={faChevronRight} className="fa fa-fw fa-chevron-right white spacing"/>Ver detalhes</button>
							</div>
						</Link>
					</div>

					<div className="card bg-blue">
						<Link className="nav-link text-white">
							<div className="card-body text-center">
								<h3 className="mt-4"><strong><FontAwesomeIcon icon={faBook} className="fa fa-fw fa-book white spacing"/>Aproveitamento de estudos</strong></h3>
								<button className="btn btn-custom-blue-servicos spacing mt-2 zoom"><FontAwesomeIcon icon={faChevronRight} className="fa fa-fw fa-chevron-right white spacing"/>Solicitações</button>
								<button className="btn btn-custom-blue-servicos mt-2 zoom"><FontAwesomeIcon icon={faChevronRight} className="fa fa-fw fa-chevron-right white spacing"/>Ver detalhes</button>
							</div>
						</Link>
					</div>
				</div>
			</div>

		);
	}
}
