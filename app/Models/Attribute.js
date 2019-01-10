const Model = use('Model');

class Attribute extends Model {
  products() {
    return this.belongsToMany('App/Models/Product');
  }

  type() {
    return this.belongsTo('App/Models/Type');
  }
}

module.exports = Attribute;
