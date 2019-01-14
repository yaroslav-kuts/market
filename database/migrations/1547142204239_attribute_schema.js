const Schema = use('Schema');

class AttributeSchema extends Schema {
  up() {
    this.create('attributes', table => {
      table.increments();
      table.string('name', 80).notNullable();
      table
        .integer('type_id')
        .notNullable()
        .unsigned();
      table.timestamps();
      table
        .foreign('type_id')
        .references('types.id')
        .onDelete('cascade');
    });
  }

  down() {
    this.drop('attributes');
  }
}

module.exports = AttributeSchema;
