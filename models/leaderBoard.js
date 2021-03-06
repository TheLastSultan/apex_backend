module.exports = function(sequelize, DataTypes) {
	return sequelize.define(
		'leaderBoard',
		{
			id: {
				type: DataTypes.BIGINT,
				allowNull: false,
				primaryKey: true,
				autoIncrement: true,
				field: 'id'
			},
			category: {
				type: DataTypes.STRING(255),
				allowNull: true,
				field: 'category'
			},
			name: {
				type: DataTypes.STRING(255),
				allowNull: true,
				field: 'name'
			},
			rank: {
				type: DataTypes.STRING(4),
				allowNull: true,
				field: 'rank'
			},
			stat: {
				type: DataTypes.STRING(100),
				allowNull: true,
				field: 'stat'
			},
			countryFlag: {
				type: DataTypes.STRING(255),
				allowNull: true,
				field: 'countryFlag'
			},
			countryName: {
				type: DataTypes.STRING(255),
				allowNull: true,
				field: 'countryName'
			},
			apexLink: {
				type: DataTypes.STRING(255),
				allowNull: true,
				field: 'apexLink'
			},
			twitchLink: {
				type: DataTypes.STRING(255),
				allowNull: true,
				field: 'twitchLink'
			},
			twitterLink: {
				type: DataTypes.STRING(255),
				allowNull: true,
				field: 'twitterLink'
			},
			createdAt: {
				type: DataTypes.DATE,
				allowNull: false,
				field: 'created_at',
				_autoGenerated: true
			},
			updatedAt: {
				type: DataTypes.DATE,
				allowNull: false,
				field: 'updated_at',
				_autoGenerated: true
			}
		},
		{
			tableName: 'leader_board'
		}
	);
};
