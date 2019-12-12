import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next/lib/src/bootstrap-table';
import './index.css'

export default class SamdTable extends React.Component {

    bootstrapTableRef = null
    selectedRow = null

    constructor(props) {
        super(props)
        this.onBootstrapTableRef = this.onBootstrapTableRef.bind(this)
    }

    static defaultProps = {
        loading: true,
    }

    /* clearSelectedRow() {
         this.bootstrapTableRef.cleanSelected();
     }*/

    onBootstrapTableRef(instance) {
        this.bootstrapTableRef = instance;
    }

    /*componentDidUpdate() {
        this.clearSelectedRow();
    }*/

    render() {

        return (
            <div className="container-fluid bg-tabela">
                <BootstrapTable data={this.props.data} keyField="id" striped
                    condensed={true} id="tabela" selectRow={this.selectRow}
                    hover ref={this.onBootstrapTableRef}
                    columns={this.props.columns}
                    keyField={this.props.keyField}
                    options={{ noDataText: 'No lots to display.' }} />
            </div>
        );
    }

}