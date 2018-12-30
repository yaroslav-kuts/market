const Product = use('App/Models/Product');

class ProductController {
  async get({ request }) {
    const { product } = request.post();
    return {
      message: 'ok',
      data: product
    };
  }

  async list() {
    const products = await Product.all();
    return {
      message: 'ok',
      data: products
    };
  }

  async store({ request }) {
    const body = request.post();
    const product = await Product.create(body);
    return {
      message: 'Product was created',
      data: product
    };
  }

  async update({ request }) {
    const { product, title, price, properties } = request.post();
    product.title = title;
    product.price = price;
    product.properties = properties;
    await product.save();
    return {
      message: 'Product was updated',
      data: product
    };
  }

  async delete({ request }) {
    const { product } = request.post();
    await product.delete();
    return {
      message: 'Product was deleted',
      data: { id: product.id }
    };
  }
}

module.exports = ProductController;
