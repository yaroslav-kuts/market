const Schema = use('Schema');

class ProductAttributeSchema extends Schema {
  up() {
    this.create('product_attributes', table => {
      table.increments();
      table.string('value', 255).notNullable();
      table
        .integer('product_id')
        .notNullable()
        .unsigned();
      table
        .integer('attribute_id')
        .notNullable()
        .unsigned();
      table.timestamps();
      table.foreign('product_id').references('products.id');
      table.foreign('attribute_id').references('attributes.id');
    });
  }

  down() {
    this.drop('product_attributes');
  }
}

module.exports = ProductAttributeSchema;
