import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'
import email from '../../../../assets/image/email.png'


export default class InstitutionEmail extends React.Component {

	constructor(props) {
		super(props)
	}

	componentDidMount() {

	}

	render() {

		return (

			<div className="container-fluid">
				<figure>
					<img src={email} alt="Email institucional" className="center" />s
				</figure>

				<div className="center">
					<br />
					<p className="text-justify text-white">O Centro Paula Souza possui um convênio com a Microsoft.</p>
					<p className="text-justify text-white">O convênio proporciona aos estudantes, professores e servidores das Escolas
						Técnicas (Etec) do
						Estado de São Paulo download gratuito dos produtos de desenvolvimento Microsoft e a instalação dos programas
						nos laboratórios de informática institucionais e nos equipamentos pessoais, com chaves de instalações
                    originais.</p>
					<p className="text-justify text-white">O programa tem dois objetivos básicos:</p>
					<ul>
						<li className="text-justify text-white">A facilitar e tornar mais barata a obtensão de ferramentas de desenvolvimento, plataformas e servidores para
                fins educacionais e de pesquisa;</li> <br />
						<li className="text-justify text-white">A formar uma comunidade de instrutores que possam compartilhar seus programas de aula e outros recursos de
                aprendizagem para dar suporte ao uso destas tecnologias.</li>
					</ul>
					<p className="text-justify text-white">Como funciona?</p>
					<p className="text-justify text-white">Todos os alunos, professores e funcionários tem direito a uma conta de e-mail institucional
					(@etec.sp.gov.br) e acesso ao Microsoft Office 365. Assim como no hotmail é possí¬vel também editar seus
					documentos diretamente no navegador com o Office Web Apps (Word, Excel e Powerpoint disponíveis na sua
                conta).</p>

					<p className="text-justify text-white">Acesse o seu e-mail institucional e o Microsoft Office 365 em: <Link className="btn btn-danger" to="http://www.etec.sp.gov.br">http://www.etec.sp.gov.br</Link> </p>
					<p className="text-justify text-white">Ou ainda acesse seu e-mail institucional na área do aluno no NSA Online: <Link className="btn btn-danger" to="https://nsa.cps.sp.gov.br">https://nsa.cps.sp.gov.br</Link></p>
				</div>
			</div>

		);
	}
}
