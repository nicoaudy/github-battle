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
		this.setState({ selectedLanguage: lang })

		api.fetchPopularRepos(lang).then((repos) => {
			this.setState({ repos })
		})
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
