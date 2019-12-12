import React from 'react'
import './index.css'
import { Link } from 'react-router-dom'
import SamdTable from '../../../../components/SamdTable'
import user from '../../../../assets/image/user_icon.png'

export default class StudentMentions extends React.Component {

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
							</div>

							<div id="collapseOne" className="collapse hide" aria-labelledby="headingOne" data-parent="#accordionExample">
								<div className="card">
									<div className="card-body">
										<div id="table" className="table-editable">
											<table className="table table-bordered table-responsive-md table-striped text-center">
												<thead>
													<tr>
														<th className="text-center">Modo de Avaliação</th>
														<th className="text-center">Período</th>
														<th className="text-center">Menção</th>
														<span className="table-add float-center mb-3 mr-2"><button type="button"
															className="mt-2 btn btn-success btn-rounded btn-sm my-0">Adicionar Linha</button></span>
													</tr>
													
												</thead>
												<tbody>
													<tr>
														<td className="pt-3-half" contenteditable="false">
															<select name="teacherRequestSlc" id="teacherRequestSlc" className="custom-select">
																<option value="1">Avaliação Terórica</option>
																<option value="2">Avaliação Prática</option>
																<option value="3">Observação Direta</option>
															</select>
														</td>
														<td className="pt-3-half" contenteditable="false" data-type="date" >18/09/2019 a 18/09/2019</td>
														<td className="pt-3-half" contenteditable="false">MB</td>
														<td>
															<span className="table-remove"><button type="button"
																className="btn btn-danger btn-rounded btn-sm my-0">Remover</button></span>
														</td>
													</tr>

													<tr>
														<td className="pt-3-half" contenteditable="false">
															<select name="teacherRequestSlc" id="teacherRequestSlc" className="custom-select">
																<option value="1">Avaliação Terórica</option>
																<option value="2">Avaliação Prática</option>
																<option value="3">Observação Direta</option>
															</select>
														</td>
														<td className="pt-3-half" contenteditable="false" data-type="date" >18/09/2019 a 18/09/2019</td>
														<td className="pt-3-half" contenteditable="true">MB</td>
														<td>
															<span className="table-remove"><button type="button"
																className="btn btn-danger btn-rounded btn-sm my-0">Remover</button></span>
														</td>
													</tr>

													<tr>
														<td className="pt-3-half" contenteditable="false">
															<select name="teacherRequestSlc" id="teacherRequestSlc" className="custom-select">
																<option value="1">Avaliação Terórica</option>
																<option value="2">Avaliação Prática</option>
																<option value="3">Observação Direta</option>
															</select>
														</td>
														<td className="pt-3-half" contenteditable="false" data-type="date" >18/09/2019 a 18/09/2019</td>
														<td className="pt-3-half" contenteditable="true">MB</td>
														<td>
															<span className="table-remove"><button type="button"
																className="btn btn-danger btn-rounded btn-sm my-0">Remover</button></span>
														</td>
													</tr>

													<tr className="hide">
														<td className="pt-3-half" contenteditable="false">
															<select name="teacherRequestSlc" id="teacherRequestSlc" className="custom-select">
																<option value="1">Avaliação Terórica</option>
																<option value="2">Avaliação Prática</option>
																<option value="3">Observação Direta</option>
															</select>
														</td>
														<td className="pt-3-half" contenteditable="false" data-type="date" >18/09/2019 a 18/09/2019</td>
														<td className="pt-3-half" contenteditable="true">MB</td>
														<td>
															<span className="table-remove"><button type="button"
																className="btn btn-danger btn-rounded btn-sm my-0">Remover</button></span>
														</td>
													</tr>
												</tbody>
											</table>
										</div>
									</div>
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
							</div>

							<div id="collapseTwo" className="collapse hide" aria-labelledby="headingTwo" data-parent="#accordionExample">
								<div className="card">
									<div className="card-body">
										<div id="table" className="table-editable">
											<table className="table table-bordered table-responsive-md table-striped text-center">
												<thead>
													<tr>
														<th className="text-center">Modo de Avaliação</th>
														<th className="text-center">Período</th>
														<th className="text-center">Menção</th>
														<span className="table-add float-center mb-3 mr-2"><button type="button"
															className="mt-2 btn btn-success btn-rounded btn-sm my-0">Adicionar Linha</button></span>
													</tr>
												</thead>
												<tbody>
													<tr>
														<td className="pt-3-half" contenteditable="false">
															<select name="teacherRequestSlc" id="teacherRequestSlc" className="custom-select">
																<option value="1">Avaliação Terórica</option>
																<option value="2">Avaliação Prática</option>
																<option value="3">Observação Direta</option>
															</select>
														</td>
														<td className="pt-3-half" contenteditable="false" data-type="date" >18/09/2019 a 18/09/2019</td>
														<td className="pt-3-half" contenteditable="true">MB</td>
														<td>
															<span className="table-remove"><button type="button"
																className="btn btn-danger btn-rounded btn-sm my-0">Remover</button></span>
														</td>
													</tr>

													<tr>
														<td className="pt-3-half" contenteditable="false">
															<select name="teacherRequestSlc" id="teacherRequestSlc" className="custom-select">
																<option value="1">Avaliação Terórica</option>
																<option value="2">Avaliação Prática</option>
																<option value="3">Observação Direta</option>
															</select>
														</td>
														<td className="pt-3-half" contenteditable="false" data-type="date" >18/09/2019 a 18/09/2019</td>
														<td className="pt-3-half" contenteditable="true">MB</td>
														<td>
															<span className="table-remove"><button type="button"
																className="btn btn-danger btn-rounded btn-sm my-0">Remover</button></span>
														</td>
													</tr>

