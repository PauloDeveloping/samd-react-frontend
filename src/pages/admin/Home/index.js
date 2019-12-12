import React from 'react'
import { Link } from 'react-router-dom'
import { PieChart } from 'react-chartkick'
import api from '../../../services/api'
import 'chart.js'
import './index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight
		} from '@fortawesome/free-solid-svg-icons'

export default class Home extends React.Component {

	constructor(props) {
		super(props)

		this.state = {
			data: [],
			loading: true
		}
	}

	componentDidMount() {


	}

	render() {



		return (

			<>
				<div className="row mt-4">



					<div className="col-md-6 col-xs-12">
						<div className="card bg-light chart-border">
							<div className="card-header text-center bg-custom">
								<h5 className="mt-2">Acessos Mensais</h5>
							</div>

							<div className="card-body">
								<PieChart data={{ 'batata': 30, 'tomate': 30, 'banana': 21 }} />
							</div>
						</div>
					</div>

					<div className="col-md-6 col-xs-12">
						<div className="card bg-light chart-border">
							<div className="card-header text-center bg-custom">
								<h5 className="mt-2">Acessos Semanais</h5>
							</div>

							<div className="card-body">
								<PieChart data={{ 'batata': 14, 'tomate': 21, 'banana': 21, 'cenoura': 22, 'beterraba': 9 }} />
							</div>
						</div>
					</div>

				</div>

				<div className="card-deck mt-4">

					<div className="card bg-purple zoom">
						<Link to="/admin/noticias/nova" className="nav-link text-white">
							<div className="card-body text-center">
								<h5>Posts até agora: <span className="badge badge-light">15</span></h5>
								<hr className="white" />
								<h3 className="mt-3"><strong><FontAwesomeIcon icon={faChevronRight} className="fa fa-fw fa-chevron-right white spacing"/>CRIE UM NOVO POST</strong></h3>
							</div>
						</Link>
					</div>

					<div className="card bg-green zoom">
						<Link to="/admin/funcionarios/novo" className="nav-link text-white">
							<div className="card-body text-center">
								<h5>Registro rápido</h5>
								<hr className="white" />
								<h3 className="mt-3"><strong><FontAwesomeIcon icon={faChevronRight} className="fa fa-fw fa-chevron-right white spacing"/>FUNCIONÁRIO</strong></h3>
							</div>
						</Link>
					</div>

					<div className="card bg-blue zoom">
						<Link to="/admin/alunos/novo" className="nav-link text-white">
							<div className="card-body text-center">
								<h5>Registro rápido</h5>
								<hr className="white" />
								<h3 className="mt-3"><strong><FontAwesomeIcon icon={faChevronRight} className="fa fa-fw fa-chevron-right white spacing"/>ALUNO</strong></h3>
							</div>
						</Link>
					</div>

				</div>

			</>
		);

	}
}
