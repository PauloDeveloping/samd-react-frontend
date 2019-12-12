import React from 'react'
import './index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faBook
		} from '@fortawesome/free-solid-svg-icons'

export default class ArticlePost extends React.Component {

	constructor(props) {
		super(props)
	}

	componentDidMount() {

	}

	render() {

		return (

			<div className="card">
				<form action="" method="POST" autocomplete="off">

					<div className="card-body">

						<div className="form-row">
							<div className="col-md-6 col-xs-12">
								<input type="text" name="titulo-publicacao" id="titulo-publicacao" className="form-control border-custom" placeholder="Título" />
							</div>

							<div className="col-md-6 col-xs-12">
								<input type="text" name="slug" id="slug" className="form-control border-custom" placeholder="Slug" />
							</div>
						</div>

						<div className="form-row mt-4">
							<div className="col-md-12 col xs-12">
								<FontAwesomeIcon icon={faEdit} className="fa fa-fw fa-edit black spacing"/><label for="desc_publicacao">Descrição</label>
								<textarea className="border-custom" name="desc_publicacao" id="desc_publicacao"></textarea>
							</div>
						</div>

						<div className="form-row mt-4">
							<div className="col-md-12 col xs-12">
								<FontAwesomeIcon icon={faBook} className="fa fa-fw fa-book black spacing"/><label for="conteudo">Conteúdo</label>
								<textarea className="border-custom" name="conteudo" id="conteudo"></textarea>
							</div>
						</div>

					</div>

					<div className="card-footer text-center">
						<button type="submit" className="btn btn-post spacing">Postar</button>
						<button type="reset" className="btn btn-clear">Limpar</button>
					</div>

				</form>
			</div>


		);
	}
}
