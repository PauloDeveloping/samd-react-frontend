import React from 'react'
import './index.css'
import { Link } from 'react-router-dom'
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
								<button className="btn btn-custom-purple-mural mt-2 zoom" data-toggle="modal" data-target="#modal"><FontAwesomeIcon icon={faChevronRight} className="fa fa-fw fa-chevron-right white spacing"/>Solicitar</button>
							</div>
						</Link>
					</div>

					<div className="card bg-purple2">
						<Link className="nav-link text-white">
							<div className="card-body text-center">
								<h3 className="mt-4"><strong><FontAwesomeIcon icon={faEdit} className="fa fa-fw fa-edit white spacing"/>Declaração de matrícula</strong></h3>
								<button className="btn btn-custom-purple2-mural mt-2 zoom" data-toggle="modal" data-target="#modal2"><FontAwesomeIcon icon={faChevronRight} className="fa fa-fw fa-chevron-right white spacing"/>Solicitar</button>
							</div>
						</Link>
					</div>

					<div className="card bg-orange">
						<Link className="nav-link text-white">
							<div className="card-body text-center">
								<h3 className="mt-4"><strong><FontAwesomeIcon icon={faIdCard} className="fa fa-fw fa-id-card white spacing"/>Solicitação do cartão escolar</strong></h3>
								<button className="btn btn-custom-orange-mural mt-2 zoom" data-toggle="modal" data-target="#modal3"><FontAwesomeIcon icon={faChevronRight} className="fa fa-fw fa-chevron-right white spacing"/>Solicitar</button>
							</div>
						</Link>
					</div>

					<div className="card bg-blue">
						<Link className="nav-link text-white">
							<div className="card-body text-center">
								<h3 className="mt-4"><strong><FontAwesomeIcon icon={faBook} className="fa fa-fw fa-book white spacing"/>Aproveitamento de estudos</strong></h3>
								<button className="btn btn-custom-blue-mural mt-2 zoom" data-toggle="modal" data-target="#modal4"><FontAwesomeIcon icon={faChevronRight} className="fa fa-fw fa-chevron-right white spacing"/>Solicitar</button>
							</div>
						</Link>
					</div>
				</div>

				<div className="modal fade" id="modal" tabindex="-1" role="dialog" aria-labelledby="ModalLabel" aria-hidden="true">
					<div className="modal-dialog" role="document">
						<div className="modal-content">
							<div className="modal-header">
								<h5 className="modal-title" id="ModalLabel"><i className="fas fa-id-badge spacing"></i>Carteirinha escolar</h5>
								<button type="button" className="close" data-dismiss="modal" aria-label="Fechar">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							<div className="modal-body">
								<h5 className="justified">
									<form action="" method="POST" autocomplete="off">
										<div className="card-body">
											<div className="form-row align-items-center">
												<div className="col-md-12 col-xs-12">
													<label>Nome</label>
													<input type="text" name="nome" id="nome" className="form-control" />
												</div>
											</div>

											<div className="form-row mt-3 align-items-center">
												<div className="col-md-12 col-xs-12">
													<label>RM</label>
													<input type="text" name="rm" id="rm" className="form-control" />
												</div>
											</div>

											<div className="form-row mt-3 align-items-center">
												<div className="col-md-12 col-xs-12">
													<label>Curso</label>
													<input type="text" name="curso" id="curso" className="form-control" />
												</div>
											</div>

											<div className="form-row mt-3 align-items-center">
												<div className="col-md-12 col-xs-12">
													<label>Modúlo</label>
													<input type="text" name="modulo" id="modulo" className="form-control" />
												</div>
											</div>
										</div>
									</form>
								</h5>
							</div>
							<div className="modal-footer">
								<button type="button" className="btn btn-primary" data-dismiss="modal">Enviar</button>
							</div>
						</div>
					</div>
				</div>

				<div className="modal fade" id="modal2" tabindex="-1" role="dialog" aria-labelledby="ModalLabel" aria-hidden="true">
					<div className="modal-dialog" role="document">
						<div className="modal-content">
							<div className="modal-header">
								<h5 className="modal-title" id="ModalLabel"><i className="fas fa-edit spacing"></i>Declaração de matrícula</h5>
								<button type="button" className="close" data-dismiss="modal" aria-label="Fechar">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							<div className="modal-body">
								<h5 className="justified">A</h5>
							</div>
							<div className="modal-footer">
								<button type="button" className="btn btn-primary" data-dismiss="modal">Enviar</button>
							</div>
						</div>
					</div>
				</div>

				<div className="modal fade" id="modal3" tabindex="-1" role="dialog" aria-labelledby="ModalLabel" aria-hidden="true">
					<div className="modal-dialog" role="document">
						<div className="modal-content">
							<div className="modal-header">
								<h5 className="modal-title" id="ModalLabel"><i className="fas fa-id-card spacing"></i>Solicitação do cartão escolar</h5>
								<button type="button" className="close" data-dismiss="modal" aria-label="Fechar">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							<div className="modal-body">
								<h5 className="justified">
									<form action="" method="POST" autocomplete="off">
										<div className="card-body">
											<div className="form-row align-items-center">
												<div className="col-md-12 col-xs-12">
													<label>Nome</label>
													<input type="text" name="nome" id="nome" className="form-control" />
												</div>
											</div>

											<div className="form-row mt-3 align-items-center">
												<div className="col-md-12 col-xs-12">
													<label>RM</label>
													<input type="text" name="rm" id="rm" className="form-control" />
												</div>
											</div>

											<div className="form-row mt-3 align-items-center">
												<div className="col-md-12 col-xs-12">
													<label>Curso</label>
													<input type="text" name="curso" id="curso" className="form-control" />
												</div>
											</div>

											<div className="form-row mt-3 align-items-center">
												<div className="col-md-12 col-xs-12">
													<label>Modúlo</label>
													<input type="text" name="modulo" id="modulo" className="form-control" />
												</div>
											</div>
										</div>
									</form>
								</h5>
							</div>
							<div className="modal-footer">
								<button type="button" className="btn btn-primary" data-dismiss="modal">Enviar</button>
							</div>
						</div>
					</div>
				</div>

				<div className="modal fade" id="modal4" tabindex="-1" role="dialog" aria-labelledby="ModalLabel" aria-hidden="true">
					<div className="modal-dialog" role="document">
						<div className="modal-content">
							<div className="modal-header">
								<h5 className="modal-title" id="ModalLabel"><i className="fas fa-book spacing"></i>Aproveitamento de estudos</h5>
								<button type="button" className="close" data-dismiss="modal" aria-label="Fechar">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							<div className="modal-body">
								<h5 className="justified">
									<form action="" method="POST" autocomplete="off">
										<div className="card-body">
											<div className="form-row align-items-center">
												<div className="col-md-12 col-xs-12">
													<label>Nome</label>
													<input type="text" name="nome" id="nome" className="form-control" />
												</div>
											</div>

											<div className="form-row mt-3 align-items-center">
												<div className="col-md-12 col-xs-12">
													<label>RM</label>
													<input type="text" name="rm" id="rm" className="form-control" />
												</div>
											</div>

											<div className="form-row mt-3 align-items-center">
												<div className="col-md-12 col-xs-12">
													<label>Curso</label>
													<input type="text" name="curso" id="curso" className="form-control" />
												</div>
											</div>

											<div className="form-row mt-3 align-items-center">
												<div className="col-md-12 col-xs-12">
													<label>Modúlo</label>
													<input type="text" name="modulo" id="modulo" className="form-control" />
												</div>
											</div>

											<div className="form-row mt-3 align-items-center">
												<div className="col-md-12 col-xs-12">
													<label>Certificado</label>
													<input type="file" name="certificado" id="certificado" className="form-control-file" />
												</div>
											</div>
										</div>
									</form>
								</h5>
							</div>
							<div className="modal-footer">
								<button type="button" className="btn btn-primary" data-dismiss="modal">Enviar</button>
							</div>
						</div>
					</div>
				</div>
			</div>

		);
	}
}
