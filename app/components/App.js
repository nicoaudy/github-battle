var React = require('react');
var Home = require('./Home');
var Battle = require('./Battle');
var Popular = require('./Popular');
var Results = require('./Results');
var NotFound = require('./404');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;
var Nav = require('./Nav');

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
