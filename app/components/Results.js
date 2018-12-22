const React = require('react');
const queryString = require('query-string');
const api = require('../utils/api');
const Link = require('react-router-dom').Link;
const Player = require('./Player');

class Results extends React.Component {
	constructor(props){
		super(props);
		
		this.state = {
			winner: null,
			loser: null,
			error: null,
			loading: true
		}
	}
	componentDidMount(){
		const { playerOneName, playerTwoName } = queryString.parse(this.props.location.search);
		api.battle([
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

module.exports = Results;
