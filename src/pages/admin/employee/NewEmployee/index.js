import React from 'react';
import './index.css';
import InputMask from "react-input-mask";
import IntlCurrencyInput from 'react-intl-currency-input';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIdBadge, faCalendar, faIdCard, faVenusMars, faEnvelope, faEnvelopeOpen, faCreditCard,
		 faImage, faMobile, faTag, faList
		} from '@fortawesome/free-solid-svg-icons'

const currencyConfig = {
	locale: "pt-BR",
	formats: {
		number: {
			BRL: {
				style: "currency",
				currency: "BRL",
				minimumFractionDigits: 2,
				minimumFractionDigits: 2,
			},
		},
	},
};

export default class NewEmployee extends React.Component {

	constructor(props) {
		super(props)
	}

	render() {


		return (

			<div className="card">
				<form action="" method="POST" autocomplete="off">

					<div className="card-body">

						<legend>Dados Pessoais</legend>

						<div className="form-row">
							<div className="col-md-9 col-xs-12">
								<FontAwesomeIcon icon={faIdBadge} className="fa fa-fw fa-id-badge black spacing"/><label>Nome completo</label>
								<input type="text" name="nome_completo" id="nome_completo" className="form-control" />
							</div>

							<div className="col-md-3 col-xs 6">
								<FontAwesomeIcon icon={faCalendar} className="fa fa-fw fa-calendar black spacing"/><label>Data de nascimento</label>
								<InputMask mask="99/99/9999" type="text" name="data_nascimento" id="data_nascimento" className="form-control" />
							</div>
						</div>

						<div className="form-row mt-4">
							<div className="col-md-6 col-xs-12">
								<FontAwesomeIcon icon={faIdCard} className="fa fa-fw fa-id-card black spacing"/><label>CPF</label>
								<InputMask mask="999.999.999-99" type="text" name="cpf" id="cpf" className="form-control" />
							</div>

							<div className="col-md-6 col-xs-12">
								<FontAwesomeIcon icon={faVenusMars} className="fa fa-fw fa-venus-mars black spacing"/><label>Gênero</label>
								<select name="genero" id="genero" className="custom-select">
									<option>- Selecione -</option>
									<option value="m">Masculino</option>
									<option value="f">Feminino</option>
								</select>
							</div>
						</div>

						<div className="form-row mt-4">
							<div className="col-md-6 col-xs-12">
								<FontAwesomeIcon icon={faEnvelope} className="fa fa-fw fa-envelope black spacing"/><label>E-mail pessoal</label>
								<input type="text" name="email_pessoal" id="email_pessoal" className="form-control" />
							</div>

							<div className="col-md-6 col-xs-12">
								<FontAwesomeIcon icon={faEnvelopeOpen} className="fa fa-fw fa-envelope-open black spacing"/><label>E-mail institucional</label>
								<input type="text" name="email_institucional" id="email_institucional" className="form-control" />
							</div>
						</div>

						<div className="form-row mt-4 align-items-center">
							<div className="col-md-6 col-xs-12">
								<FontAwesomeIcon icon={faMobile} className="fa fa-fw fa-mobile black spacing"/><label>Celular</label>
								<InputMask mask="(99) 99999-9999" type="text" name="celular" id="celular" className="form-control" />
							</div>

							<div className="col-md-6 col-xs-6">
								<FontAwesomeIcon icon={faImage} className="fa fa-fw fa-image black spacing"/><label>Foto</label>
								<input type="file" name="foto" id="foto" className="form-control-file" />
							</div>
						</div>

						<legend className="mt-4">Dados do Cargo</legend>

						<div className="form-row">
							<div className="col-md-4 col-xs-12">
								<FontAwesomeIcon icon={faTag} className="fa fa-fw fa-tag black spacing"/><label>Cargo</label>
								<input type="text" name="nome_cargo" id="nome_cargo" className="form-control" />
							</div>

							<div className="col-md-4 col-xs-12">
								<FontAwesomeIcon icon={faList} className="fa fa-fw fa-list black spacing"/><label>Nº do registro</label>
								<input type="text" name="reg_funcionario" id="reg_funcionario" className="form-control" />
							</div>

							<div className="col-md-4 col-xs-12">
								<FontAwesomeIcon icon={faCreditCard} className="fa fa-fw fa-credit-card black spacing"/><label>Salário</label>
								<IntlCurrencyInput currency="BRL" config={currencyConfig} type="text" name="salario" id="salario" className="form-control" prefix="R$ " maxlength="12" />
							</div>

						</div>

					</div>

					<div className="card-footer text-center">
						<div className="row">
							<div className="col-md-12 col-xs-12">
								<button type="submit" className="btn btn-post zoom spacing">Cadastrar</button>
								<button type="reset" className="btn btn-clear zoom">Limpar</button>
							</div>
						</div>
					</div>

				</form>
			</div>



		);
	}
}
