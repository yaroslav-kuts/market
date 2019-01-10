const Factory = use('Factory');

class AttributeSeeder {
  async run() {
    const { id: type_id } = await Factory.model('App/Models/Type').create();
    await Factory.model('App/Models/Attribute').create({ type_id });
  }
}

module.exports = AttributeSeeder;
