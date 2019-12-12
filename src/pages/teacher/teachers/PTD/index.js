import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faDatabase, faMobile, faCode
		} from '@fortawesome/free-solid-svg-icons'

export default class PTD extends React.Component {

	constructor(props) {
		super(props)
	}

	componentDidMount() {

	}

	render() {

		return (

			<div className="container-fluid">

				<div className="row">
					<div className="col-md-2 col-sm-12">
						<select className="custom-select">
							<option selected>Filtrar por: </option>
							<option value="1">Banco de dados III</option>
							<option value="2">Programação de Aplicativos Mobile II</option>
							<option value="3">Programação Web III</option>
						</select>
					</div>

					<div className="col-md-2 offset-sm-12 offset-md-8">
						<div className="pesquisar">
							<div className="input-group mb-2">
								<div className="input-group-prepend">
									<div className="input-group-text"><FontAwesomeIcon icon={faSearch} className="fa fa-fw fa-search"/></div>
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
								<h5 className="card-text mt-3">Arquivo <u>PTD.docx</u></h5>
							</div>
						</Link>
					</div>

					<div className="card bg-orange2 card-adjustment-lesson">
						<Link to="#" className="nav-link text-white">
							<div className="card-body text-center">
								<h3><FontAwesomeIcon icon={faMobile} className="fa fa-fw fa-mobile white spacing"/>Programação de Aplicativos Mobile II</h3>
								<hr className="white" />
								<h5 className="card-text mt-3">Arquivo <u>PTD.docx</u></h5>
							</div>
						</Link>
					</div>

					<div className="card bg-blue card-adjustment-lesson">
						<Link to="#" className="nav-link text-white">
							<div className="card-body text-center">
								<h3><FontAwesomeIcon icon={faCode} className="fa fa-fw fa-code white spacing"/>Programação Web III</h3>
								<hr className="white" />
								<h5 className="card-text mt-3">Arquivo <u>PTD.docx</u></h5>
							</div>
						</Link>
					</div>
				</div>

				<br />
				<div className="row align-items-center dash-title">

					<div className="col-md-6 col-xs-12">
						<h2 className="text-white">Enviar PTD</h2>
					</div>
				</div>
				<hr className="bg" />

				<div className="card">
					<form action="" method="POST" autocomplete="off">
						<div className="card-body">
							<div className="form-row mt-4">
								<div className="col-md-12 col xs-12">
									<label for="desc_publicacao"><i className="fas fa-file spacing"></i>PTD</label>
									<textarea className="border-custom" name="desc_publicacao" id="desc_publicacao"></textarea>
								</div>
							</div>
						</div>

						<div className="card-footer text-center">
							<button type="submit" className="btn btn-post spacing">Enviar</button>
							<button type="reset" className="btn btn-clear">Limpar</button>
						</div>
					</form>
				</div>
			</div>

		);
	}
}
