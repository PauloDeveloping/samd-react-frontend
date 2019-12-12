import React from 'react'
import './index.css'
import funcionario from '../../../../assets/image/funcionarios.png'

export default class AllEmployeers extends React.Component {

	constructor(props) {
		super(props)
	}

	componentDidMount() {

	}

	render() {

		return (

			<div className="container-fluid">
				<div className="row align-items-center dash-title">
					<div className="col-md-12 col-xs-12">
						<h2 className="text-white">Secretária</h2>
					</div>
				</div>

				<hr className="bg" />

				<div className="card-deck">
					<div className="card zoomImg">
						<img src={funcionario} alt="" className="img-thumbnail" />
						<div className="card-footer">
							<p className="card-text black">Nome do funcionário</p>
						</div>
					</div>

					<div className="card zoomImg">
						<img src={funcionario} alt="" className="img-thumbnail" />
						<div className="card-footer">
							<p className="card-text black">Nome do funcionário</p>
						</div>
					</div>

					<div className="card zoomImg">
						<img src={funcionario} alt="" className="img-thumbnail" />
						<div className="card-footer">
							<p className="card-text black">Nome do funcionário</p>
						</div>
					</div>

					<div className="card zoomImg">
						<img src={funcionario} alt="" className="img-thumbnail" />
						<div className="card-footer">
							<p className="card-text black">Nome do funcionário</p>
						</div>
					</div>

					<div className="card zoomImg">
						<img src={funcionario} alt="" className="img-thumbnail" />
						<div className="card-footer">
							<p className="card-text black">Nome do funcionário</p>
						</div>
					</div>

					<div className="card zoomImg">
						<img src={funcionario} alt="" className="img-thumbnail" />
						<div className="card-footer">
							<p className="card-text black">Nome do funcionário</p>
						</div>
					</div>
				</div>

				<div className="row align-items-center dash-title mt-4">
					<div className="col-md-12 col-xs-12">
						<h2 className="text-white">Almoxarifado</h2>
					</div>
				</div>

				<hr className="bg" />

				<div className="card-deck mt-2">
					<div className="card zoomImg">
						<img src={funcionario} alt="" className="img-thumbnail" />
						<div className="card-footer">
							<p className="card-text black">Nome do funcionário</p>
						</div>
					</div>

					<div className="card zoomImg">
						<img src={funcionario} alt="" className="img-thumbnail" />
						<div className="card-footer">
							<p className="card-text black">Nome do funcionário</p>
						</div>
					</div>

					<div className="card zoomImg">
						<img src={funcionario} alt="" className="img-thumbnail" />
						<div className="card-footer">
							<p className="card-text black">Nome do funcionário</p>
						</div>
					</div>

					<div className="card zoomImg">
						<img src={funcionario} alt="" className="img-thumbnail" />
						<div className="card-footer">
							<p className="card-text black">Nome do funcionário</p>
						</div>
					</div>

					<div className="card zoomImg">
						<img src={funcionario} alt="" className="img-thumbnail" />
						<div className="card-footer">
							<p className="card-text black">Nome do funcionário</p>
						</div>
					</div>

					<div className="card zoomImg">
						<img src={funcionario} alt="" className="img-thumbnail" />
						<div className="card-footer">
							<p className="card-text black">Nome do funcionário</p>
						</div>
					</div>
				</div>

				<div className="row align-items-center dash-title mt-4">
					<div className="col-md-12 col-xs-12">
						<h2 className="text-white">Biblioteca</h2>
					</div>
				</div>

				<hr className="bg" />

				<div className="card-deck mt-2">
					<div className="card zoomImg">
						<img src={funcionario} alt="" className="img-thumbnail" />
						<div className="card-footer">
							<p className="card-text black">Nome do funcionário</p>
						</div>
					</div>

					<div className="card zoomImg">
						<img src={funcionario} alt="" className="img-thumbnail" />
						<div className="card-footer">
							<p className="card-text black">Nome do funcionário</p>
						</div>
					</div>

					<div className="card zoomImg">
						<img src={funcionario} alt="" className="img-thumbnail" />
						<div className="card-footer">
							<p className="card-text black">Nome do funcionário</p>
						</div>
					</div>

					<div className="card zoomImg">
						<img src={funcionario} alt="" className="img-thumbnail" />
						<div className="card-footer">
							<p className="card-text black">Nome do funcionário</p>
						</div>
					</div>

					<div className="card zoomImg">
						<img src={funcionario} alt="" className="img-thumbnail" />
						<div className="card-footer">
							<p className="card-text black">Nome do funcionário</p>
						</div>
					</div>

					<div className="card zoomImg">
						<img src={funcionario} alt="" className="img-thumbnail" />
						<div className="card-footer">
							<p className="card-text black">Nome do funcionário</p>
						</div>
					</div>
				</div>
			</div>

		);
	}
}
