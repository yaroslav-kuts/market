const Model = use('Model');

class Type extends Model {
  static get updatedAtColumn() {
    return null;
  }

  products() {
    return this.hasMany('App/Models/Product');
  }

  attributes() {
    return this.hasMany('App/Models/Attribute');
  }
}

module.exports = Type;
