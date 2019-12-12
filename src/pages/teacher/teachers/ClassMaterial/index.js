import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDatabase, faMobile, faCode, faDownload, faUpload, faSearch
		} from '@fortawesome/free-solid-svg-icons'

export default class ClassMaterial extends React.Component {

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
							<option value="2">Data</option>
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

					<div className="card bg-orange card-adjustment-lesson">
						<Link to="#" className="nav-link text-white">
							<div className="card-body text-center">
								<h3><FontAwesomeIcon icon={faDatabase} className="fa fa-fw fa-database white spacing"/>Banco de dados III</h3>
								<hr className="white" />
								<h5 className="card-text mt-3">Arquivo: <u>BDIII.docx</u></h5>
								<h5 className="card-text">Data: 02/08/2019</h5>
								<button className="btn btn-custom-orange zoom"><FontAwesomeIcon icon={faDownload} className="fa fa-fw fa-download white"/></button>
							</div>
						</Link>
					</div>

					<div className="card bg-orange2 card-adjustment-lesson">
						<Link to="#" className="nav-link text-white">
							<div className="card-body text-center">
								<h3><FontAwesomeIcon icon={faMobile} className="fa fa-fw fa-mobile white spacing"/>Programação de Aplicativos Mobile II</h3>
								<hr className="white" />
								<h5 className="card-text mt-3">Arquivo: <u>PAMII.docx</u></h5>
								<h5 className="card-text">Data: 17/08/2019</h5>
								<button className="btn btn-custom-orange2 zoom"><FontAwesomeIcon icon={faDownload} className="fa fa-fw fa-download white"/></button>
							</div>
						</Link>
					</div>

					<div className="card bg-blue card-adjustment-lesson">
						<Link to="#" className="nav-link text-white">
							<div className="card-body text-center">
								<h3><FontAwesomeIcon icon={faCode} className="fa fa-fw fa-code white spacing"/>Programação Web III</h3>
								<hr className="white" />
								<h5 className="card-text mt-3">Arquivo: <u>PWIII.docx</u></h5>
								<h5 className="card-text">Data: 05/08/2019</h5>
								<button className="btn btn-custom-blue zoom"><FontAwesomeIcon icon={faDownload} className="fa fa-fw fa-download white"/></button>
							</div>
						</Link>
					</div>

				</div>

				<br />

				<h2 className="text-white">Postar Material</h2>

				<hr className="bg" />

				<div className="card-deck mt-2">
					<div className="card bg-green">
						<Link to="#" className="nav-link text-white">
							<div className="card-body text-center">
								<h3><FontAwesomeIcon icon={faCode} className="fa fa-fw fa-code white spacing"/>Programação Web III</h3>
								<div>
									<input type="file" className="btn btn-custom-green" id="customFile" lang="portuguese"/>
									<label className="btn btn-custom-green zoom cursor" for="customFile">
										<FontAwesomeIcon icon={faUpload} className="fa fa-fw fa-upload white"/>
									</label>
								</div>
							</div>
						</Link>
					</div>

					<div className="card bg-blue">
						<Link to="#" className="nav-link text-white">
							<div className="card-body text-center">
								<h3><FontAwesomeIcon icon={faDatabase} className="fa fa-fw fa-database white spacing"/>Banco de dados III</h3>
								<div>
									<input type="file" className="btn btn-custom-blue" id="customFile" lang="portuguese"/>
									<label className="btn btn-custom-blue zoom cursor" for="customFile">
									<FontAwesomeIcon icon={faUpload} className="fa fa-fw fa-upload white"/>
									</label>
								</div>
							</div>
						</Link>
					</div>

					<div className="card bg-orange">
						<Link to="#" className="nav-link text-white">
							<div className="card-body text-center">
								<h3><FontAwesomeIcon icon={faMobile} className="fa fa-fw fa-mobile white spacing"/>Programação de Aplicativos Mobile II</h3>
								<div>
									<input type="file" className="btn btn-custom-orange" id="customFile" lang="portuguese"/>
									<label className="btn btn-custom-orange zoom cursor" for="customFile">
										<FontAwesomeIcon icon={faUpload} className="fa fa-fw fa-upload white"/>
									</label>
								</div>
							</div>
						</Link>
					</div>
				</div>
			</div>
		);
	}
}
