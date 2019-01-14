const Model = use('Model');

class Product extends Model {
  static get updatedAtColumn() {
    return null;
  }

  user() {
    return this.belongsTo('App/Models/User');
  }

  type() {
    return this.belongsTo('App/Models/Type');
  }

  attributes() {
    return this.belongsToMany('App/Models/Attribute');
  }
}

module.exports = Product;
