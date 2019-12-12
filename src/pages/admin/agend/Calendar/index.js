import React from 'react'
import './index.css'

export default class Calendar extends React.Component {

	constructor(props) {
		super(props)

		this.state = {
			data: [],
			loading: true
		}
	}

	componentDidMount() {

	}

	render() {
		return (

			<>

				<div id='calendar'></div>

			</>

		);
	}
}
