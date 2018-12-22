const React = require('react');
const api = require('../utils/api');
const SelectLanguage = require('./SelectLanguage');
const RepoGrid = require('./RepoGrid');

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
		const { selectedLanguage, repos } = this.state
		return(
			<div>
				<SelectLanguage
					selectedLanguage={selectedLanguage}
					onSelect={this.updateLanguage}
				/>
				{ !repos ? <p>Loading...</p> :
				<RepoGrid repos={repos} /> }
			</div>
		)
	}
}

module.exports = Popular;
