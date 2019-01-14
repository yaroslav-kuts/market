const Model = use('Model');

class ProductAttribute extends Model {
  static get updatedAtColumn() {
    return null;
  }
}

module.exports = ProductAttribute;
