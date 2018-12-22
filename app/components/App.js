const React = require('react');
const Home = require('./Home');
const Battle = require('./Battle');
const Popular = require('./Popular');
const Results = require('./Results');
const NotFound = require('./404');
const ReactRouter = require('react-router-dom');
const Router = ReactRouter.BrowserRouter;
const Route = ReactRouter.Route;
const Switch = ReactRouter.Switch;
const Nav = require('./Nav');

class App extends React.Component {
	render() {
		return (
			<Router>
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
			</Router>
		)
	}
};

module.exports = App;
