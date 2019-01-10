const Factory = use('Factory');

class UserSeeder {
  async run() {
    await Factory.model('App/Models/User').create();
  }
}

module.exports = UserSeeder;
