import React from 'react'
import { PieChart } from 'react-chartkick'
import 'chart.js'
import './index.css'


export default class StudentFrequency extends React.Component {

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

				<div className="container-fluid text-center">
					<h2 className="text-white">Administração</h2>
				</div>

				<div className="card-deck mt-5 mb-5">

					<div className="card bg-light chart-border">

						<div className="card-header text-center bg-custom">
							<h5 className="mt-2">1º Módulo</h5>
						</div>

						<div className="card-body">
							<PieChart data={{ 'batata': 14, 'tomate': 21, 'banana': 21, 'cenoura': 22, 'beterraba': 9 }} />
						</div>
					</div>

					<div className="card bg-light chart-border">

						<div className="card-header text-center bg-custom">
							<h5 className="mt-2">2º Módulo</h5>
						</div>

						<div className="card-body">
							<PieChart data={{ 'batata': 14, 'tomate': 21, 'banana': 21, 'cenoura': 22, 'beterraba': 9 }} />
						</div>
					</div>

					<div className="card bg-light chart-border">

						<div className="card-header text-center bg-custom">
							<h5 className="mt-2">3º Módulo</h5>
						</div>

						<div className="card-body">
							<PieChart data={{ 'batata': 14, 'tomate': 21, 'banana': 21, 'cenoura': 22, 'beterraba': 9 }} />
						</div>
					</div>

				</div>

				<div className="container-fluid text-center">
					<h2 className="text-white">Contabilidade</h2>
				</div>

				<div className="card-deck mt-5 mb-5">

					<div className="card bg-light chart-border">

						<div className="card-header text-center bg-custom">
							<h5 className="mt-2">1º Módulo</h5>
						</div>

						<div className="card-body">
							<PieChart data={{ 'batata': 14, 'tomate': 21, 'banana': 21, 'cenoura': 22, 'beterraba': 9 }} />
						</div>
					</div>

					<div className="card bg-light chart-border">

						<div className="card-header text-center bg-custom">
							<h5 className="mt-2">2º Módulo</h5>
						</div>

						<div className="card-body">
							<PieChart data={{ 'batata': 14, 'tomate': 21, 'banana': 21, 'cenoura': 22, 'beterraba': 9 }} />
						</div>
					</div>

					<div className="card bg-light chart-border">

						<div className="card-header text-center bg-custom">
							<h5 className="mt-2">3º Módulo</h5>
						</div>

						<div className="card-body">
							<PieChart data={{ 'batata': 14, 'tomate': 21, 'banana': 21, 'cenoura': 22, 'beterraba': 9 }} />
						</div>
					</div>

				</div>

				<div className="container-fluid text-center">
					<h2 className="text-white">Desenvolvimento de sistemas</h2>
				</div>

				<div className="card-deck mt-5 mb-5">

					<div className="card bg-light chart-border">

						<div className="card-header text-center bg-custom">
							<h5 className="mt-2">1º Módulo</h5>
						</div>

						<div className="card-body">
							<PieChart data={{ 'batata': 14, 'tomate': 21, 'banana': 21, 'cenoura': 22, 'beterraba': 9 }} />
						</div>
					</div>

					<div className="card bg-light chart-border">

						<div className="card-header text-center bg-custom">
							<h5 className="mt-2">2º Módulo</h5>
						</div>

						<div className="card-body">
							<PieChart data={{ 'batata': 14, 'tomate': 21, 'banana': 21, 'cenoura': 22, 'beterraba': 9 }} />
						</div>
					</div>

					<div className="card bg-light chart-border">

						<div className="card-header text-center bg-custom">
							<h5 className="mt-2">3º Módulo</h5>
						</div>

						<div className="card-body">
							<PieChart data={{ 'batata': 14, 'tomate': 21, 'banana': 21, 'cenoura': 22, 'beterraba': 9 }} />
						</div>
					</div>

				</div>

				<div className="container-fluid text-center">
					<h2 className="text-white">Eletroeletrônica</h2>
				</div>

				<div className="card-deck mt-5 mb-5">

					<div className="card bg-light chart-border">

						<div className="card-header text-center bg-custom">
							<h5 className="mt-2">1º Módulo</h5>
						</div>

						<div className="card-body">
							<PieChart data={{ 'batata': 14, 'tomate': 21, 'banana': 21, 'cenoura': 22, 'beterraba': 9 }} />
						</div>
					</div>

					<div className="card bg-light chart-border">

						<div className="card-header text-center bg-custom">
							<h5 className="mt-2">2º Módulo</h5>
						</div>

						<div className="card-body">
							<PieChart data={{ 'batata': 14, 'tomate': 21, 'banana': 21, 'cenoura': 22, 'beterraba': 9 }} />
						</div>
					</div>

					<div className="card bg-light chart-border">

						<div className="card-header text-center bg-custom">
							<h5 className="mt-2">3º Módulo</h5>
						</div>

						<div className="card-body">
							<PieChart data={{ 'batata': 14, 'tomate': 21, 'banana': 21, 'cenoura': 22, 'beterraba': 9 }} />
						</div>
					</div>

					<div className="card bg-light chart-border">

						<div className="card-header text-center bg-custom">
							<h5 className="mt-2">4º Módulo</h5>
						</div>

