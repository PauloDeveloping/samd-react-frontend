import React, { useState } from 'react'
import logo from '../../assets/image/logo_robo.png'
import api from '../../services/api'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faLock, faTag } from '@fortawesome/free-solid-svg-icons'
import './index.css'

export default class Login extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			institution: '241',
			username: 'admin',
			passwd: '123'
		}
	}

	async handleSubmit(e) {
		e.preventDefault()
		const { username, passwd } = this.state


		const response = await api.post('/login', { username, passwd })

		if (response.data.status == 1) {
			const { user_id, usertype } = response.data

			localStorage.setItem('user', user_id)
			localStorage.setItem('usertype', usertype)
			if (usertype == 'A') {
				this.props.history.push('/admin/dashboard')
			}

			else if (usertype == 'S') {
				this.props.history.push('/aluno/dashboard')
			}

			else if (usertype == 'T') {
				this.props.history.push('/professor/dashboard')
			}

			else {
				alert('Erro desconhecido')
			}


		}

		else {
			alert('Login, senha ou código da instituição incorretos');
		}
	}

	componentDidMount() {

	}

	render() {

		return (
			<div className="container-fluid">
				<div className="row mt-4">
					<div className="col-md-6 col-xs-12 text-center">
						<img src={logo} alt="Logo" width="450" />

						<form onSubmit={e => this.handleSubmit(e)}>
							<div className="row mt-4">
								<div className="col-md-3 offset-9">
									<div className="input-group">
										<div className="input-group-prepend">
											<span className="input-group-text"><FontAwesomeIcon icon={faTag} /></span>
										</div>
										<input type="number" name="instNumber" className="form-control" placeholder="Código ETEC"
											value={this.state.institution} onChange={e => this.setState({ institution: e.target.value })} />
									</div>
								</div>
							</div>

							<div className="row mt-2">
								<div className="col-md-12 col-xs-12">
									<div className="input-group">
										<div className="input-group-prepend">
											<span className="input-group-text"><FontAwesomeIcon icon={faUser} /></span>
										</div>
										<input type="text" name="loginUsernameTxt" id="loginUsernameTxt" className="form-control" placeholder="Usuário"
											value={this.state.username} onChange={e => this.setState({ username: e.target.value })} />
									</div>
								</div>
							</div>

							<div className="row mt-2">
								<div className="col-md-12 col-xs-12">
									<div className="input-group">
										<div className="input-group-prepend">
											<span className="input-group-text"><FontAwesomeIcon icon={faLock} /></span>
										</div>
										<input type="password" name="loginPasswdTxt" id="loginPasswdTxt" className="form-control" placeholder="Senha"
											value={this.state.passwd} onChange={e => this.setState({ passwd: e.target.value })} />
									</div>
								</div>
							</div>

							<hr className="border-light" />

							<button type="submit" className="btn btn-primary btn-block">Entrar</button>
						</form>
					</div>

					<div className="col-md-6 col-xs-12">
						<div className="row">
							<div className="col-12">
								<h1 className="page-title text-white">Sistema Acadêmico Modular Definitivo</h1>
							</div>
						</div>

						<div className="row">
							<div className="col-12">
								<article className="descricao-sistema text-white">
									<p className="article-paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
										do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
										quis nostrud exercitation ullamco laboris
										nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
										voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
										cupidatat non proident, sunt in culpa qui officia
                      deserunt mollit anim id est laborum.</p>
									<p className="article-paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
										do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
										quis nostrud exercitation ullamco laboris
										nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
										voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
										cupidatat non proident, sunt in culpa qui officia
                      deserunt mollit anim id est laborum.</p>
								</article>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