													<tr>
														<td className="pt-3-half" contenteditable="false">
															<select name="teacherRequestSlc" id="teacherRequestSlc" className="custom-select">
																<option value="1">Avaliação Terórica</option>
																<option value="2">Avaliação Prática</option>
																<option value="3">Observação Direta</option>
															</select>
														</td>
														<td className="pt-3-half" contenteditable="false" data-type="date" >18/09/2019 a 18/09/2019</td>
														<td className="pt-3-half" contenteditable="true">MB</td>
														<td>
															<span className="table-remove"><button type="button"
																className="btn btn-danger btn-rounded btn-sm my-0">Remover</button></span>
														</td>
													</tr>

													<tr className="hide">
														<td className="pt-3-half" contenteditable="false">
															<select name="teacherRequestSlc" id="teacherRequestSlc" className="custom-select">
																<option value="1">Avaliação Terórica</option>
																<option value="2">Avaliação Prática</option>
																<option value="3">Observação Direta</option>
															</select>
														</td>
														<td className="pt-3-half" contenteditable="false" data-type="date" >18/09/2019 a 18/09/2019</td>
														<td className="pt-3-half" contenteditable="true">MB</td>
														<td>
															<span className="table-remove"><button type="button"
																className="btn btn-danger btn-rounded btn-sm my-0">Remover</button></span>
														</td>
													</tr>
												</tbody>
											</table>
										</div>
									</div>
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
							</div>

							<div id="collapseThree" className="collapse hide" aria-labelledby="headingThree" data-parent="#accordionExample">
								<div className="card">
									<div className="card-body">
										<div id="table" className="table-editable">
											<table className="table table-bordered table-responsive-md table-striped text-center">
												<thead>
													<tr>
														<th className="text-center">Modo de Avaliação</th>
														<th className="text-center">Período</th>
														<th className="text-center">Menção</th>
														<span className="table-add float-center mb-3 mr-2"><button type="button"
															className="mt-2 btn btn-success btn-rounded btn-sm my-0">Adicionar Linha</button></span>
													</tr>
												</thead>
												<tbody>
													<tr>
														<td className="pt-3-half" contenteditable="false">
															<select name="teacherRequestSlc" id="teacherRequestSlc" className="custom-select">
																<option value="1">Avaliação Terórica</option>
																<option value="2">Avaliação Prática</option>
																<option value="3">Observação Direta</option>
															</select>
														</td>
														<td className="pt-3-half" contenteditable="false" data-type="date" >18/09/2019 a 18/09/2019</td>
														<td className="pt-3-half" contenteditable="true">MB</td>
														<td>
															<span className="table-remove"><button type="button"
																className="btn btn-danger btn-rounded btn-sm my-0">Remover</button></span>
														</td>
													</tr>

													<tr>
														<td className="pt-3-half" contenteditable="false">
															<select name="teacherRequestSlc" id="teacherRequestSlc" className="custom-select">
																<option value="1">Avaliação Terórica</option>
																<option value="2">Avaliação Prática</option>
																<option value="3">Observação Direta</option>
															</select>
														</td>
														<td className="pt-3-half" contenteditable="false" data-type="date" >18/09/2019 a 18/09/2019</td>
														<td className="pt-3-half" contenteditable="true">MB</td>
														<td>
															<span className="table-remove"><button type="button"
																className="btn btn-danger btn-rounded btn-sm my-0">Remover</button></span>
														</td>
													</tr>

													<tr>
														<td className="pt-3-half" contenteditable="false">
															<select name="teacherRequestSlc" id="teacherRequestSlc" className="custom-select">
																<option value="1">Avaliação Terórica</option>
																<option value="2">Avaliação Prática</option>
																<option value="3">Observação Direta</option>
															</select>
														</td>
														<td className="pt-3-half" contenteditable="false" data-type="date" >18/09/2019 a 18/09/2019</td>
														<td className="pt-3-half" contenteditable="true">MB</td>
														<td>
															<span className="table-remove"><button type="button"
																className="btn btn-danger btn-rounded btn-sm my-0">Remover</button></span>
														</td>
													</tr>

													<tr className="hide">
														<td className="pt-3-half" contenteditable="false">
															<select name="teacherRequestSlc" id="teacherRequestSlc" className="custom-select">
																<option value="1">Avaliação Terórica</option>
																<option value="2">Avaliação Prática</option>
																<option value="3">Observação Direta</option>
															</select>
														</td>
														<td className="pt-3-half" contenteditable="false" data-type="date" >18/09/2019 a 18/09/2019</td>
														<td className="pt-3-half" contenteditable="true">MB</td>
														<td>
															<span className="table-remove"><button type="button"
																className="btn btn-danger btn-rounded btn-sm my-0">Remover</button></span>
														</td>
													</tr>
												</tbody>
											</table>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="card-footer text-center">
					<button type="submit" className="btn btn-post zoom spacing">Enviar</button>
					<Link to="/teacher/editarPerfil"><button type="submit" className="btn btn-clear zoom">PTD</button></Link>
				</div>
			</div>

		);
	}

}
