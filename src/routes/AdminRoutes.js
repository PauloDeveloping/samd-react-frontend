import React from 'react'
import { Route } from 'react-router-dom'
import AdminTemplate from '../components/sidebar/AdminTemplate'

// ADMIN IMPORTS

import Calendar from '../pages/admin/agend/Calendar'
import Events from '../pages/admin/agend/Events'
import Grid from '../pages/admin/agend/Grid'

import AllEmployeers from '../pages/admin/employee/AllEmployeers'
import EmployeeSolicitation from '../pages/admin/employee/EmployeeSolicitation'
import NewEmployee from '../pages/admin/employee/NewEmployee'

import Home from '../pages/admin/Home'

import AboutInstitution from '../pages/admin/institution/AboutInstitution'
import InstitutionBenefits from '../pages/admin/institution/InstitutionBenefits'
import InstitutionEmail from '../pages/admin/institution/InstitutionEmail'
import Board from '../pages/admin/institution/Board'

import AllNews from '../pages/admin/news/AllNews'
import NewArticle from '../pages/admin/news/NewArticle'

import MyProfile from '../pages/admin/profiles/MyProfile'
import EditProfile from '../pages/admin/profiles/EditProfile'

import CustomReport from '../pages/admin/report/CustomReport'
import EmployeeReport from '../pages/admin/report/EmployeeReport'
import ServiceReport from '../pages/admin/report/ServiceReport'
import StudentReport from '../pages/admin/report/StudentReport'
import TeacherReport from '../pages/admin/report/TeacherReport'

import AllServices from '../pages/admin/service/AllServices'
import ServiceRequest from '../pages/admin/service/ServiceRequest'

import AllStudents from '../pages/admin/students/AllStudents'
import StudentDocs from '../pages/admin/students/StudentDocs'
import StudentFrequency from '../pages/admin/students/StudentFrequency'
import StudentMentions from '../pages/admin/students/StudentMentions'
import StudentSolicitation from '../pages/admin/students/StudentSolicitation'
import NewStudent from '../pages/admin/students/NewStudent'
import Registration from '../pages/admin/students/Registration'

import AllTeachers from '../pages/admin/teachers/AllTeachers'
import TeacherRequest from '../pages/admin/teachers/TeacherRequest'

export default class AdminRoutes extends React.Component {

	constructor(props) {
		super(props)
	}

	componentDidMount() {

	}

	render() {

		return (
			<>

				{/* ROTAS DE ADMIN */}
				<Route path="/admin/dashboard" exact render={(route) => <AdminTemplate route={route} component={Home} pageTitle='Dashboard' />} />

				<Route path="/admin/alunos/todos" exact render={(route) => <AdminTemplate route={route} component={AllStudents} pageTitle="Todos os alunos" />} />
				<Route path="/admin/alunos/mencoes" exact render={(route) => <AdminTemplate route={route} component={StudentMentions} pageTitle="Menções dos alunos" />} />
				<Route path="/admin/alunos/frequencia" exact render={(route) => <AdminTemplate route={route} component={StudentFrequency} pageTitle="Frequência dos alunos" />} />
				<Route path="/admin/alunos/documentos" exact render={(route) => <AdminTemplate route={route} component={StudentDocs} pageTitle="Documentos dos alunos" />} />
				<Route path="/admin/alunos/solicitacoes" exact render={(route) => <AdminTemplate route={route} pageTitle="Solicitações dos alunos" component={StudentSolicitation} />} />
				<Route path="/admin/alunos/novo" exact render={(route) => <AdminTemplate route={route} component={NewStudent} pageTitle="Inserir novo aluno" />} />
				<Route path="/admin/alunos/rematricula" exact render={(route) => <AdminTemplate route={route} component={Registration} pageTitle="Rematrícula" />} />

				<Route path="/admin/professores/todos" exact render={(route) => <AdminTemplate route={route} component={AllTeachers} pageTitle="Todos os professores" />} />
				<Route path="/admin/professores/solicitacoes" exact render={(route) => <AdminTemplate route={route} component={TeacherRequest} pageTitle="Solicitações de professores" />} />

				<Route path="/admin/funcionarios/todos" exact render={(route) => <AdminTemplate route={route} component={AllEmployeers} pageTitle="Todos os funcionários" />} />
				<Route path="/admin/funcionarios/solicitacoes" exact render={(route) => <AdminTemplate route={route} component={EmployeeSolicitation} pageTitle="Solicitações de funcionários" />} />
				<Route path="/admin/funcionarios/novo" exact render={(route) => <AdminTemplate route={route} component={NewEmployee} pageTitle="Inserir novo funcionário" />} />

				<Route path="/admin/instituicao/mural" exact render={(route) => <AdminTemplate route={route} component={Board} pageTitle="Mural digital" />} />

				<Route path="/admin/instituicao/sobre" exact render={(route) => <AdminTemplate route={route} component={AboutInstitution} pageTitle="Sobre a instituição" />} />
				<Route path="/admin/instituicao/beneficios" exact render={(route) => <AdminTemplate route={route} component={InstitutionBenefits} pageTitle="Benefícios" />} />
				<Route path="/admin/instituicao/email" exact render={(route) => <AdminTemplate route={route} component={InstitutionEmail} pageTitle="Email institucional" />} />

				<Route path="/admin/servicos/todos" exact render={(route) => <AdminTemplate route={route} component={AllServices} pageTitle="Todos os serviços" />} />
				<Route path="/admin/servicos/solicitacoes" exact render={(route) => <AdminTemplate route={route} component={ServiceRequest} pageTitle="Solicitações de serviços" />} />

				<Route path="/admin/noticias/todas" exact render={(route) => <AdminTemplate route={route} component={AllNews} pageTitle="Todas as notificas" />} />
				<Route path="/admin/noticias/nova" exact render={(route) => <AdminTemplate route={route} component={NewArticle} />} pageTitle="Nova notícia" />

				<Route path="/admin/agenda/calendario" exact render={(route) => <AdminTemplate route={route} pageTitle="Calendário Anual Escolar" component={Calendar} />} />
				<Route path="/admin/agenda/grade" exact render={(route) => <AdminTemplate route={route} component={Grid} pageTitle="Grade de estudos" />} />
				<Route path="/admin/agenda/eventos" exact render={(route) => <AdminTemplate route={route} component={Events} pageTitle="Eventos" />} />

				<Route path="/admin/relatorios/aluno" exact render={(route) => <AdminTemplate route={route} pageTitle='Todos os alunos' component={StudentReport} />} />
				<Route path="/admin/relatorios/professor" exact render={(route) => <AdminTemplate route={route} component={TeacherReport} pageTitle="Relatório de professores" />} />
				<Route path="/admin/relatorios/funcionarios" exact render={(route) => <AdminTemplate route={route} component={EmployeeReport} pageTitle="Relatório de funcionários" />} />
				<Route path="/admin/relatorios/servicos" exact render={(route) => <AdminTemplate route={route} component={ServiceReport} pageTitle="Relatório de serviços" />} />
				<Route path="/admin/relatorios/customizado" exact render={(route) => <AdminTemplate route={route} component={CustomReport} pageTitle="Relatório customizado" />} />

				<Route path="/admin/perfil" exact render={(route) => <AdminTemplate route={route} component={MyProfile} pageTitle="Meu perfil" />} />
				<Route path="/admin/perfil/editar" exact render={(route) => <AdminTemplate route={route} component={EditProfile} pageTitle="Editar informações" />} />
			</>
		)
	}
}
