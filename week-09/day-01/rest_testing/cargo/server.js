'use strict';

const routes = require('./routes');
const port = 8800;

routes.listen(port, () => {
  console.log('Server running on port %d', port);
});