						<div className="card-body">
							<PieChart data={{ 'batata': 14, 'tomate': 21, 'banana': 21, 'cenoura': 22, 'beterraba': 9 }} />
						</div>
					</div>

				</div>

				<div className="container-fluid text-center">
					<h2 className="text-white">ETIM</h2>
				</div>

				<div className="card-deck mt-5 mb-5">

					<div className="card bg-light chart-border">

						<div className="card-header text-center bg-custom">
							<h5 className="mt-2">1º Ano</h5>
						</div>

						<div className="card-body">
							<PieChart data={{ 'batata': 14, 'tomate': 21, 'banana': 21, 'cenoura': 22, 'beterraba': 9 }} />
						</div>
					</div>

					<div className="card bg-light chart-border">

						<div className="card-header text-center bg-custom">
							<h5 className="mt-2">2º Ano</h5>
						</div>

						<div className="card-body">
							<PieChart data={{ 'batata': 14, 'tomate': 21, 'banana': 21, 'cenoura': 22, 'beterraba': 9 }} />
						</div>
					</div>

					<div className="card bg-light chart-border">

						<div className="card-header text-center bg-custom">
							<h5 className="mt-2">3º Ano</h5>
						</div>

						<div className="card-body">
							<PieChart data={{ 'batata': 14, 'tomate': 21, 'banana': 21, 'cenoura': 22, 'beterraba': 9 }} />
						</div>
					</div>

				</div>

				<div className="container-fluid text-center">
					<h2 className="text-white">Ensino médio</h2>
				</div>

				<div className="card-deck mt-5 mb-5">

					<div className="card bg-light chart-border">

						<div className="card-header text-center bg-custom">
							<h5 className="mt-2">1º Módulo</h5>
						</div>

						<div className="card-body">
							<PieChart data={{ 'batata': 14, 'tomate': 21, 'banana': 21, 'cenoura': 22, 'beterraba': 9 }} />
						</div>
					</div>

					<div className="card bg-light chart-border">

						<div className="card-header text-center bg-custom">
							<h5 className="mt-2">2º Módulo</h5>
						</div>

						<div className="card-body">
							<PieChart data={{ 'batata': 14, 'tomate': 21, 'banana': 21, 'cenoura': 22, 'beterraba': 9 }} />
						</div>
					</div>

					<div className="card bg-light chart-border">

						<div className="card-header text-center bg-custom">
							<h5 className="mt-2">3º Módulo</h5>
						</div>

						<div className="card-body">
							<PieChart data={{ 'batata': 14, 'tomate': 21, 'banana': 21, 'cenoura': 22, 'beterraba': 9 }} />
						</div>
					</div>

				</div>

				<div className="container-fluid text-center">
					<h2 className="text-white">Logística</h2>
				</div>

				<div className="card-deck mt-5 mb-5">

					<div className="card bg-light chart-border">

						<div className="card-header text-center bg-custom">
							<h5 className="mt-2">1º Módulo</h5>
						</div>

						<div className="card-body">
							<PieChart data={{ 'batata': 14, 'tomate': 21, 'banana': 21, 'cenoura': 22, 'beterraba': 9 }} />
						</div>
					</div>

					<div className="card bg-light chart-border">

						<div className="card-header text-center bg-custom">
							<h5 className="mt-2">2º Módulo</h5>
						</div>

						<div className="card-body">
							<PieChart data={{ 'batata': 14, 'tomate': 21, 'banana': 21, 'cenoura': 22, 'beterraba': 9 }} />
						</div>
					</div>

					<div className="card bg-light chart-border">

						<div className="card-header text-center bg-custom">
							<h5 className="mt-2">3º Módulo</h5>
						</div>

						<div className="card-body">
							<PieChart data={{ 'batata': 14, 'tomate': 21, 'banana': 21, 'cenoura': 22, 'beterraba': 9 }} />
						</div>
					</div>

				</div>

				<div className="container-fluid text-center">
					<h2 className="text-white">Redes de computadores</h2>
				</div>

				<div className="card-deck mt-5 mb-5">

					<div className="card bg-light chart-border">

						<div className="card-header text-center bg-custom">
							<h5 className="mt-2">1º Módulo</h5>
						</div>

						<div className="card-body">
							<PieChart data={{ 'batata': 14, 'tomate': 21, 'banana': 21, 'cenoura': 22, 'beterraba': 9 }} />
						</div>
					</div>

					<div className="card bg-light chart-border">

						<div className="card-header text-center bg-custom">
							<h5 className="mt-2">2º Módulo</h5>
						</div>

						<div className="card-body">
							<PieChart data={{ 'batata': 14, 'tomate': 21, 'banana': 21, 'cenoura': 22, 'beterraba': 9 }} />
						</div>
					</div>

					<div className="card bg-light chart-border">

						<div className="card-header text-center bg-custom">
							<h5 className="mt-2">3º Módulo</h5>
						</div>

						<div className="card-body">
							<PieChart data={{ 'batata': 14, 'tomate': 21, 'banana': 21, 'cenoura': 22, 'beterraba': 9 }} />
						</div>
					</div>

				</div>
			</>
		);
	}
}
