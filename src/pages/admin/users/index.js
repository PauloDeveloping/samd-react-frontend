import React, { useState, useMemo } from 'react';
import api from '../../../services/api';

import './index.css';

import camera from '../../../assets/image/camera.svg';

export default function User({ history }) {

	const [user_rm, setRm] = useState('');
	const [user_login, setLogin] = useState('');
	const [user_pwd, setPwd] = useState('');
	const [user_type, setType] = useState('');
	const [user_photo, setPhoto] = useState(null);
	const [user_full_name, setName] = useState('');
	const [user_birth_date, setBirthdate] = useState('');
	const [user_cpf, setCpf] = useState('');
	const [user_rg, setRg] = useState('');
	const [user_genre, setGenre] = useState('');
	const [user_email_pers, setEmailPers] = useState('');
	const [user_email_inst, setEmailInst] = useState('');
	const [user_cel, setCel] = useState('');
	const [user_tel, setTel] = useState('');

	const preview = useMemo(() => {
		return user_photo ? URL.createObjectURL(user_photo) : null;
	}, [user_photo]
	);

	async function handleSubmit(event) {
		event.preventDefault();
		const data = new FormData();

		data.append('user_rm', user_rm);
		data.append('user_login', user_login);
		data.append('user_pwd', user_pwd);
		data.append('user_type', user_type);
		data.append('user_photo', user_photo);
		data.append('user_full_name', user_full_name);
		data.append('user_birth_date', user_birth_date);
		data.append('user_cpf', user_cpf);
		data.append('user_rg', user_rg);
		data.append('user_genre', user_genre);
		data.append('user_email_pers', user_email_pers);
		data.append('user_email_inst', user_email_inst);
		data.append('user_cel', user_cel);
		data.append('user_tel', user_tel);

		await api.post('/insertUser', data);

		history.push('/');
	}

	return (
		<>
			<div className="card mt-4">
				<div className="card-body">
					<form onSubmit={handleSubmit}>
						<br />
						<div className="row">
							<div className="col-md-6">
								<label
									id="user_photo"
									style={{ backgroundImage: `url(${preview})` }}
									className={user_photo ? 'has-thumbnail' : ''}>
									<input type="file" onChange={event => setPhoto(event.target.files[0])} />
									<img src={camera} alt="Selecione uma imagem" />
								</label>
							</div>

							<div className="col-md-6">
								<h3 className="h3-reg">Registro de usuário</h3>
							</div>
						</div>

						<br />

						<div className="row">
							<div className="col-md-3">
								<div className="input-group">
									<div className="input-group-prepend">
										<span className="input-group-text">
											RM
                    </span>
									</div>
									<input className="form-control"
										id="user_rm"
										type="text"
										value={user_rm}
										placeholder="RM do usuário"
										onChange={event => setRm(event.target.value)}
									/>
								</div>
							</div>

							<div className="col-md-6">
								<div className="input-group">
									<div className="input-group-prepend">
										<span className="input-group-text">
											Nome
                    </span>
									</div>
									<input className="form-control"
										id="user_full_name"
										type="text"
										value={user_full_name}
										placeholder="Nome completo"
										onChange={event => setName(event.target.value)}
									/>
								</div>
							</div>

							<div className="col-md-3">
								<div className="input-group">
									<div className="input-group-prepend">
										<span className="input-group-text">
											Dt Nasc
                    </span>
									</div>
									<input className="form-control"
										id="user_birth_date"
										type="date"
										value={user_birth_date}
										onChange={event => setBirthdate(event.target.value)}
									/>
								</div>
							</div>
						</div>

						<br />

						<div className="row">
							<div className="col-md-4">
								<div className="input-group">
									<div className="input-group-prepend">
										<span className="input-group-text">
											Usuário
                    </span>
									</div>
									<input className="form-control"
										id="user_login"
										type="text"
										value={user_login}
										placeholder="Nome de usuário"
										onChange={event => setLogin(event.target.value)}
									/>
								</div>
							</div>

							<div className="col-md-4">
								<div className="input-group">
									<div className="input-group-prepend">
										<span className="input-group-text">
											Senha
                    </span>
									</div>
									<input className="form-control"
										id="user_pwd"
										type="password"
										value={user_pwd}
										placeholder="Senha"
										onChange={event => setPwd(event.target.value)}
									/>
								</div>
							</div>

							<div className="col-md-4">
								<div className="input-group">
									<div className="input-group-prepend">
										<span className="input-group-text">
											Acesso
                    </span>
									</div>
									<select className="custom-select"
										id="user_type"
										value={user_type}
										onChange={event => setType(event.target.value)}
									>
										<option>-- Selecione o tipo de usuário --</option>
										<option value="A">Administrador</option>
										<option value="S">Estudante</option>
										<option value="T">Professor</option>
										<option value="E">Funcionário</option>
									</select>
								</div>
							</div>
						</div>

						<br />

						<div className="row">
							<div className="col-md-4">
								<div className="input-group">
									<div className="input-group-prepend">
										<span className="input-group-text">
											CPF
                    </span>
									</div>
									<input className="form-control"
										id="user_cpf"
										type="text"
										value={user_cpf}
										placeholder="000.000.000-00"
										onChange={event => setCpf(event.target.value)}
									/>
								</div>
							</div>

							<div className="col-md-4">
								<div className="input-group">
									<div className="input-group-prepend">
										<span className="input-group-text">
											RG
                    </span>
									</div>
									<input className="form-control"
										id="user_rg"
										type="text"
										value={user_rg}
										placeholder="00.000.000-0"
										onChange={event => setRg(event.target.value)}
									/>
								</div>
							</div>

							<div className="col-md-4">
								<div className="input-group">
									<div className="input-group-prepend">
										<span className="input-group-text">
											Gênero
                    </span>
									</div>
									<select className="custom-select"
										id="user_genre"
										value={user_genre}
										onChange={event => setGenre(event.target.value)}
									>
										<option>-- Selecione o gênero --</option>
										<option value="F">Feminino</option>
										<option value="M">Masculino</option>
										<option value="O">Outros</option>
									</select>
								</div>
							</div>
						</div>

						<br />

						<div className="row">
							<div className="col-md-6">
								<div className="input-group">
									<div className="input-group-prepend">
										<span className="input-group-text">
											E-mail pessoal
                    </span>
									</div>
									<input className="form-control"
										id="user_email_pers"
										type="email"
										value={user_email_pers}
										placeholder="usuario@dominio.com"
										onChange={event => setEmailPers(event.target.value)}
									/>
								</div>
							</div>

							<div className="col-md-6">
								<div className="input-group">
									<div className="input-group-prepend">
										<span className="input-group-text">
											E-mail Institucional
                    </span>
									</div>
									<input className="form-control"
										id="user_email_inst"
										type="email"
										value={user_email_inst}
										placeholder="usuario@dominio.com.br"
										onChange={event => setEmailInst(event.target.value)}
									/>
								</div>
							</div>
						</div>

						<br />

						<div className="row">
							<div className="col-md-6">
								<div className="input-group">
									<div className="input-group-prepend">
										<span className="input-group-text">
											Celular
                    </span>
									</div>
									<input className="form-control"
										id="user_cel"
										type="text"
										value={user_cel}
										placeholder="(11)00000-0000"
										onChange={event => setCel(event.target.value)}
									/>
								</div>
							</div>

							<div className="col-md-6">
								<div className="input-group">
									<div className="input-group-prepend">
										<span className="input-group-text">
											Telefone
                    </span>
									</div>
									<input className="form-control"
										id="user_tel"
										type="text"
										value={user_tel}
										placeholder="(11)0000-0000"
										onChange={event => setTel(event.target.value)}
									/>
								</div>
							</div>
						</div>

						<hr />

						<div className="row">
							<div className="col-md-12 offset-5">
								<button type="submit" className="btn btn-primary">Cadastrar</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</>
	)
}
