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
  Route.get('products/:id', 'ProductController.get').middleware(['findProduct']);
  Route.post('products', 'ProductController.store');
  Route.patch('products/:id', 'ProductController.update').middleware(['findProduct']);
  Route.delete('products/:id', 'ProductController.delete').middleware(['findProduct']);

  Route.get('types', 'TypeController.list');
  Route.get('types/:id', 'TypeController.get').middleware(['findType']);
  Route.post('types', 'TypeController.store');
  Route.patch('types/:id', 'TypeController.update').middleware(['findType']);
  Route.delete('types/:id', 'TypeController.delete').middleware(['findType']);
}).prefix('api/v1');
