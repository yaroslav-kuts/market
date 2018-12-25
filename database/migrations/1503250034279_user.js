/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class UserSchema extends Schema {
  up() {
    this.create('users', table => {
      table.increments();
      table.string('firstname', 80).notNullable();
      table.string('lastname', 80).notNullable();
      table
        .string('email', 255)
        .notNullable()
        .unique();
      table
        .string('phone', 15)
        .notNullable()
        .unique();
      table.string('password', 80).notNullable();
      table.text('address').notNullable();
      table.enu('role', ['user', 'admin']).defaultTo('user');
      table.timestamps();
    });
  }

  down() {
    this.drop('users');
  }
}

module.exports = UserSchema;
