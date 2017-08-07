let config = {
  port: 3000,
  sequelize: {
    username: 'caballo_admin',
    db: 'caballo',
    password: 'caballo',
    connectionConfig: {
      logging: false,
      dialect: 'mysql'
    }
  }
};

export default config;
