const home = require('../controllers/home/index');
const admin = require('../controllers/admin/index');

exports.routeLoader = (app) => {
  app.use('/api/v1/home', home.router);
  app.use('/api/v1/admin', admin.router);
};
