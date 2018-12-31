class AuthController {
  async authenticate({ request, auth }) {
    const { email, password } = request.post();
    const token = await auth.attempt(email, password);
    return {
      message: 'Authentication was successfully completed',
      data: token
    };
  }
}

module.exports = AuthController;
