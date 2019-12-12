import React from 'react'
import './index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faDownload, faDatabase, faMobile, faCode, faFileContract, faAward, faMicrochip, faLock, faGraduationCap
		} from '@fortawesome/free-solid-svg-icons'

export default class LessonMaterial extends React.Component {

	constructor(props) {
		super(props)
	}

	componentDidMount() {

	}

	render() {

		return (

			<div className="container-fluid">

				<div className="row">
					<div className="col-md-2 col-sm-12 col-xs-12">
						<select className="custom-select">
							<option selected>Filtrar por: </option>
							<option value="1">Arquivo</option>
							<option value="2">Professor</option>
							<option value="3">Data</option>
						</select>
					</div>

					<div className="col-md-2 offset-sm-12 offset-md-8 col-xs-12">
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

				<div className="card-deck mt-2">
					<div className="card bg-orange">
						<div className="card-body text-center">
							<h3><FontAwesomeIcon icon={faDatabase} className="fa fa-fw fa-database white spacing"/>Banco de dados III</h3>
							<hr className="white" />
							<h5 className="card-text mt-3">Arquivo: <u>BDIII.docx</u></h5>
							<h5 className="card-text">Postado por: Marcos Costa</h5>
							<h5 className="card-text">Data: 02/08/2019</h5>
							<button className="btn btn-custom-orange zoom"><FontAwesomeIcon icon={faDownload} className="fa fa-fw fa-download white"/></button>
						</div>
					</div>

					<div className="card bg-orange2">
						<div className="card-body text-center">
							<h3><FontAwesomeIcon icon={faMobile} className="fa fa-fw fa-mobile white spacing"/>Programação de Aplicativos Mobile II</h3>
							<hr className="white" />
							<h5 className="card-text mt-3">Arquivo: <u>PAMII.docx</u></h5>
							<h5 className="card-text">Postado por: Aline Francisca</h5>
							<h5 className="card-text">Data: 17/08/2019</h5>
							<button className="btn btn-custom-orange2 zoom"><FontAwesomeIcon icon={faDownload} className="fa fa-fw fa-download white"/></button>
						</div>
					</div>

					<div className="card bg-blue">
						<div className="card-body text-center">
							<h3><FontAwesomeIcon icon={faCode} className="fa fa-fw fa-code white spacing"/>Programação Web III</h3>
							<hr className="white" />
							<h5 className="card-text mt-3">Arquivo: <u>PWIII.docx</u></h5>
							<h5 className="card-text">Postado por: Cristiano</h5>
							<h5 className="card-text">Data: 05/08/2019</h5>
							<button className="btn btn-custom-blue zoom"><FontAwesomeIcon icon={faDownload} className="fa fa-fw fa-download white"/></button>
						</div>
					</div>
				</div>

				<div className="card-deck mt-2">
					<div className="card bg-green">
						<div className="card-body text-center">
							<h3><FontAwesomeIcon icon={faFileContract} className="fa fa-fw fa-file-contract white spacing"/>DTCC</h3>
							<hr className="white" />
							<h5 className="card-text mt-3">Arquivo: <u>DTCC.docx</u></h5>
							<h5 className="card-text">Postado por: Marcos Costa</h5>
							<h5 className="card-text">Data: 03/08/2019</h5>
							<button className="btn btn-custom-green zoom"><FontAwesomeIcon icon={faDownload} className="fa fa-fw fa-download white"/></button>
						</div>
					</div>

					<div className="card bg-purple">
						<div className="card-body text-center">
							<h3><FontAwesomeIcon icon={faAward} className="fa fa-fw fa-award white spacing"/>Qualidade de Teste de Software</h3>
							<hr className="white" />
							<h5 className="card-text mt-3">Arquivo: <u>QTS.docx</u></h5>
							<h5 className="card-text">Postado por: Emerson</h5>
							<h5 className="card-text">Data: 02/08/2019</h5>
							<button className="btn btn-custom-purple zoom"><FontAwesomeIcon icon={faDownload} className="fa fa-fw fa-download white"/></button>
						</div>
					</div>

					<div className="card bg-purple2">
						<div className="card-body text-center">
							<h3><FontAwesomeIcon icon={faMicrochip} className="fa fa-fw fa-microchip white spacing"/>Sistema Embarcados</h3>
							<hr className="white" />
							<h5 className="card-text mt-3">Arquivo: <u>SE.docx</u></h5>
							<h5 className="card-text">Postado por: Marcos Costa</h5>
							<h5 className="card-text">Data: 16/08/2019</h5>
							<button className="btn btn-custom-purple2 zoom"><FontAwesomeIcon icon={faDownload} className="fa fa-fw fa-download white"/></button>
						</div>
					</div>
				</div>

				<div className="card-deck mt-2">
					<div className="card bg-blue">
						<div className="card-body text-center">
							<h3><FontAwesomeIcon icon={faMobile} className="fa fa-fw fa-mobile white spacing"/>Programação de Aplicativos Mobile II</h3>
							<hr className="white" />
							<h5 className="card-text mt-3">Arquivo: <u>PAMII.docx</u></h5>
							<h5 className="card-text">Postado por: Cristiano</h5>
							<h5 className="card-text">Data: 04/08/2019</h5>
							<button className="btn btn-custom-blue zoom"><FontAwesomeIcon icon={faDownload} className="fa fa-fw fa-download white"/></button>
						</div>
					</div>

					<div className="card bg-orange2">
						<div className="card-body text-center">
							<h3><FontAwesomeIcon icon={faLock} className="fa fa-fw fa-lock white spacing"/>Segurança de Sistemas da Informação</h3>
							<hr className="white" />
							<h5 className="card-text mt-3">Arquivo: <u>SSI.docx</u></h5>
							<h5 className="card-text">Postado por: Wilhelm</h5>
							<h5 className="card-text">Data: 19/08/2019</h5>
							<button className="btn btn-custom-orange2 zoom"><FontAwesomeIcon icon={faDownload} className="fa fa-fw fa-download white"/></button>
						</div>
					</div>

					<div className="card bg-orange">
						<div className="card-body text-center">
							<h3><FontAwesomeIcon icon={faMobile} className="fa fa-fw fa-graduation-cap white spacing"/>Ética e Cidadania Organizacional</h3>
							<hr className="white" />
							<h5 className="card-text mt-3">Arquivo: <u>ECO.docx</u></h5>
							<h5 className="card-text">Postado por: Gilmar</h5>
							<h5 className="card-text">Data: 05/08/2019</h5>
							<button className="btn btn-custom-orange zoom"><FontAwesomeIcon icon={faDownload} className="fa fa-fw fa-download white"/></button>
						</div>
					</div>
				</div>
			</div>

		);
	}

}
