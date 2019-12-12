import React from 'react'
import './index.css'
import rematricula from '../../../../assets/image/rematricula.jpg'

export default class Registration extends React.Component {

	constructor(props) {
		super(props)
	}

	componentDidMount() {

	}

	render() {

		return (

			<div className="container-fluid">
				<figure>
					<img src={rematricula} alt="Rematrícula" className="center-registration" />
				</figure>

				<div className="center-registration mt-2">
					<p className="text-center text-white"><strong>PRAZO PARA A REMATRICULA SE APROXIMA DO ENCERRAMENTO</strong></p>
					<p className="text-justify text-white">
						Esta Quinta-feira dia 17 é o último dia para as assinaturas da Rematrícula do semestre.
                    <br /><br />A Rematrícula tem o objetivo de promover a garantia da sua bolsa no curso para o próximo modulo.
                    <br /><br />As inscrições ainda podem ser realizadas na secretaria, localizado na instituição Etec de Embu, no horário das 09:00 hrs às 17:00 hrs.
							Maiores informações podem ser obtidas pelo telefone (47781168) ou
							e-mail (www.etecdeembu.com.br).
                    <br /><br />Á direção
                </p>

					<div className="row">
						<button type="submit" className="btn btn-danger zoom rematricula">Solicitar rematrícula</button>
					</div>
				</div>


			</div>

		);
	}
}
