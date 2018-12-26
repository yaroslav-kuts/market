class TypeController {
  async get() {
    return { endpoint: 'get' };
  }

  async list() {
    return { endpoint: 'list' };
  }

  async create() {
    return { endpoint: 'create' };
  }

  async update() {
    return { endpoint: 'update' };
  }

  async delete() {
    return { endpoint: 'delete' };
  }
}

module.exports = TypeController;
