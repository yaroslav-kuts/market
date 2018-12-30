const Type = use('App/Models/Type');

class TypeController {
  async get({ request }) {
    const { type } = request.post();
    return {
      message: 'ok',
      data: type
    };
  }

  async list() {
    const types = await Type.all();
    return {
      message: 'ok',
      data: types
    };
  }

  async store({ request }) {
    const body = request.post();
    const type = await Type.create(body);
    return {
      message: 'Product type was created',
      data: type
    };
  }

  async update({ request }) {
    const { type, attributes } = request.post();
    type.attributes = attributes;
    await type.save();
    return {
      message: 'Product type was updated',
      data: type
    };
  }

  async delete({ request }) {
    const { type } = request.post();
    await type.delete();
    return {
      message: 'Product type was deleted',
      data: { id: type.id }
    };
  }
}

module.exports = TypeController;
