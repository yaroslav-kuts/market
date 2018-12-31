const Factory = use('Factory');

class TypeSeeder {
  async run() {
    await Factory.model('App/Models/Type').create();
  }
}

module.exports = TypeSeeder;
