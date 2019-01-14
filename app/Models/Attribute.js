const Model = use('Model');

class Attribute extends Model {
  static get updatedAtColumn() {
    return null;
  }

  type() {
    return this.belongsTo('App/Models/Type');
  }
}

module.exports = Attribute;
