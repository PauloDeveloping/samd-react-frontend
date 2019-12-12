import React from 'react'
import './index.css'
import beneficios from '../../../../assets/image/beneficios.jpg'


export default class InstitutionBenefits extends React.Component {

	constructor(props) {
		super(props)
	}

	componentDidMount() {

	}

	render() {

		return (

			<div className="container-fluid">
				<figure>
					<img src={beneficios} alt="Benefícios" className="center" />
				</figure>

				<div className="center">
					<br /><p className="text-justify text-white">A Microsoft Brasil e o Centro Paula Souza tem um acordo de cooperação que irá beneficiar a voces, alunos das Fatecs e Etecs, com as iniciativas do programa de parcerias acadêmicas que a empresa mantém no país.
                        <br /><br />O portal de acesso para utilizar os beneficios desta parceria se dá pelo Microsoft Azure.
                        <br /><br />Microsoft Azure - As ferramentas do desenvolvedor e os recursos de aprendizado que faziam parte da sua conta Imagine agora estão disponí¬veis no Azure Dev Tools for Teaching. Você será levado a uma página solicitando que você faça login usando uma conta da Microsoft para ter acesso aos recursos disponíveis. (Aquela conta que voce recebeu na matricula com o email institucional).
                    </p>
				</div>
			</div>

		);
	}
}
