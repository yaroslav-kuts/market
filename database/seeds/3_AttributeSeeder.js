const logger = use('Logger');
const Factory = use('Factory');
const Type = use('App/Models/Type');

class AttributeSeeder {
  async run() {
    const { rows: types } = await Type.all();
    Promise.all(types.map(({ id: type_id }) => Factory.model('App/Models/Attribute').createMany(3, { type_id }))).catch(
      error => logger.error(error)
    );
  }
}

module.exports = AttributeSeeder;
