import React from 'react';
import './index.css';
import InputMask from "react-input-mask";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIdBadge, faEnvelopeOpen, faTag, faGraduationCap, faBookOpen, faFile, faIdCard, faCalendar
		} from '@fortawesome/free-solid-svg-icons'

export default class Tasks extends React.Component {

	constructor(props) {
		super(props)
	}

	componentDidMount() {

	}

	render() {

		return (

			<div className="card">
				<form id="insertTeacherForm" autocomplete="off">

					<div className="card-body">

						<legend className="black">Dados Pessoais</legend>

						<div className="form-row">
							<div className="col-md-12 col-xs-12">
								<label for="teacherNameTxt"><FontAwesomeIcon icon={faIdBadge} className="fa fa-fw fa-id-badge black spacing"/>Nome completo</label>
								<input type="text" name="insertTeacherFullnameTxt" id="insertTeacherFullnameTxt" className="form-control" placeholder="Nome completo" />
							</div>
						</div>

						<div className="form-row mt-2">
							<div className="col-md-6 col-xs-12 mt-2">
								<label for="teacherRaTxt"><FontAwesomeIcon icon={faIdCard} className="fa fa-fw fa-id-card black spacing"/>RA</label>
								<input type="text" className="form-control" placeholder="RA" />
							</div>

							<div className="col-md-6 col-xs-12 mt-2">
								<label><FontAwesomeIcon icon={faEnvelopeOpen} className="fa fa-fw fa-id-envelope-open black spacing"/>E-mail institucional</label>
								<input name="insertTeacherInstEmailTxt" id="insertTeacherInstEmailTxt" type="text" className="form-control" placeholder="nome@etec.sp.gov.br" />
							</div>
						</div>

						<legend className="mt-2 black">Dados da Tarefa</legend>

						<div className="form-row">
							<div className="col-md-6 col-xs-12 mt-2">
								<label for="teacherRequestSlc"><FontAwesomeIcon icon={faTag} className="fa fa-fw fa-tag black spacing"/>Tipo de Tarefa</label>
								<select name="teacherRequestSlc" id="teacherRequestSlc" className="custom-select">
									<option>- Selecione -</option>
									<option value="1">Prova</option>
									<option value="2">Atividade</option>
									<option value="3">Seminário</option>
								</select>
							</div>

							<div className="col-md-6 col-xs-12 mt-2">
								<label><FontAwesomeIcon icon={faGraduationCap} className="fa fa-fw fa-graduation-cap black spacing"/>Turma</label>
								<input name="insertTeacherInstTurmTxt" id="insertTeacherInstTurmTxt" type="text" className="form-control" placeholder="3° DSN" />
							</div>
						</div>
						
						<div className="form-row mt-2">
							<div className="col-md-6 col-xs-12 mt-2">
								<label><FontAwesomeIcon icon={faBookOpen} className="fa fa-fw fa-book-open black spacing"/>Matéria</label>
								<input name="insertTeacherInstMatTxt" id="insertTeacherInstMatTxt" type="text" className="form-control" placeholder="Banco de Dados III" />
							</div>

							<div className="col-md-6 col-xs-12 mt-2">
								<label for="teacherDateRequestTxt"><FontAwesomeIcon icon={faCalendar} className="fa fa-fw fa-calendar black spacing"/>Data Tarefa</label>
								<InputMask mask="99/99/9999" type="text" name="teacherDateRequestTxt" id="teacherDateRequestTxt" className="form-control" placeholder="dd/mm/yyyy" />
							</div>
						</div>
						
						<div className="form-row mt-4">
							<div className="col-md-12 col-xs-12">
								<label for="desc_publicacao"><FontAwesomeIcon icon={faFile} className="fa fa-fw fa-file black spacing"/>Detalhes da Tarefa</label>
								<textarea className="border-custom" name="desc_publicacao" id="desc_publicacao"></textarea>
							</div>
						</div>

					</div>

					<div className="card-footer text-center">
						<div className="row">
							<div className="col-md-12 col-xs-12">
								<button type="button" className="btn btn-post zoom spacing" id="insertTeacherBtn">Cadastrar</button>
								<button type="button" className="btn btn-clear zoom" id="clearInsertTeacherFormBtn">Limpar</button>
							</div>
						</div>
					</div>

				</form>
			</div>


		);
	}
}
