class AuthController {
  async authenticate() {
    return { endpoint: 'authenticate' };
  }
}

module.exports = AuthController;
