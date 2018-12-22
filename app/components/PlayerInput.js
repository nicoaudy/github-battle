import React from 'react'

export default class PlayerInput extends React.Component {
	state = {
		username: ''
	}
	handleChange = (event) => {
		const value = event.target.value;
		this.setState({ username: value })
	}
	handleSubmit = (event) => {
		event.preventDefault();
		this.props.onSubmit( 
			this.props.id,
			this.state.username
		)
	}

	render(){
		const { username } = this.state
		const { label } = this.props

		return (
			<form className="column" onSubmit={this.handleSubmit}>
				<label className="header" htmlFor="username">{label}</label>
				<input 
					id="username" 
					placeholder="Github username"
					type="text"
					autoComplete="off"
					value={username}
					onChange={this.handleChange}
				/>
				<button 
					className="button"
					type="submit"
					disabled={!username}>
					Submit
				</button>
			</form>
		);
	}
}
