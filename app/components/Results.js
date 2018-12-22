import React from 'react'
import { Link } from 'react-router-dom'

import queryString from 'query-string'
import { battle } from '../utils/api'
import Player from './Player'

export default class Results extends React.Component {
	state = {
		winner: null,
		loser: null,
		error: null,
		loading: true
	}
	componentDidMount(){
		const { playerOneName, playerTwoName } = queryString.parse(this.props.location.search);
		battle([
			playerOneName,
			playerTwoName
		]).then((results) => {
			if(results === null){
				return this.setState({
					error: 'Looks like there was error. Check that both users exist on Github',
					loading: false
				});
			}

			return this.setState({
				error: null,
				winner: results[0],
				loser: results[1],
				loading: false
			})
		});
	}
	render(){
		const { error, winner, loser, loading } = this.state

		if(loading === true) {
			return <p>Loading...</p>
		}

		if(error) {
			return(
				<div>
					<p>{error}</p>
					<Link to="/battle">Reset</Link>
				</div>
			)
		}

		return (
			<div className="row">
				<Player 
					label='Winner'
					score={winner.score}
					profile={winner.profile}
				/>

				<Player 
					label='Loser'
					score={loser.score}
					profile={loser.profile}
				/>
			</div>
		);
	}
}
