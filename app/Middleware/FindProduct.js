const Product = use('App/Models/Product');

class FindProduct {
  async handle(
    {
      request,
      response,
      params: { id }
    },
    next
  ) {
    const product = await Product.find(id);

    if (!product) {
      return response.status(404).json({
        message: 'Product not found',
        data: { id }
      });
    }

    request.body.product = product;

    return next();
  }
}

module.exports = FindProduct;
