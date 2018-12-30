const { Command } = require('@adonisjs/ace');

const Database = use('Database');
const User = use('App/Models/User');

class AddUser extends Command {
  static get signature() {
    return 'adduser';
  }

  static get description() {
    return 'Creates new user';
  }

  async handle() {
    const user = new User();
    user.email = await this.ask('Enter email:');
    user.password = await this.secure('Enter password:');
    user.phone = await this.ask('Enter phone:');
    user.firstname = await this.ask('Enter firstname:');
    user.lastname = await this.ask('Enter lastname:');
    user.address = await this.ask('Enter address:');
    user.role = await this.choice('Select user role:', ['user', 'admin']);
    await user.save();
    Database.close();
  }
}

module.exports = AddUser;
