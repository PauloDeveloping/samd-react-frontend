import React from 'react';
import './index.css';
import InputMask from "react-input-mask";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMobile, faPhone, faMap, faListOl, faCar, faLocationArrow, faCompass, faEnvelope, faList, faEnvelopeOpen
		} from '@fortawesome/free-solid-svg-icons'

export default class EditProfile extends React.Component {

	constructor(props) {
		super(props)
		this.state = {}
	}

	render() {

		return (

			<div className="container-fluid">

				<div className="card">
					<form action="" method="POST" autocomplete="off">

						<div className="card-body">

							<legend>Dados de Contato</legend>

							<div className="form-row mt-3 align-items-center">
								<div className="col-md-6 col-xs-12">
									<FontAwesomeIcon icon={faMobile} className="fa fa-fw fa-mobile black spacing"/><label>Celular&nbsp;</label>
									<InputMask mask="(99) 99999-9999" type="text" name="celular" id="celular" className="form-control" />
								</div>

								<div className="col-md-6 col-xs-12">
									<FontAwesomeIcon icon={faPhone} className="fa fa-fw fa-phone black spacing"/><label>Telefone&nbsp;</label>
									<InputMask mask="(99) 9999-9999" type="text" name="telefone" id="telefone" className="form-control" />
								</div>
							</div>

							<legend className="mt-4">Dados de Endereço</legend>

							<div className="form-row mt-3 align-items-center">
								<div className="col-md-6 col-xs-12">
									<FontAwesomeIcon icon={faMap} className="fa fa-fw fa-map black spacing"/><label>Logradouro&nbsp;</label>
									<input type="text" name="logradouro" id="logradouro" className="form-control" />
								</div>

								<div className="col-md-6 col-xs-12">
									<FontAwesomeIcon icon={faListOl} className="fa fa-fw fa-list-ol black spacing"/><label>Número&nbsp;</label>
									<input type="number" name="numero" id="numero" className="form-control" />
								</div>
							</div>

							<div className="form-row mt-3 align-items-center">
								<div className="col-md-6 col-xs-12">
									<FontAwesomeIcon icon={faCar} className="fa fa-fw fa-car black spacing"/><label>Bairro&nbsp;</label>
									<input type="text" name="bairro" id="bairro" className="form-control" />
								</div>

								<div className="col-md-6 col-xs-12">
									<FontAwesomeIcon icon={faLocationArrow} className="fa fa-fw fa-locationArrow black spacing"/><label>Cidade&nbsp;</label>
									<input type="text" name="cidade" id="cidade" className="form-control" />
								</div>
							</div>

							<div className="form-row mt-3 align-items-center">
								<div className="col-md-6 col-xs-12">
									<FontAwesomeIcon icon={faCompass} className="fa fa-fw fa-compass black spacing"/><label>Estado&nbsp;</label>
									<input type="text" name="estado" id="estado" className="form-control" />
								</div>

								<div className="col-md-6 col-xs-12">
									<FontAwesomeIcon icon={faEnvelope} className="fa fa-fw fa-envelope black spacing"/><label>CEP&nbsp;</label>
									<InputMask mask="99999-999" type="text" name="cep" id="cep" className="form-control" />
								</div>
							</div>

							<legend className="mt-4">Notificações</legend>

							<div className="form-row mt-3">
								<div className="custom-control custom-switch">
									<input type="checkbox" className="custom-control-input" id="customSwitch1" />
									<label className="custom-control-label" for="customSwitch1">Notifições de eventos, vagas de estágio, notícias e comunicados.</label>
								</div>
							</div>

							<div className="form-row mt-3">
								<div className="custom-control custom-switch">
									<input type="checkbox" className="custom-control-input" id="customSwitch2" />
									<label className="custom-control-label" for="customSwitch2">Notifições de datas de provas, seminários, atividades e novos materiais de aula.</label>
								</div>
							</div>
						</div>

						<div className="card-footer text-center">
							<button type="submit" className="btn btn-post spacing zoom">Salvar</button>
							<button type="reset" className="btn btn-clear zoom">Cancelar</button>
						</div>

					</form>
				</div>

			</div>

		);
	}
}
