import {sequelize} from './main';

let Model = function (rawDefinition) {
  var definitionDeferrer;

  this.onDefinition = new Promise((resolve, reject) => {
    definitionDeferrer = resolve;
  });

  this.define = function () {
    this.definition = sequelize.define(rawDefinition.name, rawDefinition.json);
    definitionDeferrer();
  };
};

export default Model;
