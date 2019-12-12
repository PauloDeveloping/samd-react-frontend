import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faExclamationTriangle, faBell, faNewspaper, faBullhorn, faChevronRight
		} from '@fortawesome/free-solid-svg-icons'

export default class Board extends React.Component {

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
									<div className="input-group-text"><FontAwesomeIcon icon={faSearch} className="fa fa-fw fa-search"/></div>
								</div>
								<input type="text" className="form-control" id="inlineFormInputGroup" placeholder="Pesquisar: " />
							</div>
						</div>
					</div>
				</div>

				<div className="card-deck mt-2">
					<div className="card bg-orange">
						<Link to="#" className="nav-link text-white">
							<div className="card-body text-center">
								<h3><FontAwesomeIcon icon={faExclamationTriangle} className="fa fa-fw fa-exclamation-triangle white spacing"/>Comunicado</h3>
								<hr className="white" />
								<h5 className="card-text"><FontAwesomeIcon icon={faBell} className="fa fa-fw fa-bell fa-4x white spacing"/></h5>
								<button className="btn btn-custom-orange-mural mt-2 zoom" data-toggle="modal" data-target="#modal"><FontAwesomeIcon icon={faChevronRight} className="fa fa-fw fa-chevron-right white spacing"/>Visualizar</button>
							</div>
						</Link>
					</div>

					<div className="card bg-orange2">
						<Link to="#" className="nav-link text-white">
							<div className="card-body text-center">
								<h3><FontAwesomeIcon icon={faNewspaper} className="fa fa-fw fa-newspaper white spacing"/>Notícia</h3>
								<hr className="white" />
								<FontAwesomeIcon icon={faBullhorn} className="fa fa-fw fa-bullhorn fa-4x white spacing"/><h5 className="card-text"></h5>
								<button className="btn btn-custom-orange2-mural mt-2 zoom" data-toggle="modal" data-target="#modal2"><FontAwesomeIcon icon={faChevronRight} className="fa fa-fw fa-chevron-right white spacing"/>Visualizar</button>
							</div>
						</Link>
					</div>
				</div>

				<div className="modal fade" id="modal" tabindex="-1" role="dialog" aria-labelledby="ModalLabel" aria-hidden="true">
					<div className="modal-dialog" role="document">
						<div className="modal-content">
							<div className="modal-header">
								<h5 className="modal-title" id="ModalLabel"><i className="fas fa-exclamation-triangle spacing"></i>Comunicado</h5>
								<button type="button" className="close" data-dismiss="modal" aria-label="Fechar">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							<div className="modal-body">
								<h5 className="justified">A escola ficará fechada nos dias 20, 21 e 23 de Setembro para dedetização.
                            O prédio ficará fechado completamente nesse período, assim nenhum aluno será contaminado com os gases tóxicos contidos no local.</h5>
							</div>
							<div className="modal-footer">
								<button type="button" className="btn btn-primary" data-dismiss="modal">Fechar</button>
							</div>
						</div>
					</div>
				</div>

				<div className="modal fade" id="modal2" tabindex="-1" role="dialog" aria-labelledby="ModalLabel" aria-hidden="true">
					<div className="modal-dialog" role="document">
						<div className="modal-content">
							<div className="modal-header">
								<h5 className="modal-title" id="ModalLabel"><i className="fas fa-newspaper spacing"></i>Notícia</h5>
								<button type="button" className="close" data-dismiss="modal" aria-label="Fechar">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							<div className="modal-body">
								<h5 className="justified">O evento escola da família foi um sucesso, gostaríamos de agradecer todos os alunos que nos ajudaram nesse dia, e puderam comparecer.
                            Estamos bem animados com o feedback, e por conta disso em breve novos eventos desse tipo serão realizados.</h5>
							</div>
							<div className="modal-footer">
								<button type="button" className="btn btn-primary" data-dismiss="modal">Fechar</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}

}
