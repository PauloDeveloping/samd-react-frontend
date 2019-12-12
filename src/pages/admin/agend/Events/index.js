import React from 'react'
import './index.css'


export default class Events extends React.Component {

	constructor(props) {
		super(props)
	}

	render() {

		return (
			<div className="container-fluid">

				<div className="row align-items-center dash-title">

					<div className="col-md-6 col-xs-12">
						<h2 className="text-white">Cadastrar eventos</h2>
					</div>

				</div>

				<div className="card">
					<form action="" method="POST" autocomplete="off">

						<div className="card-body">

							<div className="form-row">
								<div className="col-md-12 col-sm-12">
									<select className="custom-select">
										<option selected>Tipo de evento: </option>
										<option value="1">Eventos</option>
										<option value="2">Notícia</option>
										<option value="3">Publicações</option>
										<option value="4">Comunicado</option>
									</select>
								</div>
							</div>

							<div className="form-row mt-2">
								<div className="col-md-6 col-xs-6">
									<input type="text" name="titulo-publicacao" id="titulo-publicacao" className="form-control border-custom" placeholder="Título" />
								</div>

								<div className="col-md-6 col-xs-6">
									<input type="date" name="data-publicacao" id="data-publicacao" className="form-control border-custom" placeholder="Data - dd/mm/aaaa" />
								</div>
							</div>

							<div className="form-row mt-4">
								<div className="col-md-12 col xs-12">
									<label className="fas fa-edit spacing"></label><label for="conteudo">Descrição</label>
									<textarea className="border-custom" name="conteudo" id="conteudo"></textarea>
								</div>
							</div>

						</div>

						<div className="card-footer text-center">
							<button type="submit" className="btn btn-post zoom">Cadastrar</button>
						</div>

					</form>
				</div>
			</div>


		);

	}
}
