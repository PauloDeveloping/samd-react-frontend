import React from 'react'
import { Route } from 'react-router-dom'
import StudentTemplate from '../components/sidebar/StudentTemplate'


import Calendar from '../pages/student/agend/Calendar'
import Events from '../pages/student/agend/Events'
import Grid from '../pages/student/agend/Grid'
import Task from '../pages/student/agend/Tasks'

import AllEmployeers from '../pages/student/employee/AllEmployeers'

import Home from '../pages/student/Home'

import AboutInstitution from '../pages/student/institution/AboutInstitution'
import InstitutionBenefits from '../pages/student/institution/InstitutionBenefits'
import InstitutionEmail from '../pages/student/institution/InstitutionEmail'
import Board from '../pages/student/institution/Board'
import Imagine from '../pages/student/institution/MSImagine'

import AllNews from '../pages/student/news/AllNews'

import MyProfile from '../pages/student/profile/MyProfile'
import EditProfile from '../pages/student/profile/EditProfile'

import CustomReport from '../pages/student/report/CustomReport'
import StudentReport from '../pages/student/report/StudentReport'

import AllServices from '../pages/student/service/AllServices'
import ServiceRequest from '../pages/student/service/ServiceRequest'

import StudentDocs from '../pages/student/students/StudentDocs'
import StudentFrequency from '../pages/student/students/StudentFrequency'
import StudentMentions from '../pages/student/students/StudentMentions'
import LessonMaterial from '../pages/student/students/LessonMaterial'
import Registration from '../pages/student/students/Registration'

import AllTeachers from '../pages/student/teachers/AllTeachers'

export default class StudentRoutes extends React.Component {

	constructor(props) {
		super(props)
	}

	componentDidMount() {

	}

	render() {

		return (
			<>

				<Route path="/aluno/dashboard" exact render={(route) => <StudentTemplate route={route} component={Home} pageTitle="Dashboard" />} />

				<Route path="/aluno/alunos/mencoes" exact render={(route) => <StudentTemplate route={route} component={StudentMentions} pageTitle="Minhas menções" />} />
				<Route path="/aluno/alunos/frequencia" exact render={(route) => <StudentTemplate route={route} component={StudentFrequency} pageTitle="Minha frequência" />} />
				<Route path="/aluno/alunos/documentos" exact render={(route) => <StudentTemplate route={route} component={StudentDocs} pageTitle="Meus documentos" />} />
				<Route path="/aluno/alunos/material-aula" exact render={(route) => <StudentTemplate route={route} component={LessonMaterial} pageTitle="Material de aula" />} />
				<Route path="/aluno/alunos/rematricula" exact render={(route) => <StudentTemplate route={route} component={Registration} pageTitle="Rematrícula" />} />				

				<Route path="/aluno/professores/todos" exact render={(route) => <StudentTemplate route={route} component={AllTeachers} pageTitle="Todos os professores" />} />

				<Route path="/aluno/funcionarios/todos" exact render={(route) => <StudentTemplate route={route} component={AllEmployeers} pageTitle="Todos os funcionários" />} />

				<Route path="/aluno/instituicao/mural" exact render={(route) => <StudentTemplate route={route} component={Board} pageTitle="Mural digital" />} />

				<Route path="/aluno/instituicao/sobre" exact render={(route) => <StudentTemplate route={route} component={AboutInstitution} pageTitle="Sobre a instituição" />} />
				<Route path="/aluno/instituicao/beneficios" exact render={(route) => <StudentTemplate route={route} component={InstitutionBenefits} pageTitle="Benefícios" />} />
				<Route path="/aluno/instituicao/email" exact render={(route) => <StudentTemplate route={route} component={InstitutionEmail} pageTitle="Email institucional" />} />
				<Route path="/aluno/instituicao/imagine" exact render={(route) => <StudentTemplate route={route} component={Imagine} pageTitle="Microsoft Imagine" />} />

				<Route path="/aluno/servicos/todos" exact render={(route) => <StudentTemplate route={route} component={AllServices} pageTitle="Todos os serviços" />} />
				<Route path="/aluno/servicos/solicitacoes" exact render={(route) => <StudentTemplate route={route} component={ServiceRequest} pageTitle="Solicitação de serviços" />} />

				<Route path="/aluno/noticias/todas" exact render={(route) => <StudentTemplate route={route} component={AllNews} pageTitle="Todas as notícias" />} />

				<Route path="/aluno/agenda/calendario" exact render={(route) => <StudentTemplate route={route} component={Calendar} pageTitle="Calendário Anual Escolar" />} />
				<Route path="/aluno/agenda/grade" exact render={(route) => <StudentTemplate route={route} component={Grid} />} pageTitle="Grade escolar" />
				<Route path="/aluno/agenda/eventos" exact render={(route) => <StudentTemplate route={route} component={Events} pageTitle="Eventos" />} />
				<Route path="/aluno/agenda/tarefas" exact render={(route) => <StudentTemplate route={route} component={Task} pageTitle="Tarefas" />} />

				<Route path="/alunos/relatorios/aluno" exact render={ (route) => <StudentTemplate route={route} component={StudentReport} /> } />
            	<Route path="/alunos/relatorios/customizado" exact render={ (route) => <StudentTemplate route={route} component={CustomReport} /> } />

				<Route path="/aluno/perfil" exact render={(route) => <StudentTemplate route={route} component={MyProfile} pageTitle="Meu perfil" />} />
				<Route path="/alunos/perfil/editar" exact render={(route) => <StudentTemplate route={route} component={EditProfile} pageTitle="Editar informações" />} />
			</>
		)
	}
}
