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

  Route.get('products', 'ProductController.list').middleware(['guest']);
  Route.get('products/:id', 'ProductController.get')
    .middleware(['guest'])
    .middleware(['findProduct']);
  Route.post('products', 'ProductController.store').middleware(['auth:jwt']);
  Route.patch('products/:id', 'ProductController.update')
    .middleware(['auth:jwt'])
    .middleware(['findProduct']);
  Route.delete('products/:id', 'ProductController.delete')
    .middleware(['auth:jwt'])
    .middleware(['findProduct']);
  Route.post('products/:id/images', 'ImageController.upload').middleware(['auth:jwt']);

  Route.get('types', 'TypeController.list').middleware(['auth:jwt']);
  Route.get('types/:id', 'TypeController.get')
    .middleware(['auth:jwt'])
    .middleware(['findType']);
  Route.post('types', 'TypeController.store')
    .middleware(['auth:jwt'])
    .validator('AdminOnly');
  Route.patch('types/:id', 'TypeController.update')
    .middleware(['auth:jwt'])
    .validator('AdminOnly')
    .middleware(['findType']);
  Route.delete('types/:id', 'TypeController.delete')
    .middleware(['auth:jwt'])
    .validator('AdminOnly')
    .middleware(['findType']);
}).prefix('api/v1');
