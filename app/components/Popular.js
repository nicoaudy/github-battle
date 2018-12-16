var React = require('react');

class Popular extends React.Component {
	render(){
		var languages = ['All', 'Javascript', 'Ruby', 'Java', 'CSS', 'Python'];

		return(
			<div>
				<h1>Popular!</h1>
				<ul className='languages'>
					{languages.map(function(lang){
						return(
							<li key={lang}>
								{lang}	
							</li>
						)
					})}
				</ul>
			</div>
		)
	}
}

module.exports = Popular;
