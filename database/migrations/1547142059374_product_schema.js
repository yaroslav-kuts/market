const Schema = use('Schema');

class ProductSchema extends Schema {
  up() {
    this.create('products', table => {
      table.increments();
      table.string('name', 80).notNullable();
      table.decimal('price').notNullable();
      table
        .integer('type_id')
        .notNullable()
        .unsigned();
      table
        .integer('user_id')
        .notNullable()
        .unsigned();
      table.timestamps();
      table
        .foreign('user_id')
        .references('users.id')
        .onDelete('cascade');
      table
        .foreign('type_id')
        .references('types.id')
        .onDelete('cascade');
    });
  }

  down() {
    this.drop('products');
  }
}

module.exports = ProductSchema;
