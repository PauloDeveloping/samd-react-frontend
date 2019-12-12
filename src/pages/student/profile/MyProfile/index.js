import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'
import logo from '../../../../assets/image/funcionarios.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUniversity, faPhone, faMap 
		} from '@fortawesome/free-solid-svg-icons'

export default class MyProfile extends React.Component {

	constructor(props) {
		super(props)
	}

	componentDidMount() {

	}

	render() {

		return (

			<div className="container-fluid">
				<div className="profile">
					<legend className="text-center text-white"><strong>DADOS PESSOAIS</strong></legend>
					<figure className="circle">
						<img src={logo} alt="" />
					</figure>

					<div className="text-center justify">
						<h5 className="text-white">PAULO HENRIQUE PIRES CORDEIRO</h5>
						<h5 className="text-white">Data de Nascimento: 20/09/2000</h5>
						<h5 className="text-white">RM: 18587</h5>
						<hr className="bg" />
					</div>

					<legend className="text-center text-white"><strong>DADOS DO CURSO</strong></legend>
					<FontAwesomeIcon icon={faUniversity} className="fa fa-fw fa-search white fa-5x icon-profile"/>
					<div className="text-center justify">
						<h5 className="text-white mt-3">Curso: Desenvolvimento de Sistemas</h5>
						<h5 className="text-white">3º Modúlo</h5>
						<h5 className="text-white">Período: Noturno</h5>
						<hr className="bg" />
					</div>

					<legend className="text-center text-white"><strong>DADOS DE ENDEREÇO</strong></legend>
					<FontAwesomeIcon icon={faMap} className="fa fa-fw fa-map white fa-5x icon-profile"/>
					<div className="text-center justify">
						<h5 className="text-white mt-3">Logradouro: Rua Caraguatatuba - Nº 107</h5>
						<h5 className="text-white">Bairro: Jardim Vista Alegre</h5>
						<h5 className="text-white">Cidade: Embu das Artes - SP</h5>
						<h5 className="text-white">CEP: 06807-430</h5>
						<Link to="/alunos/perfil/editar"><button type="submit" className="btn btn-post zoom">Editar</button></Link>
						<hr className="bg" />
					</div>

					<legend className="text-center text-white"><strong>DADOS DE CONTATO</strong></legend>
					<FontAwesomeIcon icon={faPhone} className="fa fa-fw fa-phone white fa-5x icon-profile"/>
					<div className="text-center justify">
						<h5 className="text-white mt-3">Celular: (11) 95951-6872</h5>
						<h5 className="text-white">Telefone: (11) 4704-3540</h5>
						<Link to="/alunos/perfil/editar"><button type="submit" className="btn btn-post zoom">Editar</button></Link>
						<hr className="bg" />
					</div>
				</div>
			</div>

		);
	}
}
