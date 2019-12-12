import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'
import logo from '../../../../assets/image/funcionarios.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUniversity, faPhone, faMap 
		} from '@fortawesome/free-solid-svg-icons'

export default class Profile extends React.Component {

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
						<h5 className="text-white">KÁTIA STRIITZEL</h5>
						<h5 className="text-white">Data de Nascimento: 05/07/1986</h5>
						<h5 className="text-white">RA: 49049</h5>
						<hr className="bg" />
					</div>

					<legend className="text-center text-white"><strong>DADOS DE FORMAÇÃO</strong></legend>
					<FontAwesomeIcon icon={faUniversity} className="fa fa-fw fa-search white fa-5x icon-profile"/>
					<div className="text-center justify">
						<h5 className="text-white mt-3">Curso de formação: Sistemas de Informação</h5>
						<h5 className="text-white">Cargo: Coordenadora Pedagogica</h5>
						<h5 className="text-white">Turno: Vespertino e Noturno</h5>
						<hr className="bg" />
					</div>

					<legend className="text-center text-white"><strong>DADOS DE ENDEREÇO</strong></legend>
					<FontAwesomeIcon icon={faMap} className="fa fa-fw fa-map white fa-5x icon-profile"/>
					<div className="text-center justify">
						<h5 className="text-white mt-3">Logradouro: Rua Américo Vazone - Nº 75</h5>
						<h5 className="text-white">Bairro: Jardim Tereza Maria</h5>
						<h5 className="text-white">Cidade: Itapecerica da Serra - SP</h5>
						<h5 className="text-white">CEP: 06850-971</h5>
						<Link to="/admin/perfil/editar"><button type="submit" className="btn btn-post zoom">Editar</button></Link>
						<hr className="bg" />
					</div>

					<legend className="text-center text-white"><strong>DADOS DE CONTATO</strong></legend>
					<FontAwesomeIcon icon={faPhone} className="fa fa-fw fa-phone white fa-5x icon-profile"/>
					<div className="text-center justify">
						<h5 className="text-white mt-3">Celular: (11) 96230-5100</h5>
						<h5 className="text-white">Telefone: (11) 4706-6170</h5>
						<Link to="/admin/perfil/editar"><button type="submit" className="btn btn-post zoom">Editar</button></Link>
						<hr className="bg" />
					</div>
				</div>


			</div>

		);
	}
}
