import Model from '../Model';
import Sequelize from 'sequelize';
import PrototypeLink from './PrototypeLink';

let Tag = new Model({
  name: 'tag',
  json: {
    text: {
      type: Sequelize.STRING
    }
  }
});

PrototypeLink.onDefinition.then(() => {
  Tag.definition.belongsToMany(PrototypeLink.definition, { through: 'PrototypeLink_Tag' });
  PrototypeLink.definition.belongsToMany(Tag.definition, { through: 'PrototypeLink_Tag' });
});

export default Tag;
