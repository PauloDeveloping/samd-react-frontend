import React from 'react'
import {Link} from 'react-router-dom'
import './index.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faClipboardList, faPencilAlt, faPencilRuler, faBookOpen, faRuler, faFilePowerpoint
		} from '@fortawesome/free-solid-svg-icons'

export default class Tasks extends React.Component {

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
							<option value="1">Provas</option>
							<option value="2">Atividades</option>
							<option value="3">Seminários</option>
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
					<div className="card new bg-purple2">
						<div className="face face1 mt-new">
							<Link to="#" className="nav-link text-white">
								<h5 className="card-text mt-4"><FontAwesomeIcon icon={faClipboardList} className="fa fa-fw fa-clipboard-list fa-4x white spacing"/></h5>
								<h5 className="card-text mt-3">Prova de Banco de Dados III</h5>
								<h5 className="card-text">Data: 19/08/2019</h5>
							</Link>
						</div>
						<div className="purple2 face face2"><h3><FontAwesomeIcon icon={faPencilAlt} className="fa fa-fw fa-pencil-alt white spacing"/>Prova</h3></div>
					</div>

					<div className="card new bg-purple">
						<div className="face face1 mt-new">
							<Link to="#" className="nav-link text-white">
								<h5 className="card-text mt-4"><FontAwesomeIcon icon={faBookOpen} className="fa fa-fw fa-book-open fa-4x white spacing"/></h5>
								<h5 className="card-text mt-3">Atividade de Sistemas Embarcados</h5>
								<h5 className="card-text">Entrega: 22/08/2019</h5>
							</Link>
						</div>
						<div className="purple face face2"><h3><FontAwesomeIcon icon={faPencilRuler} className="fa fa-fw fa-pencil-ruler white spacing"/>Atividade</h3></div>
					</div>

					<div className="card new bg-green">
						<div className="face face1 mt-new">
							<Link to="#" className="nav-link text-white">
								<div className="card-body text-center">
									<h5 className="card-text mt-4"><FontAwesomeIcon icon={faFilePowerpoint} className="fa fa-fw fa-file-powerpoint fa-4x white spacing"/></h5>
									<h5 className="card-text mt-3">Apresentação de Ética</h5>
									<h5 className="card-text">Data: 29/08/2019</h5>
								</div>
							</Link>
						</div>
						<div className="green face face2"><h3><FontAwesomeIcon icon={faRuler} className="fa fa-fw fa-ruler white spacing"/>Seminário</h3></div>
					</div>
				</div>

				<div className="card-deck mt-2">
					<div className="card new bg-blue">
						<div className="face face1">
							<Link to="#" className="nav-link text-white">
								<h5 className="card-text mt-4"><FontAwesomeIcon icon={faFilePowerpoint} className="fa fa-fw fa-file-powerpoint fa-4x white spacing"/></h5>
								<h5 className="card-text mt-3">Apresentação de Programação Web III</h5>
								<h5 className="card-text">Data: 15/08/2019</h5>
							</Link>
						</div>
						<div className="blue face face2"><h3><FontAwesomeIcon icon={faRuler} className="fa fa-fw fa-ruler white spacing"/>Seminário</h3></div>
					</div>

					<div className="card new bg-orange2">
						<div className="face face1">
							<Link to="#" className="nav-link text-white">
								<h5 className="card-text mt-4"><FontAwesomeIcon icon={faClipboardList} className="fa fa-fw fa-clipboard-list fa-4x white spacing"/></h5>
								<h5 className="card-text mt-3">Prova Banco de Dados III</h5>
								<h5 className="card-text">Data: 05/09/2019</h5>
							</Link>
						</div>
						<div className="orange2 face face2"><h3><FontAwesomeIcon icon={faPencilAlt} className="fa fa-fw fa-pencil-alt white spacing"/>Prova</h3></div>
					</div>

					<div className="card new bg-orange">
						<div className="face face1">
							<Link to="#" className="nav-link text-white">
								<div className="card-body text-center">
									<h5 className="card-text mt-4"><FontAwesomeIcon icon={faBookOpen} className="fa fa-fw fa-book-open fa-4x white spacing"/></h5>
									<h5 className="card-text mt-3">Atividade de Programação Web III</h5>
									<h5 className="card-text">Entrega: 02/09/2019</h5>
								</div>
							</Link>
						</div>
						<div className="orange face face2"><h3><FontAwesomeIcon icon={faPencilRuler} className="fa fa-fw fa-pencil-ruler white spacing"/>Atividade</h3></div>
					</div>
				</div>

				<div className="card-deck mt-2">
					<div className="card new bg-green">
						<div className="face face1">
							<Link to="#" className="nav-link text-white">
								<h5 className="card-text mt-4"><FontAwesomeIcon icon={faBookOpen} className="fa fa-fw fa-book-open fa-4x white spacing"/></h5>
								<h5 className="card-text mt-3">Atividade de Programação Web III</h5>
								<h5 className="card-text">Entrega: 02/09/2019</h5>
							</Link>
						</div>

						<div className="green face face2"><h3><FontAwesomeIcon icon={faPencilRuler} className="fa fa-fw fa-pencil-ruler white spacing"/>Atividade</h3></div>
					</div>

					<div className="card new bg-purple">
						<div className="face face1">
							<Link to="#" className="nav-link text-white">
								<h5 className="card-text mt-4"><FontAwesomeIcon icon={faFilePowerpoint} className="fa fa-fw fa-file-powerpoint fa-4x white spacing"/></h5>
								<h5 className="card-text mt-3">Apresentação de Banco de Dados III</h5>
								<h5 className="card-text">Data: 16/09/2019</h5>
							</Link>
						</div>
						<div className="purple face face2"><h3><FontAwesomeIcon icon={faRuler} className="fa fa-fw fa-ruler white spacing"/>Seminário</h3></div>
					</div>

					<div className="card new bg-purple2">
						<div className="face face1">
							<Link to="#" className="nav-link text-white">
								<div className="card-body text-center">
									<h5 className="card-text mt-4"><FontAwesomeIcon icon={faClipboardList} className="fa fa-fw fa-clipboard-list fa-4x white spacing"/></h5>
									<h5 className="card-text mt-3">Prova de Sistemas Embarcados</h5>
									<h5 className="card-text">Data: 24/09/2019</h5>
								</div>
							</Link>
						</div>
						<div className="purple2 face face2"><h3><FontAwesomeIcon icon={faPencilAlt} className="fa fa-fw fa-pencil-alt white spacing"/>Prova</h3></div>
					</div>
				</div>
			</div>

		);
	}
}
