import React from 'react'
import { fetchPopularRepos  } from '../utils/api'
import SelectLanguage from './SelectLanguage'
import RepoGrid from './RepoGrid'

export default class Popular extends React.Component {
	state = {
		selectedLanguage: 'All',
		repos: null
	}

	componentDidMount() {
		this.updateLanguage(this.state.selectedLanguage);
	}

	updateLanguage = (lang) => {
		this.setState({ selectedLanguage: lang })

		fetchPopularRepos(lang).then((repos) => {
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
