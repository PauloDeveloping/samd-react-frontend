import React, { useState } from 'react';

export default class NewArticle extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			artcl_title: '',
			artcl_slug: '',
			artcl_content: ''
		}
	}

	render() {

		return (
			<div className="card mt-4">
				<div className="card-body">
					<div className="row">
						<div className="col-md-12 text-center">
							<h3 className="h3-reg">Nova Publicação</h3>
						</div>
					</div>

					<br />

					<form autocomplete="off" method="POST">
						<div className="row">
							<div className="col-md-6">
								<div className="input-group">
									<div className="input-group-prepend">
										<span className="input-group-text">
											Título
                  						</span>
									</div>
									<input type="text" className="form-control"
										id="artcl_title"
										value={this.state.artcl_title}
										placeholder="Título do artigo"
										onChange={e => this.setState({ artcl_title: e.target.value })} />
								</div>
							</div>

							<div className="col-md-6">
								<div className="input-group">
									<div className="input-group-prepend">
										<span className="input-group-text">
											Slug
                  						</span>
									</div>
									<input type="text" className="form-control"
										id="artcl_slug"
										value={this.state.artcl_slug}
										placeholder="Palavras-chave (separadas por vírgula)"
										onChange={e => this.setState({ artcl_slug: e.target.value })} />
								</div>
							</div>
						</div>

						<div className="row">
							<div className="col-md-12">

							</div>
						</div>
					</form>
				</div>
			</div>
		);

	}
}
