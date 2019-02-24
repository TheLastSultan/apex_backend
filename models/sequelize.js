const Sequelize = require('sequelize');
const LeaderBoard = require('./leaderBoard');

const dbInfo = {
	databaseName: 'apex_project',
	username: 'host',
	password: 'allah199',
	host: '127.0.0.1'
};

const sequelizeConn = new Sequelize(
	dbInfo.databaseName,
	dbInfo.username,
	dbInfo.password,
	{
		host: dbInfo.host,
		dialect: 'mysql',
		operatorsAliases: false,
		dialectOptions: {
			charset: 'utf8mb4',
			decimalNumbers: true
		},
		define: {
			timestamps: true,
			underscored: true
		}
	}
);

const LeaderModel = LeaderBoard(sequelizeConn, Sequelize);

module.exports = {
	sequelizeConn,
	LeaderModel
};
