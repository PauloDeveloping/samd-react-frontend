import React from 'react';
import './index.css';
import InputMask from "react-input-mask";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIdBadge, faCalendar, faIdCard, faVenusMars, faEdit, faEnvelopeOpen, faEnvelope, faMobile, faImage
		} from '@fortawesome/free-solid-svg-icons'


export default class NewStudent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {

        return (

            <div className="card">
                <form id="insertStudentForm" autoComplete="off">

                    <div className="card-body">

                        <legend>Dados Pessoais</legend>

                        <div className="form-row">
                            <div className="col-md-9 col-xs-12">
                                <FontAwesomeIcon icon={faIdBadge} className="fa fa-fw fa-id-badge black spacing"/><label className="fas fa-id-badge spacing"></label><label for="studentNametxt">Nome completo</label>
                                <input type="text" name="insertStudentFullnameTxt" id="insertStudentNameTxt" className="form-control" placeholder="Nome completo" />
                            </div>

                            <div className="col-md-3 col-xs 6">
                                <FontAwesomeIcon icon={faCalendar} className="fa fa-fw fa-calendar black spacing"/><label for="studentBirthdateTxt">Data de nascimento</label>
                                <InputMask mask="99/99/9999" type="text" name="insertStudentBirthdateTxt" id="insertStudentBirthdateTxt" className="form-control" placeholder="dd/mm/yyyy" />
                            </div>
                        </div>

                        <div className="form-row mt-4">
                            <div className="col-md-4 col-xs-12">
                                <FontAwesomeIcon icon={faIdCard} className="fa fa-fw fa-id-card black spacing"/><label for="studentCpfTxt">CPF</label>
                                <InputMask mask="999.999.999-99" type="text" name="insertStudentCpfTxt" id="insertStudentCpfTxt" className="form-control" placeholder="CPF" />
                            </div>

                            <div className="col-md-4 col-xs-12">
                                <FontAwesomeIcon icon={faVenusMars} className="fa fa-fw fa-venus-mars black spacing"/><label for="studentGenreSlc">Gênero</label>
                                <select name="insertStudentGenreSlc" id="insertStudentGenreSlc" className="custom-select">
                                    <option>- Selecione -</option>
                                    <option value="M">Masculino</option>
                                    <option value="F">Feminino</option>
                                    <option value="O">Outro</option>
                                </select>
                            </div>

                            <div className="col-md-4 col-xs-12">
                                <FontAwesomeIcon icon={faEdit} className="fa fa-fw fa-edit black spacing"/><label for="studentRmTxt">Nº da Matrícula (RM)</label>
                                <input type="number" name="insertStudentRmTxt" id="insertStudentRmTxt" className="form-control" placeholder="RM" />
                            </div>
                        </div>

                        <div className="form-row mt-4">
                            <div className="col-md-6 col-xs-12">
                                <FontAwesomeIcon icon={faEnvelope} className="fa fa-fw fa-envelope black spacing"/><label >E-mail pessoal</label>
                                <input type="text" name="insertStudentPersEmailTxt" id="insertStudentPersEmailTxt" className="form-control" placeholder="nome@dominio.com" />
                            </div>

                            <div className="col-md-6 col-xs-12">
                                <FontAwesomeIcon icon={faVenusMars} className="fa fa-fw fa-envelope-open black spacing"/><label>E-mail institucional</label>
                                <input type="text" name="insertStudentInstEmailTxt" id="insertStudentInstEmailTxt" className="form-control" placeholder="nome@dominio.com" />
                            </div>
                        </div>

                        <div className="form-row mt-4 align-items-center">
                            <div className="col-md-6 col-xs-12">
                                <FontAwesomeIcon icon={faMobile} className="fa fa-fw fa-mobile black spacing"/><label>Celular</label>
                                <InputMask mask="(99) 99999-9999" type="text" name="insertStudentCelTxt" id="insertStudentCellTxt" className="form-control" placeholder="(00)00000-0000" />
                            </div>

                            <div className="col-md-6 col-xs-6">
                                <FontAwesomeIcon icon={faImage} className="fa fa-fw fa-image black spacing"/><label>Foto</label>
                                <input type="file" name="insertStudentPhotoTxt" id="insertStudentPhotoTxt" className="form-control-file" />
                            </div>
                        </div>

                    </div>

                    <div className="card-footer text-center">
                        <div className="row">
                            <div className="col-md-12 col-xs-12">
                                <button type="button" className="btn btn-post spacing zoom" id="insertStudentBtn">Cadastrar</button>
                                <button type="button" className="btn btn-clear zoom" id="clearInsertStudentFormBtn">Limpar</button>
                            </div>
                        </div>
                    </div>

                </form>
            </div>

        );
    }
}
