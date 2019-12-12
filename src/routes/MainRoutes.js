import React from 'react'
import { Route } from 'react-router-dom'

import Login from '../pages/Login'
import AdminRoutes from './AdminRoutes'
import StudentRoutes from './StudentRoutes'
import TeacherRoutes from './TeacherRoutes'

export default class MainRoutes extends React.Component {

	constructor(props) {
		super(props)
	}

	componentDidMount() {

	}

	render() {

		return (
			<>

				<Route path="/" exact component={Login} />
				<AdminRoutes />
				<StudentRoutes />
				<TeacherRoutes />

			</>
		)

	}
}
