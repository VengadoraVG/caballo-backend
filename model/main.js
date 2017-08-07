import Sequelize from 'sequelize';
import fs from 'fs';
var config = require('../config').default.sequelize;

export let sequelize = new Sequelize(config.db, config.username, config.db, config.connectionConfig);

let model = {
  all : {},
  sync (force) {
    return sequelize
      .query('SET FOREIGN_KEY_CHECKS = 0;', { raw: true })
      .then((results) => {
        sequelize.sync({ force });
      });
  }
};

console.log('[MODEL]: loading models...');
fs.readdirSync('./model/models').forEach(file => {
  if (file != 'main.js' && file[0] != '#' && file[file.length - 1] != "~") {
    file = file.substr(0, file.indexOf('.'));
    model.all[file] = require('./models/' + file).default;
  }
});

for (var m in model.all) {
  if (model.all.hasOwnProperty(m)) {
    model.all[m].define();
  }
}


console.log('[MODEL]: done loading models!');

export default model;
