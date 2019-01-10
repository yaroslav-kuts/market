const Schema = use('Schema');

class TypeSchema extends Schema {
  up() {
    this.create('types', table => {
      table.increments();
      table.string('name', 80).notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop('types');
  }
}

module.exports = TypeSchema;
