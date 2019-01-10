const Model = use('Model');

class Type extends Model {
  products() {
    return this.hasMany('App/Models/Product');
  }

  attributes() {
    return this.hasMany('App/Models/Attribute');
  }
}

module.exports = Type;
