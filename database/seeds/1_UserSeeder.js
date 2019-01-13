const Factory = use('Factory');

class UserSeeder {
  async run() {
    await Factory.model('App/Models/User').create();
    await Factory.model('App/Models/User').create({ role: 'admin' });
  }
}

module.exports = UserSeeder;
