import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faChevronRight 
		} from '@fortawesome/free-solid-svg-icons'
import windows10 from '../../../../assets/image/Windows10.png'
import office from '../../../../assets/image/office.png'
import visualStudio from '../../../../assets/image/visual-studio.png'

export default class MSImagine extends React.Component {

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
							<option value="1">Eventos</option>
							<option value="2">Notícia</option>
							<option value="3">Postagens</option>
						</select>
					</div>

					<div className="col-md-2 offset-sm-12 offset-md-8">
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

				<div className="row mt-2">

					<div className="col-lg-4 col-md-12 col-xs-12 col-sm-12">
						<div className="card bg-blue-imagine">
							<Link to="#" className="nav-link text-white">
								<div className="card-body text-center">
									<h3>Windows 10</h3>
									<hr className="white" />
									<figure className="card-text"><img src={windows10}></img></figure>
									<button className="btn btn-custom-blue-imagine mt-2 zoom"><FontAwesomeIcon icon={faChevronRight} className="fa fa-fw fa-chevron-right white"/>Acessar</button>
								</div>
							</Link>
						</div>
					</div>

					<div className="col-lg-4 col-md-12 col-xs-12 col-sm-12">
						<div className="card bg-purple-imagine">
							<Link to="#" className="nav-link text-white">
								<div className="card-body text-center">
									<h3>Visual Studio</h3>
									<hr className="white" />
									<figure className="card-text"><img src={visualStudio}></img></figure>
									<button className="btn btn-custom-purple-imagine mt-2 zoom"><FontAwesomeIcon icon={faChevronRight} className="fa fa-fw fa-chevron-right white"/>Acessar</button>
								</div>
							</Link>
						</div>
					</div>

					<div className="col-lg-4 col-md-12 col-xs-12 col-sm-12">
						<div className="card bg-orange-imagine">
							<Link to="#" className="nav-link text-white">
								<div className="card-body text-center">
									<h3>Office 360</h3>
									<hr className="white" />
									<figure className="card-text"><img src={office}></img></figure>
									<button className="btn btn-custom-orange-imagine mt-2 zoom"><FontAwesomeIcon icon={faChevronRight} className="fa fa-fw fa-chevron-right white"/>Acessar</button>
								</div>
							</Link>
						</div>
					</div>

				</div>
			</div>

		);
	}
}
