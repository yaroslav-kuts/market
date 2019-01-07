class AttributeController {
  async get() {
    return { endpoint: 'get attribute' };
  }

  async list() {
    return { endpoint: 'list attributes' };
  }

  async create() {
    return { endpoint: 'create attribute' };
  }

  async update() {
    return { endpoint: 'update attribute' };
  }

  async delete() {
    return { endpoint: 'delete attribute' };
  }
}

module.exports = AttributeController;
