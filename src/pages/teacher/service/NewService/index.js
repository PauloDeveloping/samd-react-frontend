import React from 'react';
import './index.css';
import InputMask from "react-input-mask";

export default class ServiceRequest extends React.Component {

	constructor(props) {
		super(props);
		this.state = {}
	}

	componentDidMount() {

	}

	render() {

		return (

			<div className="card">
				<form id="insertTeacherForm" autocomplete="off">

					<div className="card-body">

						<legend>Dados Pessoais</legend>

						<div className="form-row">
							<div className="col-md-9 col-xs-12 mt-2">
								<label for="teacherNameTxt"><i className="fas fa-id-badge spacing"></i>Nome completo</label>
								<input type="text" name="insertTeacherFullnameTxt" id="insertTeacherFullnameTxt" className="form-control" placeholder="Nome completo" />
							</div>


							<div className="col-md-4 col-xs-12 mt-2">
								<label for="teacherRaTxt"><i className="fas fa-id-card spacing"></i>RA</label>
								<input type="text" className="form-control" placeholder="RA" />
							</div>

							<div className="col-md-5 col-xs-12 mt-2">
								<label><i className="fas fa-envelope-open spacing"></i>E-mail institucional</label>
								<input name="insertTeacherInstEmailTxt" id="insertTeacherInstEmailTxt" type="text" className="form-control" placeholder="nome@etec.sp.gov.br" />
							</div>

						</div>

						<legend className="mt-2">Dados da Requisição</legend>

						<div className="form-row mt-4">
							<div className="col-md-4 col-xs-12">
								<label for="teacherRequestSlc"><i className="fas fa-list spacing"></i>Tipo de Requisição</label>
								<select name="teacherRequestSlc" id="teacherRequestSlc" className="custom-select">
									<option>- Selecione -</option>
									<option value="1">Laboratório</option>
									<option value="2">Auditório</option>
									<option value="3">Sala</option>
								</select>
							</div>

							<div className="col-md-3 col-xs 6 mt-2">
								<label for="teacherDateRequestTxt"><i className="fas fa-calendar spacing"></i>Data Requisição</label>
								<InputMask mask="99/99/9999" type="text" name="teacherDateRequestTxt" id="teacherDateRequestTxt" className="form-control" placeholder="dd/mm/yyyy" />
							</div>

						</div>
						<div className="form-row mt-4">
							<div className="col-md-12 col xs-12">
								<label for="desc_publicacao"><i className="fas fa-file spacing"></i>Detalhe da Requisição</label>
								<textarea className="border-custom" name="desc_publicacao" id="desc_publicacao"></textarea>
							</div>
						</div>

					</div>

					<div className="card-footer text-center">
						<div className="row">
							<div className="col-md-12 col-xs-12">
								<button type="button" className="btn btn-post zoom" id="insertTeachertBtn">Cadastrar</button>
								<button type="button" className="btn btn-clear zoom" id="clearInsertTeacherFormBtn">Limpar</button>
							</div>
						</div>
					</div>
				</form>
			</div>

		);
	}
}
