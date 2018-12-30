const Type = use('App/Models/Type');

class FindType {
  async handle(
    {
      request,
      response,
      params: { id }
    },
    next
  ) {
    const type = await Type.find(id);

    if (!type) {
      return response.status(404).json({
        message: 'Product type not found',
        data: { id }
      });
    }

    request.body.type = type;

    return next();
  }
}

module.exports = FindType;
