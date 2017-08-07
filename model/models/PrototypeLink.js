import Model from '../Model';
import Sequelize from 'sequelize';

let PrototypeLink = new Model({
  name: 'prototypeLink',
  json: {
      color: {
        type: Sequelize.STRING
      },
      x: {
        type: Sequelize.INTEGER
      },
      y: {
        type: Sequelize.INTEGER
      },
      priority: {
        type: Sequelize.FLOAT
      }
  }
});

PrototypeLink.onDefinition.then(() => {
  PrototypeLink.definition.belongsToMany(PrototypeLink.definition,{
    as: 'dependency',
    through: 'dependencies',
    foreignKey: 'dependency',
    otherKey: 'requisite'
  });
});

export default PrototypeLink;
