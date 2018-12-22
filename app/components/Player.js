const React = require('react');
const Profile = require('./Profile');

const Player = ({ label, score, profile }) => {
	return(
		<div>
      <h1 className='header'>{label}</h1>
      <h3 style={{textAlign: 'center'}}>Score: {score}</h3>
      <Profile info={profile} />
    </div>
	);
}

module.exports = Player;
