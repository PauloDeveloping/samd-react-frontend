import React from 'react'
import { Link } from 'react-router-dom'
import { PieChart } from 'react-chartkick'
import api from '../../../services/api'
import 'chart.js'
import './index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartLine, faCalendarAlt, faFileContract, faWindowRestore, faExclamationTriangle, faBook
} from '@fortawesome/free-solid-svg-icons'


export default class Home extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            loading: true,
            data: []
        }
    }

    componentDidMount() {

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
                <div className="card-deck mt-2">
                    <div className="card bg-orange zoom">
                        <Link to="/professor/professores/lista-de-presenca" className="nav-link text-white">
                            <div className="card-body text-center">
                                <h5>Chamada</h5>
                                <hr className="white" />
                                <h3 className="mt-4"><strong><FontAwesomeIcon icon={faChartLine} className="fa fa-fw fa-chart-line white spacing"/>FAÇA A CHAMADA</strong></h3>
                            </div>
                        </Link>
                    </div>

                    <div className="card bg-orange2 zoom">
                        <Link to="/professor/instituicao/aulas" className="nav-link text-white">
                            <div className="card-body text-center">
                                <h5>Aulas do Dia</h5>
                                <hr className="white" />
                                <h3 className="mt-4"><strong><FontAwesomeIcon icon={faCalendarAlt} className="fa fa-fw fa-calendar-alt white spacing"/>CLIQUE PARA ACESSAR AS SUAS AULAS DO DIA</strong></h3>
                            </div>
                        </Link>
                    </div>
                    <div className="card bg-blue zoom">
                        <Link to="/professor/professores/material-de-classe" className="nav-link text-white">
                            <div className="card-body text-center">
                                <h5>Material de Aula</h5>
                                <hr className="white" />
                                <h3 className="mt-4"><strong><FontAwesomeIcon icon={faFileContract} className="fa fa-fw fa-file-contract white spacing"/>CLIQUE PARA POSTAR OS MATERIAIS DE AULA</strong></h3>
                            </div>
                        </Link>
                    </div>
                </div>


                <div className="card-deck mt-2">
                    <div className="card bg-green zoom">
                        <Link to="/professor/alunos/mencoes" className="nav-link text-white">
                            <div className="card-body text-center">
                                <h5>Menções</h5>
                                <hr className="white" />
                                <h3 className="mt-4"><strong><FontAwesomeIcon icon={faBook} className="fa fa-fw fa-book white spacing"/>DEFINA AS MENÇÕES</strong></h3>
                            </div>
                        </Link>
                    </div>
                    <div className="card bg-purple zoom">
                        <Link to="/professor/professores/ptd" className="nav-link text-white">
                            <div className="card-body text-center">
                                <h5>PTD</h5>
                                <hr className="white" />
                                <h3 className="mt-4"><strong><FontAwesomeIcon icon={faWindowRestore} className="fa fa-fw fa-widow-restore white spacing"/>FAÇA O PTD</strong></h3>
                            </div>
                        </Link>
                    </div>

                    <div className="card bg-purple2 zoom">
                        <Link to="/professor/agenda/tarefas" className="nav-link text-white">
                            <div className="card-body text-center">
                                <h5>Tarefas</h5>
                                <hr className="white" />
                                <h3 className="mt-4"><strong><FontAwesomeIcon icon={faExclamationTriangle} className="fa fa-fw fa-exclamation-triangle white spacing"/>DEFINA AS DATAS DE PROVAS E ATIVIDADES</strong></h3>
                            </div>
                        </Link>
                    </div>
                </div>
            </>


        );

    }
}