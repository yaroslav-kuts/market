/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route');

Route.get('/', () => ({ status: 'Ok', version: '1.0.0' }));

Route.group(() => {
  Route.post('authenticate', 'AuthController.authenticate');

  Route.get('products', 'ProductController.list');
  Route.get('products/:id', 'ProductController.get');
  Route.post('products', 'ProductController.create');
  Route.patch('products/:id', 'ProductController.update');
  Route.delete('products/:id', 'ProductController.delete');

  Route.get('attributes', 'AttributeController.list');
  Route.get('attributes/:id', 'AttributeController.get');
  Route.post('attributes', 'AttributeController.create');
  Route.patch('attributes/:id', 'AttributeController.update');
  Route.delete('attributes/:id', 'AttributeController.delete');

  Route.get('types', 'TypeController.list');
  Route.get('types/:id', 'TypeController.get');
  Route.post('types', 'TypeController.create');
  Route.patch('types/:id', 'TypeController.update');
  Route.delete('types/:id', 'TypeController.delete');
}).prefix('api/v1');
