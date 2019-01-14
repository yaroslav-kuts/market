const Factory = use('Factory');

class TypeSeeder {
  async run() {
    await Factory.model('App/Models/Type').createMany(2);
  }
}

module.exports = TypeSeeder;
