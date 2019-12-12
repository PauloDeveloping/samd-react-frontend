import React from 'react';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav'

import styled from 'styled-components'

import '@trendmicro/react-sidenav/dist/react-sidenav.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faGraduationCap, faChalkboardTeacher,
		faIdBadge, faTag, faBuilding, faWrench, faBullhorn, faCalendarAlt,
		faEdit, faBell, faIdCard, faSignOutAlt
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
		selected: '/admin/dashboard',
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

					<SideNav.Nav defaultSelected="/admin/dashboard" selected={selected}>

						<NavItem eventKey="/admin/dashboard">

							<NavIcon>
								<FontAwesomeIcon icon={faHome} className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
							</NavIcon>
							<NavText style={{ fontSize: '1.30em' }}>
								Home
								</NavText>

						</NavItem>

						<NavItem eventKey="/admin/alunos">
							<NavIcon>
								<FontAwesomeIcon icon={faGraduationCap} className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
							</NavIcon>
							<NavText style={{ fontSize: '1.30em' }}>
								Alunos
									</NavText>


							<NavItem eventKey="/admin/alunos/todos">
								<NavText style={{ fontSize: '1.25em' }}>
									&nbsp;Todos os alunos
									</NavText>
							</NavItem>

							<NavItem eventKey="/admin/alunos/rematricula">
								<NavText style={{ fontSize: '1.25em' }}>
									&nbsp;Rematrícula
									</NavText>
							</NavItem>

							<NavItem eventKey="/admin/alunos/mencoes">
								<NavText style={{ fontSize: '1.25em' }}>
									&nbsp;Menções
											</NavText>
							</NavItem>

							<NavItem eventKey="/admin/alunos/frequencia">
								<NavText style={{ fontSize: '1.25em' }}>
									&nbsp;Frequência
											</NavText>
							</NavItem>

							<NavItem eventKey="/admin/alunos/documentos">
								<NavText style={{ fontSize: '1.25em' }}>
									&nbsp;Documentos
											</NavText>
							</NavItem>

							<NavItem eventKey="/admin/alunos/solicitacoes">
								<NavText style={{ fontSize: '1.25em' }}>
									&nbsp;Solicitações
											</NavText>
							</NavItem>

						</NavItem>

						<NavItem eventKey="/admin/professores">
							<NavIcon>
								<FontAwesomeIcon icon={faChalkboardTeacher} className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
							</NavIcon>
							<NavText style={{ fontSize: '1.30em' }}>
								Professores
									</NavText>

							<NavItem eventKey="/admin/professores/todos">
								<NavText style={{ fontSize: '1.25em' }}>
									&nbsp;Todos os professores
											</NavText>
							</NavItem>

							<NavItem eventKey="/admin/professores/solicitacoes">
								<NavText style={{ fontSize: '1.25em' }}>
									&nbsp;Solicitações de professores
											</NavText>
							</NavItem>

						</NavItem>

						<NavItem eventKey="/admin/funcionarios">
							<NavIcon>
								<FontAwesomeIcon icon={faIdBadge} className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
							</NavIcon>
							<NavText style={{ fontSize: '1.30em' }}>
								Funcionarios
									</NavText>

							<NavItem eventKey="/admin/funcionarios/todos">
								<NavText style={{ fontSize: '1.25em' }}>
									&nbsp;Todos os funcionarios
											</NavText>
							</NavItem>

							<NavItem eventKey="/admin/funcionarios/solicitacoes">
								<NavText  style={{ fontSize: '1.25em' }}>
									&nbsp;Solicitações
											</NavText>
							</NavItem>

						</NavItem>

						<NavItem eventKey="/admin/instituicao/mural">
							<NavIcon>
								<FontAwesomeIcon icon={faTag} className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
							</NavIcon>
							<NavText style={{ fontSize: '1.30em' }}>
								Mural
									</NavText>
						</NavItem>

						<NavItem eventKey="/admin/instituicao">

							<NavIcon>
								<FontAwesomeIcon icon={faBuilding} className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
							</NavIcon>
							<NavText style={{ fontSize: '1.30em' }}>
								Instituição
									</NavText>

							<NavItem eventKey="/admin/instituicao/sobre">
								<NavText style={{ fontSize: '1.25em' }}>
									&nbsp;Sobre a instituição
											</NavText>
							</NavItem>

							<NavItem eventKey="/admin/instituicao/beneficios">
								<NavText style={{ fontSize: '1.25em' }}>
									&nbsp;Benefícios
											</NavText>
							</NavItem>

							<NavItem eventKey="/admin/instituicao/email">
								<NavText style={{ fontSize: '1.25em' }}>
									&nbsp;Email institucional
											</NavText>
							</NavItem>

						</NavItem>

						<NavItem eventKey="/admin/servicos">

							<NavIcon>
								<FontAwesomeIcon icon={faWrench} className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
							</NavIcon>
							<NavText style={{ fontSize: '1.30em' }}>
								Serviços
									</NavText>

							<NavItem eventKey="/admin/servicos/todos">
								<NavText style={{ fontSize: '1.25em' }}>
									&nbsp;Todos os serviços
											</NavText>
							</NavItem>

							<NavItem eventKey="/admin/servicos/solicitacoes">
								<NavText style={{ fontSize: '1.25em' }}>
									&nbsp;Solicitações
											</NavText>
							</NavItem>

						</NavItem>

						<NavItem eventKey="/admin/noticias">

							<NavIcon>
								<FontAwesomeIcon icon={faBullhorn} className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
							</NavIcon>
							<NavText style={{ fontSize: '1.30em' }}>
								Notícias
									</NavText>

							<NavItem eventKey="/admin/noticias/todas">
								<NavText style={{ fontSize: '1.25em' }}>
									&nbsp;Todas as notícias
											</NavText>
							</NavItem>

							<NavItem eventKey="/admin/noticias/nova">
								<NavText style={{ fontSize: '1.25em' }}>
									&nbsp;Nova notícia
											</NavText>
							</NavItem>

						</NavItem>

						<NavItem eventKey="/admin/agenda">

							<NavIcon>
								<FontAwesomeIcon icon={faCalendarAlt} className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
							</NavIcon>
							<NavText style={{ fontSize: '1.30em' }}>
								Agenda
									</NavText>

							<NavItem eventKey="/admin/agenda/calendario">
								<NavText style={{ fontSize: '1.25em' }}>
									&nbsp;Calendário Anual Escolar
											</NavText>
							</NavItem>

							<NavItem eventKey="/admin/agenda/grade">
								<NavText style={{ fontSize: '1.25em' }}>
									&nbsp;Grade curricular
											</NavText>
							</NavItem>

							<NavItem eventKey="/admin/agenda/eventos">
								<NavText style={{ fontSize: '1.25em' }}>
									&nbsp;Eventos
											</NavText>
							</NavItem>

						</NavItem>

						<NavItem eventKey="/admin/relatorios">

							<NavIcon>
								<FontAwesomeIcon icon={faEdit} className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
							</NavIcon>
							<NavText style={{ fontSize: '1.30em' }}>
								Relatórios
									</NavText>

							<NavItem eventKey="/admin/relatorios/aluno">
								<NavText style={{ fontSize: '1.25em' }}>
									&nbsp;Alunos
											</NavText>
							</NavItem>

							<NavItem eventKey="/admin/relatorios/professor">
								<NavText style={{ fontSize: '1.25em' }}>
									&nbsp;Professores
											</NavText>
							</NavItem>

							<NavItem eventKey="/admin/relatorios/funcionarios">
								<NavText style={{ fontSize: '1.25em' }}>
									&nbsp;Funcionarios
											</NavText>
							</NavItem>

							<NavItem eventKey="/admin/relatorios/servicos">
								<NavText style={{ fontSize: '1.25em' }}>
									&nbsp;Serviços
											</NavText>
							</NavItem>

							<NavItem eventKey="/admin/relatorios/customizado">
								<NavText style={{ fontSize: '1.25em' }}>
									&nbsp;Customizado
											</NavText>
							</NavItem>

						</NavItem>

						<NavItem eventKey="/admin/perfil">
							<NavIcon>
								<FontAwesomeIcon icon={faIdCard} className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
							</NavIcon>
							<NavText style={{ fontSize: '1.30em' }}>
								Perfil
									</NavText>
						</NavItem>

						<NavItem eventKey="/logout">
							<NavIcon>
								<FontAwesomeIcon icon={faSignOutAlt} className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
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
