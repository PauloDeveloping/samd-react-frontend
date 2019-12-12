import React from 'react'
import './index.css'
import administracao from '../../../../assets/image/administracao.jpg'
import contabilidade from '../../../../assets/image/contabilidade.jpeg'
import programador from '../../../../assets/image/programador.jpg'
import eletroeletronica from '../../../../assets/image/eletroeletronica.jpg'
import ensinoMedio from '../../../../assets/image/ensinoMedio.jpeg'
import etim from '../../../../assets/image/etim.jpg'
import logistica from '../../../../assets/image/logistica.jpg'
import redes from '../../../../assets/image/redes.jpg'

export default class AllTeachers extends React.Component {

	constructor(props) {
		super(props)
	}

	componentDidMount() {

	}

	render() {

		return (

			<div className="container-fluid">

				<div className="card-deck">
					<div className="card zoomImg">
						<img className="card-img-top" src={administracao} alt="Administração" />
						<div className="card-footer">
							<p className="card-text black">Administração</p>
						</div>
					</div>

					<div className="card zoomImg">
						<img className="card-img-top" src={contabilidade} alt="Contabilidade" />
						<div className="card-footer">
							<p className="card-text black">Contabilidade</p>
						</div>
					</div>

					<div className="card zoomImg">
						<img className="card-img-top" src={programador} alt="Desenvolvimento de Sistemas" />
						<div className="card-footer">
							<p className="card-text black">Desenvolvimento de Sistemas</p>
						</div>
					</div>

					<div className="card zoomImg">
						<img className="card-img-top" src={eletroeletronica} alt="Eletroeletronica" />
						<div className="card-footer">
							<p className="card-text black">Eletroeletrônica</p>
						</div>
					</div>
				</div>

				<div className="card-deck mt-4">
					<div className="card zoomImg">
						<img className="card-img-top" src={ensinoMedio} alt="Ensino Médio" />
						<div className="card-footer">
							<p className="card-text black">Ensino Médio</p>
						</div>
					</div>

					<div className="card zoomImg">
						<img className="card-img-top" src={etim} alt="E.T.I.M" />
						<div className="card-footer">
							<p className="card-text black">E.T.I.M</p>
						</div>
					</div>

					<div className="card zoomImg">
						<img className="card-img-top" src={logistica} alt="Logística" />
						<div className="card-footer">
							<p className="card-text black">Logística</p>
						</div>
					</div>

					<div className="card zoomImg">
						<img className="card-img-top" src={redes} alt="Redes de computadores" />
						<div className="card-footer">
							<p className="card-text black">Redes de computadores</p>
						</div>
					</div>
				</div>

			</div>

		);
	}
}
