import React from 'react'
import Home from './Home'
import Battle from './Battle'
import Popular from './Popular'
import Results from './Results'
import NotFound from './404'
import Nav from './Nav'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

export default class App extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<div className="container">
					<Nav />
					<Switch>
						<Route exact path='/' component={Home} />
						<Route exact path='/battle' component={Battle} />
						<Route path='/battle/results' component={Results} />
						<Route path='/popular' component={Popular} />
						<Route component={NotFound} />
					</Switch>
				</div>
			</BrowserRouter>
		)
	}
}
