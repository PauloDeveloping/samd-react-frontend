import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'
import user from '../../../../assets/image/user_icon.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEdit, faFile
		} from '@fortawesome/free-solid-svg-icons'

export default class PresenceList extends React.Component {

	constructor(props) {
		super(props)
	}

	componentDidMount() {

	}

	render() {

		return (

			<div className="container-fluid">

				<div className="row">
					<div className="accordion" id="accordionExample">
						<div className="card">
							<div className="card-header ch-aluno" id="headingOne">
								<button className="btn btn-outline-light" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
									<figure>
										<img src={user} alt="User Photo" id="img_aluno"/>
									</figure>
									<div id="dv-teste">
										<Link id="bg-teste">17001</Link>
										<Link id="bg-teste">Thais Franco Dias</Link>
										<Link id="bg-teste">19 Anos</Link>
										<Link></Link>
										<Link id="bg2-teste">3º DSN</Link>
										<Link id="bg-teste">Turma B</Link>
									</div>

								</button>
								<div className="form-check">
									<input type="checkbox" className="form-check-input" id="exampleCheck1" />
									<label className="form-check-label" for="exampleCheck1">2,5</label>
								</div>
								<div className="form-check">
									<input type="checkbox" className="form-check-input" id="exampleCheck2" />
									<label className="form-check-label" for="exampleCheck1">1,25</label>
								</div>
							</div>
							<div id="collapseOne" className="collapse hide" aria-labelledby="headingOne" data-parent="#accordionExample">
								<div className="card">
									<form action="" method="POST" autocomplete="off">
										<div className="card-body">
											<div className="col-md-12 col xs-12">
												<label for="casechange"><FontAwesomeIcon icon={faEdit} className="fa fa-fw fa-edit black spacing"/>Observações Sobre o Aluno</label>
											</div>
											<textarea name="casechange" id="casechange"></textarea>
											<div className="card-footer text-center">
												<button type="submit" className="btn btn-post spacing">Ok</button>
												<button type="reset" className="btn btn-clear">Limpar</button>
											</div>
										</div>
									</form>
								</div>
							</div>
						</div>

						<div className="card">
							<div className="card-header ch-aluno" id="headingTwo">
								<button className="btn btn-outline-light" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
									<figure>
										<img src={user} alt="User Photo" id="img_aluno"/>
									</figure>
									<div id="dv-teste">
										<Link id="bg-teste">56545</Link>
										<Link id="bg-teste">Ricardo de Faria</Link>
										<Link id="bg-teste">19 Anos</Link>
										<Link></Link>
										<Link id="bg2-teste">3º DSN</Link>
										<Link id="bg-teste">Turma B</Link>
									</div>

								</button>
								<div className="form-check">
									<input type="checkbox" className="form-check-input" id="exampleCheck1" />
									<label className="form-check-label" for="exampleCheck2">2,5</label>
								</div>
								<div className="form-check">
									<input type="checkbox" className="form-check-input" id="exampleCheck2" />
									<label className="form-check-label" for="exampleCheck2">1,25</label>
								</div>
							</div>
							<div id="collapseTwo" className="collapse hide" aria-labelledby="headingTwo" data-parent="#accordionExample">
								<div className="card">
									<form action="" method="POST" autocomplete="off">
										<div className="card-body">
											<div className="col-md-12 col xs-12">
												<label for="casechange"><i className="fas fa-edit spacing"></i>Observações Sobre o Aluno</label>
											</div>
											<textarea name="casechange" id="casechange"></textarea>
											<div className="card-footer text-center">
												<button type="submit" className="btn btn-post spacing">Ok</button>
												<button type="reset" className="btn btn-clear">Limpar</button>
											</div>
										</div>
									</form>
								</div>
							</div>
						</div>

						<div className="card">
							<div className="card-header ch-aluno" id="headingThree">
								<button className="btn btn-outline-light" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
									<figure>
										<img src={user} alt="User Photo" id="img_aluno"/>
									</figure>
									<div id="dv-teste">
										<Link id="bg-teste">12345</Link>
										<Link id="bg-teste">Luis da Silva Costa</Link>
										<Link id="bg-teste">19 Anos</Link>
										<Link></Link>
										<Link id="bg2-teste">3º DSN</Link>
										<Link id="bg-teste">Turma B</Link>
									</div>

								</button>
								<div className="form-check">
									<input type="checkbox" className="form-check-input" id="exampleCheck1" />
									<label className="form-check-label" for="exampleCheck3">2,5</label>
								</div>
								<div className="form-check">
									<input type="checkbox" className="form-check-input" id="exampleCheck2" />
									<label className="form-check-label" for="exampleCheck3">1,25</label>
								</div>
							</div>
							<div id="collapseThree" className="collapse hide" aria-labelledby="headingThree" data-parent="#accordionExample">
								<div className="card">
									<form action="" method="POST" autocomplete="off">
										<div className="card-body">
											<div className="col-md-12 col xs-12">
												<label for="casechange"><i className="fas fa-edit spacing"></i>Observações Sobre o Aluno</label>
												<textarea name="casechange" id="casechange"></textarea>
											</div>
											<div className="card-footer text-center">
												<button type="submit" className="btn btn-post spacing">Ok</button>
												<button type="reset" className="btn btn-clear">Limpar</button>
											</div>
										</div>
									</form>
								</div>
							</div>
						</div>

						<hr className="bg" />

						<div className="card ch-conteudo">
							<form action="" method="POST" autocomplete="off">

								<div className="card-body">

									<div className="form-row mt-4">
										<div className="col-md-12 col xs-12">
											<label for="conteudo"><FontAwesomeIcon icon={faEdit} className="fa fa-fw fa-file black spacing"/>Conteúdo Programado</label>
											<textarea className="border-custom" name="conteudo" id="conteudo"></textarea>
										</div>
									</div>

								</div>

							</form>
						</div>
					</div>
				</div>
				<div className="card-footer text-center">
					<button type="submit" className="btn btn-post spacing">Enviar</button>
					<Link to="/teacher/ptd"><button type="submit" className="btn btn-clear">PTD</button></Link>
				</div>
			</div>


		);
	}
}
