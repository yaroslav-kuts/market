const BaseExceptionHandler = use('BaseExceptionHandler');
const logger = use('Logger');

class ExceptionHandler extends BaseExceptionHandler {
  async handle({ status, message }, { response }) {
    response.status(status).send({ message });
  }

  async report({ name, message, status = 500, stack }) {
    logger.error(`${name}\n${message}\n${status}\n${stack}`);
  }
}

module.exports = ExceptionHandler;
