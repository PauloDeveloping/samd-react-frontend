import React from 'react'
import { Route } from 'react-router-dom'
import TeacherTemplate from '../components/sidebar/TeacherTemplate'

// ADMIN IMPORTS

import Calendar from '../pages/teacher/agend/Calendar'
import Events from '../pages/teacher/agend/Events'
import Grid from '../pages/teacher/agend/Grid'
import Task from '../pages/teacher/agend/Tasks'

import AllEmployeers from '../pages/teacher/employee/AllEmployeers'

import AllTeachers from '../pages/teacher/teachers/AllTeachers'

import Home from '../pages/teacher/Home'

import AboutInstitution from '../pages/teacher/institution/AboutInstitution'
import InstitutionBenefits from '../pages/teacher/institution/InstitutionBenefits'
import InstitutionEmail from '../pages/teacher/institution/InstitutionEmail'
import Board from '../pages/teacher/institution/Board'
import Classes from '../pages/teacher/institution/Classes'

import AllNews from '../pages/teacher/news/AllNews'
import NewArticle from '../pages/teacher/news/NewArticle'

import MyProfile from '../pages/teacher/profile/MyProfile'
import EditProfile from '../pages/teacher/profile/EditProfile'

import CustomReport from '../pages/teacher/report/CustomReport'
import StudentReport from '../pages/teacher/report/StudentReport'
import TeacherReport from '../pages/teacher/report/TeacherReport'

import AllServices from '../pages/teacher/service/AllServices'
import ServiceRequest from '../pages/teacher/service/ServiceRequest'

import AllStudents from '../pages/teacher/students/AllStudents'
import StudentFrequency from '../pages/teacher/students/StudentFrequency'
import StudentMentions from '../pages/teacher/students/StudentMentions'

import TeacherRequest from '../pages/teacher/teachers/TeacherRequest'
import PTD from '../pages/teacher/teachers/PTD'
import PresentList from '../pages/teacher/teachers/PresenceList'
import ClassMaterial from '../pages/teacher/teachers/ClassMaterial'

export default class TeacherRoutes extends React.Component {

	constructor(props) {
		super(props)
	}

	componentDidMount() {

	}

	render() {


		return (
			<>

				{/* ROTAS DE PROFESSOR */}
				<Route path="/professor/dashboard" exact render={(route) => <TeacherTemplate route={route} component={Home} pageTitle="Dashboard" />} />

				<Route path="/professor/alunos/todos" exact render={(route) => <TeacherTemplate route={route} component={AllStudents} pageTitle="Todos os alunos" />} />
				<Route path="/professor/alunos/mencoes" exact render={(route) => <TeacherTemplate route={route} component={StudentMentions} />} pageTitle="Menções dos alunos" />
				<Route path="/professor/alunos/frequencia" exact render={(route) => <TeacherTemplate route={route} component={StudentFrequency} pageTitle="Frequência dos alunos" />} />

				<Route path="/professor/professores/solicitacoes" exact render={(route) => <TeacherTemplate route={route} component={TeacherRequest} pageTitle="Minhas Solicitações" />} />
				<Route path="/professor/professores/ptd" exact render={(route) => <TeacherTemplate route={route} component={PTD} pageTitle="PTD" />} />
				<Route path="/professor/professores/lista-de-presenca" exact render={(route) => <TeacherTemplate route={route} component={PresentList} pageTitle="Lista de presença" />} />
				<Route path="/professor/professores/material-de-classe" exact render={(route) => <TeacherTemplate route={route} component={ClassMaterial} pageTitle="Material de Classe" />} />

				<Route path="/professor/funcionarios/todos" exact render={(route) => <TeacherTemplate route={route} component={AllEmployeers} pageTitle="Todos os funcionários" />} />

				<Route path="/professor/professores/todos" exact render={(route) => <TeacherTemplate route={route} component={AllTeachers} pageTitle="Todos os professores" />} />

				<Route path="/professor/instituicao/mural" exact render={(route) => <TeacherTemplate route={route} component={Board} pageTitle="Mural digital" />} />

				<Route path="/professor/instituicao/sobre" exact render={(route) => <TeacherTemplate route={route} component={AboutInstitution} pageTitle="Sobre a instituição" />} />
				<Route path="/professor/instituicao/beneficios" exact render={(route) => <TeacherTemplate route={route} component={InstitutionBenefits} pageTitle="Benefícios" />} />
				<Route path="/professor/instituicao/email" exact render={(route) => <TeacherTemplate route={route} component={InstitutionEmail} pageTitle="Email institucional" />} />
				<Route path="/professor/instituicao/aulas" exact render={(route) => <TeacherTemplate route={route} component={Classes} pageTitle="Aulas semanais" />} />

				<Route path="/professor/servicos/todos" exact render={(route) => <TeacherTemplate route={route} component={AllServices} pageTitle="Todos os serviços" />} />
				<Route path="/professor/servicos/solicitacoes" exact render={(route) => <TeacherTemplate route={route} component={ServiceRequest} pageTitle="Solicitações de serviços" />} />

				<Route path="/professor/noticias/todas" exact render={(route) => <TeacherTemplate route={route} component={AllNews} pageTitle="Todas as notícias" />} />
				<Route path="/professor/noticias/nova" exact render={(route) => <TeacherTemplate route={route} component={NewArticle} pageTitle="Nova notícia" />} />

				<Route path="/professor/agenda/calendario" exact render={(route) => <TeacherTemplate route={route} component={Calendar} pageTitle="Calendário Anual Escolar" />} />
				<Route path="/professor/agenda/grade" exact render={(route) => <TeacherTemplate route={route} component={Grid} />} pageTitle="Grade escolar" />
				<Route path="/professor/agenda/eventos" exact render={(route) => <TeacherTemplate route={route} component={Events} pageTitle="Eventos" />} />
				<Route path="/professor/agenda/tarefas" exact render={(route) => <TeacherTemplate route={route} component={Task} pageTitle="Tarefas" />} />

				<Route path="/professores/relatorios/aluno" exact render={(route) => <TeacherTemplate route={route} component={StudentReport} />} />
				<Route path="/professores/relatorios/professor" exact render={(route) => <TeacherTemplate route={route} component={TeacherReport} />} />
				<Route path="/professores/relatorios/customizado" exact render={(route) => <TeacherTemplate route={route} component={CustomReport} />} />

				<Route path="/professor/perfil" exact render={(route) => <TeacherTemplate route={route} component={MyProfile} pageTitle="Meu perfil" />} />
				<Route path="/professor/perfil/editar" exact render={(route) => <TeacherTemplate route={route} component={EditProfile} pageTitle="Editar informações" />} />
			</>
		)
	}
}
