class AdminOnly {
  async authorize() {
    const {
      ctx: {
        response,
        auth: {
          user: { role }
        }
      }
    } = this;
    if (role !== 'admin') {
      response.status(403).send({ message: 'Not authorized' });
    }
    return true;
  }
}

module.exports = AdminOnly;
