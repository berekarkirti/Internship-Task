'use strict';

/**
 * product router
 */

'use strict';

module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/combined-data',
      handler: 'custom.combinedData',
      config: {
        auth: false, 
        policies: [],
        middlewares: [],
      },
    },
  ],
};