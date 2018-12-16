var React = require('react');
var api = require('../utils/api');
var SelectLanguage = require('./SelectLanguage');
var RepoGrid = require('./RepoGrid');

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
				{ !this.state.repos ? <p>Loading...</p> :
				<RepoGrid repos={this.state.repos} /> }
			</div>
		)
	}
}

module.exports = Popular;
