var React = require('react');
var api = require('../utils/api');

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
			selectedLanguage: 'All',
			repos: null
		};

		this.updateLanguage = this.updateLanguage.bind(this);
	}

	componentDidMount() {
		this.updateLanguage(this.state.selectedLanguage);
	}

	updateLanguage(lang){
		this.setState(function() {
			return {
				selectedLanguage: lang
			}
		});

		api.fetchPopularRepos(lang).then(function(repos){
			console.log(repos)
			this.setState(function() {
				return {
					repos: repos
				}
			});
		}.bind(this));
	}

	render(){
		return(
			<div>
				<SelectLanguage
					selectedLanguage={this.state.selectedLanguage}
					onSelect={this.updateLanguage}
				/>
				{JSON.stringify(this.state.repos, 2, null)}
			</div>
		)
	}
}

module.exports = Popular;
