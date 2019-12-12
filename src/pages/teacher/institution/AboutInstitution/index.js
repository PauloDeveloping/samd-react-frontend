import React from 'react'
import './index.css'
import etecEmbu from '../../../../assets/image/etec-embu.jpg'


export default class AboutInstitution extends React.Component {

	constructor(props) {
		super(props)
	}

	componentDidMount() {

	}

	render() {

		return (

			<div className="container-fluid">
				<figure>
					<img src={etecEmbu} alt="Etec Embu" className="center" />
				</figure>

				<div className="center">
					<br />
					<p className="text-justify text-white">A Etec de Embu iniciou suas atividades no segundo semestre de 2010 e consolida-se na
						história de Embu das Artes como a instituição responsável pela Educação Profissional em um cenário de
						mudança na vocação do município, iniciada com a inauguração do Rodoanel Mário Covas. Apesar de o município
						manter suas características artísticas, Embu das Artes passou a atrair empresas de todo segmento em virtude
                    do fácil acesso às principais rodovias do país.</p>
					<p className="text-justify text-white">Localizada na Rua Marcelino Pinto Teixeira, nº 529, no bairro Parque Industrial Ramos de Freitas, a
						Etec de Embu está às margens da Rodovia Régis Bittencourt (BR 116) e o Rodoanel Mário Covas, tem acesso
						facilitado pelo sistema de transporte público, que atende vários bairros e municípios vizinhos. Segundo o
						IBGE, a população estimada em 2018 era de 270.843 habitantes. O crescimento do número de empresas das
						diversas atividades produtivas demonstra a necessidade da formação profissional para que os indivíduos
						possam integrar o mundo do trabalho e as empresas aumentarem sua competitividade.
                	</p>

					<button className="btn btn-danger btn-block">Acessar site da instituição</button>
				</div>
			</div>

		);
	}
}
