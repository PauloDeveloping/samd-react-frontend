import React from 'react'
import { Link } from 'react-router-dom'
import { PieChart } from 'react-chartkick'
import api from '../../../services/api'
import 'chart.js'
import './index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faFileContract, faClipboard, faChartLine, faWindowRestore, faExclamationTriangle
		} from '@fortawesome/free-solid-svg-icons'

export default class Home extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            data: [],
            loading: true
        }
    }
    componentDidMount() {

        /*api.get('').then(data => {

        })*/

    }

    render() {

        return (

            <>
                <div className="row mt-4">
                    <div className="col-md-6 col-xs-12">
                        <div className="card bg-light chart-border">
                            <div className="card-header text-center bg-custom">
                                <h5 className="mt-2">Frequência Parcial</h5>
                            </div>

                            <div className="card-body">
                                <PieChart data={{ 'batata': 14, 'tomate': 21, 'banana': 21, 'cenoura': 22, 'beterraba': 9 }} />
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 col-xs-12">
                        <div className="card bg-light chart-border">
                            <div className="card-header text-center bg-custom">
                                <h5 className="mt-2">Menções Parciais</h5>
                            </div>

                            <div className="card-body">
                                <PieChart data={{ 'batata': 14, 'tomate': 21, 'banana': 21, 'cenoura': 22, 'beterraba': 9 }} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card-deck mt-4">
                    <div className="card bg-orange zoom">
                        <Link to="/aluno/alunos/mencoes" className="nav-link text-white">
                            <div className="card-body text-center">
                                <h5>Menções</h5>
                                <hr className="white" />
                                <h3 className="mt-4"><strong><FontAwesomeIcon icon={faBook} className="fa fa-fw fa-book white spacing"/>ACESSE SUAS MENÇÕES PARCIAIS E FINAIS</strong></h3>
                            </div>
                        </Link>
                    </div>

                    <div className="card bg-orange2 zoom">
                        <Link to="/aluno/alunos/material-aula" className="nav-link text-white">
                            <div className="card-body text-center">
                                <h5>Material de Aula</h5>
                                <hr className="white" />
                                <h3 className="mt-4"><strong><FontAwesomeIcon icon={faFileContract} className="fa fa-fw fa-file-contract white spacing"/>CLIQUE PARA ACESSAR OS MATERIAIS DE AULA</strong></h3>
                            </div>
                        </Link>
                    </div>

                    <div className="card bg-blue zoom">
                        <Link to="/aluno/agenda/tarefas" className="nav-link text-white">
                            <div className="card-body text-center">
                                <h5>Tarefas</h5>
                                <hr className="white" />
                                <h3 className="mt-4"><strong><FontAwesomeIcon icon={faClipboard} className="fa fa-fw fa-clipboard white spacing"/>CONSULTE DATAS DE PROVAS E ATIVIDADES</strong></h3>
                            </div>
                        </Link>
                    </div>
                </div>

                <div className="card-deck mt-2">
                    <div className="card bg-green zoom">
                        <Link to="/aluno/alunos/frequencia" className="nav-link text-white">
                            <div className="card-body text-center">
                                <h5>Frequência</h5>
                                <hr className="white" />
                                <h3 className="mt-4"><strong><FontAwesomeIcon icon={faChartLine} className="fa fa-fw fa-chart-line white spacing"/>VEJA SUA FREQUÊNCIA E SUAS FALTAS</strong></h3>
                            </div>
                        </Link>
                    </div>

                    <div className="card bg-purple zoom">
                        <Link to="/aluno/instituicao/imagine" className="nav-link text-white">
                            <div className="card-body text-center">
                                <h5>Microsoft Imagine</h5>
                                <hr className="white" />
                                <h3 className="mt-4"><strong><FontAwesomeIcon icon={faWindowRestore} className="fa fa-fw fa-widow-restore white spacing"/>ENCONTRE SOFTWARES MICROSOFT AQUI</strong></h3>
                            </div>
                        </Link>
                    </div>

                    <div className="card bg-purple2 zoom">
                        <Link to="/aluno/agenda/eventos" className="nav-link text-white">
                            <div className="card-body text-center">
                                <h5>Eventos</h5>
                                <hr className="white" />
                                <h3 className="mt-4"><strong><FontAwesomeIcon icon={faExclamationTriangle} className="fa fa-fw fa-exclamation-triangle white spacing"/>VISUALIZE EVENTOS IMPORTANTES</strong></h3>
                            </div>
                        </Link>
                    </div>
                </div>
            </>

        );
    }
}