import Model from '../Model';
import Sequelize from 'sequelize';
import PrototypeLink from './PrototypeLink';

let Edition = new Model({
  name: 'edition',
  json: {
    name : {
      type: Sequelize.STRING
    },
    description : {
      type: Sequelize.TEXT
    }
  }
});

PrototypeLink.onDefinition.then(() => {
  Edition.definition.belongsTo(PrototypeLink.definition);
});

export default Edition;
