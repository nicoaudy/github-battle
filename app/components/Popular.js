var React = require('react');

const SelectLanguage = props => {
	var languages = ['All', 'Javascript', 'Ruby', 'Java', 'CSS', 'Python'];
	return (
		<ul className='languages'>
			{languages.map((lang) => {
				return(
					<li 
						style={lang === props.selectedLanguage ? { color: '#d0021b' } : null}
						onClick={props.onSelect.bind(null, lang)}
						key={lang}
					>
						{lang}	
					</li>
				)
			})}
		</ul>
	)
} 

class Popular extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedLanguage: 'All'
		};

		this.updateLanguage = this.updateLanguage.bind(this);
	}

	updateLanguage(lang){
		this.setState(function() {
			return {
				selectedLanguage: lang
			}
		});
	}

	render(){
		return(
			<div>
				<SelectLanguage 
					selectedLanguage={this.state.selectedLanguage}
					onSelect={this.updateLanguage}
				/>
			</div>
		)
	}
}

module.exports = Popular;
