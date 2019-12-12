import React from 'react';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav'

import styled from 'styled-components'

import '@trendmicro/react-sidenav/dist/react-sidenav.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faHome, faGraduationCap, faChalkboardTeacher, faIdBadge,
	faClipboard, faBuilding, faWrench, faBullhorn, faCalendarAlt,
	faEdit, faBell, faIdCard, faSignInAlt
} from '@fortawesome/free-solid-svg-icons'

import './index.css';

const Main = styled.main`
    position: relative;
    overflow: hidden;
    transition: all .15s;
    padding: 0 20px;
    margin-left: ${props => (props.expanded ? 240 : 64)}px;
`;

export default class extends React.Component {

	constructor(props) {
		super(props);
	}

	state = {
		selected: '/professor/dashboard',
		expanded: false
	};

	onSelect = (selected) => {
		this.setState({ selected: selected });
		this.navigate(selected);
	};

	onToggle = (expanded) => {
		this.setState({ expanded: expanded });
	};

	navigate = (path) => {
		this.props.route.history.push(path)
	}

	render() {

		const { expanded, selected } = this.state;

		return (

			<div>

				<SideNav
					className="sidebar"
					onSelect={this.onSelect}
					onToggle={this.onToggle}
				>
					<SideNav.Toggle />

					<SideNav.Nav defaultSelected="/professor/dashboard" selected={selected}>

						<NavItem eventKey="/professor/dashboard">

							<NavIcon>
								<FontAwesomeIcon icon={faHome} className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
							</NavIcon>
							<NavText style={{ fontSize: '1.30em' }}>
								Home
								</NavText>

						</NavItem>

						<NavItem eventKey="/professor/alunos">
							<NavIcon>
								<FontAwesomeIcon icon={faGraduationCap} className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
							</NavIcon>
							<NavText style={{ fontSize: '1.30em' }}>
								Alunos
									</NavText>


							<NavItem eventKey="/professor/alunos/todos">
								<NavText style={{ fontSize: '1.25em' }}>
									&nbsp;Todos os alunos
									</NavText>
							</NavItem>

							<NavItem eventKey="/professor/alunos/mencoes">
								<NavText style={{ fontSize: '1.25em' }}>
									&nbsp;Menções
											</NavText>
							</NavItem>

							<NavItem eventKey="/professor/alunos/frequencia">
								<NavText style={{ fontSize: '1.25em' }}>
									&nbsp;Frequência
											</NavText>
							</NavItem>

						</NavItem>

						<NavItem eventKey="/professor/professores">
							<NavIcon>
								<FontAwesomeIcon icon={faChalkboardTeacher} className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
							</NavIcon>
							<NavText style={{ fontSize: '1.30em' }}>
								Professores
									</NavText>

							<NavItem eventKey="/professor/professores/todos">
								<NavText style={{ fontSize: '1.25em' }}>
									&nbsp;Todos os professores
											</NavText>
							</NavItem>

							<NavItem eventKey="/professor/professores/solicitacoes">
								<NavText style={{ fontSize: '1.25em' }}>
									&nbsp;Solicitações de professores
											</NavText>
							</NavItem>

						</NavItem>

						<NavItem eventKey="/professor/funcionarios">
							<NavIcon>
								<FontAwesomeIcon icon={faIdBadge} className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
							</NavIcon>
							<NavText style={{ fontSize: '1.30em' }}>
								Funcionarios
									</NavText>

							<NavItem eventKey="/professor/funcionarios/todos">
								<NavText style={{ fontSize: '1.25em' }}>
									&nbsp;Todos os funcionarios
											</NavText>
							</NavItem>

						</NavItem>

						<NavItem eventKey="/professor/instituicao">

							<NavIcon>
								<FontAwesomeIcon icon={faBuilding} className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
							</NavIcon>
							<NavText style={{ fontSize: '1.30em' }}>
								Instituição
									</NavText>

							<NavItem eventKey="/professor/instituicao/sobre">
								<NavText style={{ fontSize: '1.25em' }}>
									&nbsp;Sobre a instituição
											</NavText>
							</NavItem>

							<NavItem eventKey="/professor/instituicao/aulas">
								<NavText style={{ fontSize: '1.25em' }}>
									&nbsp;Aulas do dia
											</NavText>
							</NavItem>

							<NavItem eventKey="/professor/instituicao/mural">

							<NavText style={{ fontSize: '1.30em' }}>
								Mural
									</NavText>
						</NavItem>

							<NavItem eventKey="/professor/instituicao/beneficios">
								<NavText style={{ fontSize: '1.25em' }}>
									&nbsp;Benefícios
											</NavText>
							</NavItem>

							<NavItem eventKey="/professor/instituicao/email">
								<NavText style={{ fontSize: '1.25em' }}>
									&nbsp;Email institucional
											</NavText>
							</NavItem>

						</NavItem>

						<NavItem eventKey="/professor/servicos">

							<NavIcon>
								<FontAwesomeIcon icon={faWrench} className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
							</NavIcon>
							<NavText style={{ fontSize: '1.30em' }}>
								Serviços
									</NavText>

							<NavItem eventKey="/professor/servicos/todos">
								<NavText style={{ fontSize: '1.25em' }}>
									&nbsp;Todos os serviços
											</NavText>
							</NavItem>

							<NavItem eventKey="/professor/servicos/solicitacoes">
								<NavText style={{ fontSize: '1.25em' }}>
									&nbsp;Solicitações
											</NavText>
							</NavItem>

						</NavItem>

						<NavItem eventKey="/professor/noticias">

							<NavIcon>
								<FontAwesomeIcon icon={faBullhorn} className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
							</NavIcon>
							<NavText style={{ fontSize: '1.30em' }}>
								Notícias
									</NavText>

							<NavItem eventKey="/professor/noticias/todas">
								<NavText style={{ fontSize: '1.25em' }}>
									&nbsp;Todas as notícias
											</NavText>
							</NavItem>

							<NavItem eventKey="/professor/noticias/nova">
								<NavText style={{ fontSize: '1.25em' }}>
									&nbsp;Nova notícia
											</NavText>
							</NavItem>

						</NavItem>

						<NavItem eventKey="/professor/agenda">

							<NavIcon>
								<FontAwesomeIcon icon={faCalendarAlt} className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
							</NavIcon>
							<NavText style={{ fontSize: '1.30em' }}>
								Agenda
									</NavText>

							<NavItem eventKey="/professor/agenda/calendario">
								<NavText style={{ fontSize: '1.25em' }}>
									&nbsp;Calendário Anual Escolar
											</NavText>
							</NavItem>

							<NavItem eventKey="/professor/agenda/grade">
								<NavText style={{ fontSize: '1.25em' }}>
									&nbsp;Grade curricular
											</NavText>
							</NavItem>

							<NavItem eventKey="/professor/agenda/eventos">
								<NavText style={{ fontSize: '1.25em' }}>
									&nbsp;Eventos
											</NavText>
							</NavItem>

						</NavItem>

						<NavItem eventKey="/professor/relatorios">

							<NavIcon>
								<FontAwesomeIcon icon={faEdit} className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
							</NavIcon>
							<NavText style={{ fontSize: '1.30em' }}>
								Relatórios
									</NavText>

							<NavItem eventKey="/professor/relatorios/aluno">
								<NavText style={{ fontSize: '1.25em' }}>
									&nbsp;Menções/faltas parciais
											</NavText>
							</NavItem>

							<NavItem eventKey="/professor/relatorios/aluno">
								<NavText style={{ fontSize: '1.25em' }}>
									&nbsp;Menções/faltas finais
											</NavText>
							</NavItem>

							<NavItem eventKey="/professor/relatorios/customizado">
								<NavText style={{ fontSize: '1.25em' }}>
									&nbsp;Customizado
											</NavText>
							</NavItem>

						</NavItem>

						<NavItem eventKey="/professor/perfil">
							<NavIcon>
								<FontAwesomeIcon icon={faIdCard} className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
							</NavIcon>
							<NavText style={{ fontSize: '1.30em' }}>
								Perfil
									</NavText>
						</NavItem>

						<NavItem eventKey="/logout">
							<NavIcon>
								<FontAwesomeIcon icon={faSignInAlt} className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
							</NavIcon>
							<NavText style={{ fontSize: '1.30em' }}>
								Sair
									</NavText>
						</NavItem>

					</SideNav.Nav>

				</SideNav>

				<Main expanded={expanded}>
					<h1 className="page-title">{this.props.pageTitle}</h1>
					<this.props.component route={this.props.route} />
				</Main>

			</div>
		)
	}

}
