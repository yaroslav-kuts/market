const Model = use('Model');
const Hash = use('Hash');

class User extends Model {
  static boot() {
    super.boot();
    this.addHook('beforeSave', async userInstance => {
      if (userInstance.dirty.password) {
        userInstance.password = await Hash.make(userInstance.password);
      }
    });
  }

  static get updatedAtColumn() {
    return null;
  }

  tokens() {
    return this.hasMany('App/Models/Token');
  }

  products() {
    return this.hasMany('App/Models/Product');
  }
}

module.exports = User;
