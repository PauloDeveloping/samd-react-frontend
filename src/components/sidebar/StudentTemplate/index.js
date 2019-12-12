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
		selected: '/aluno/dashboard',
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

					<SideNav.Nav defaultSelected="/aluno/dashboard" selected={selected}>

						<NavItem eventKey="/aluno/dashboard">

							<NavIcon>
								<FontAwesomeIcon icon={faHome} className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
							</NavIcon>
							<NavText style={{ fontSize: '1.30em' }}>
								Home
								</NavText>

						</NavItem>

						<NavItem eventKey="/aluno/alunos">
							<NavIcon>
								<FontAwesomeIcon icon={faGraduationCap} className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
							</NavIcon>
							<NavText style={{ fontSize: '1.30em' }}>
								Alunos
									</NavText>

							<NavItem eventKey="/aluno/alunos/rematricula">
								<NavText style={{ fontSize: '1.25em' }}>
									&nbsp;Rematrícula
									</NavText>
							</NavItem>

							<NavItem eventKey="/aluno/alunos/mencoes">
								<NavText style={{ fontSize: '1.25em' }}>
									&nbsp;Menções
											</NavText>
							</NavItem>

							<NavItem eventKey="/aluno/alunos/frequencia">
								<NavText style={{ fontSize: '1.25em' }}>
									&nbsp;Frequência
											</NavText>
							</NavItem>

							<NavItem eventKey="/aluno/alunos/documentos">
								<NavText style={{ fontSize: '1.25em' }}>
									&nbsp;Documentos
											</NavText>
							</NavItem>

							<NavItem eventKey="/aluno/alunos/material-aula">
								<NavText style={{ fontSize: '1.25em' }}>
									&nbsp;Materiais
											</NavText>
							</NavItem>

							<NavItem eventKey="/aluno/alunos/solicitacoes">
								<NavText style={{ fontSize: '1.25em' }}>
									&nbsp;Solicitações
											</NavText>
							</NavItem>

						</NavItem>

						<NavItem eventKey="/aluno/professores">
							<NavIcon>
								<FontAwesomeIcon icon={faChalkboardTeacher} className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
							</NavIcon>
							<NavText style={{ fontSize: '1.30em' }}>
								Professores
									</NavText>

							<NavItem eventKey="/aluno/professores/todos">
								<NavText style={{ fontSize: '1.25em' }}>
									&nbsp;Todos os professores
											</NavText>
							</NavItem>

						</NavItem>

						<NavItem eventKey="/aluno/funcionarios">
							<NavIcon>
								<FontAwesomeIcon icon={faIdBadge} className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
							</NavIcon>
							<NavText style={{ fontSize: '1.30em' }}>
								Funcionarios
									</NavText>

							<NavItem eventKey="/aluno/funcionarios/todos">
								<NavText style={{ fontSize: '1.25em' }}>
									&nbsp;Todos os funcionarios
											</NavText>
							</NavItem>

						</NavItem>

						<NavItem eventKey="/aluno/instituicao/mural">
							<NavIcon>
								<FontAwesomeIcon icon={faClipboard} className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
							</NavIcon>
							<NavText style={{ fontSize: '1.30em' }}>
								Mural
									</NavText>
						</NavItem>

						<NavItem eventKey="/aluno/instituicao">

							<NavIcon>
								<FontAwesomeIcon icon={faBuilding} className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
							</NavIcon>
							<NavText style={{ fontSize: '1.30em' }}>
								Instituição
									</NavText>

							<NavItem eventKey="/aluno/instituicao/sobre">
								<NavText style={{ fontSize: '1.25em' }}>
									&nbsp;Sobre a instituição
											</NavText>
							</NavItem>

							<NavItem eventKey="/aluno/instituicao/beneficios">
								<NavText style={{ fontSize: '1.25em' }}>
									&nbsp;Benefícios
											</NavText>
							</NavItem>

							<NavItem eventKey="/aluno/instituicao/email">
								<NavText style={{ fontSize: '1.25em' }}>
									&nbsp;Email institucional
											</NavText>
							</NavItem>

						</NavItem>

						<NavItem eventKey="/aluno/servicos">

							<NavIcon>
								<FontAwesomeIcon icon={faWrench} className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
							</NavIcon>
							<NavText style={{ fontSize: '1.30em' }}>
								Serviços
									</NavText>

							<NavItem eventKey="/aluno/servicos/todos">
								<NavText style={{ fontSize: '1.25em' }}>
									&nbsp;Todos os serviços
											</NavText>
							</NavItem>

							<NavItem eventKey="/aluno/servicos/solicitacoes">
								<NavText style={{ fontSize: '1.25em' }}>
									&nbsp;Solicitações
											</NavText>
							</NavItem>

						</NavItem>

						<NavItem eventKey="/aluno/noticias">

							<NavIcon>
								<FontAwesomeIcon icon={faBullhorn} className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
							</NavIcon>
							<NavText style={{ fontSize: '1.30em' }}>
								Notícias
									</NavText>

							<NavItem eventKey="/aluno/noticias/todas">
								<NavText style={{ fontSize: '1.25em' }}>
									&nbsp;Todas as notícias
											</NavText>
							</NavItem>

						</NavItem>

						<NavItem eventKey="/aluno/agenda">

							<NavIcon>
								<FontAwesomeIcon icon={faCalendarAlt} className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
							</NavIcon>
							<NavText style={{ fontSize: '1.30em' }}>
								Agenda
									</NavText>

							<NavItem eventKey="/aluno/agenda/calendario">
								<NavText style={{ fontSize: '1.25em' }}>
									&nbsp;Calendário Anual Escolar
											</NavText>
							</NavItem>

							<NavItem eventKey="/aluno/agenda/grade">
								<NavText style={{ fontSize: '1.25em' }}>
									&nbsp;Grade curricular
											</NavText>
							</NavItem>

							<NavItem eventKey="/aluno/agenda/eventos">
								<NavText style={{ fontSize: '1.25em' }}>
									&nbsp;Eventos
											</NavText>
							</NavItem>

						</NavItem>

						<NavItem eventKey="/aluno/relatorios">

							<NavIcon>
								<FontAwesomeIcon icon={faEdit} className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
							</NavIcon>
							<NavText style={{ fontSize: '1.30em' }}>
								Relatórios
									</NavText>

							<NavItem eventKey="/aluno/relatorios/progressoEscolar">
								<NavText style={{ fontSize: '1.25em' }}>
									&nbsp;Progresso escolar
								</NavText>
							</NavItem>

							<NavItem eventKey="/aluno/relatorios/customizado">
								<NavText style={{ fontSize: '1.25em' }}>
									&nbsp;Customizado
								</NavText>
							</NavItem>

						</NavItem>

						<NavItem eventKey="/aluno/perfil">
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
