const Model = use('Model');

class Token extends Model {
  static get updatedAtColumn() {
    return null;
  }
}

module.exports = Token;
