'use strict';

/**
 * weather router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::weather.weather');

module.exports = {
    routes: [
      {
       method: 'GET',
       path: '/weather',
       handler: 'weather.exampleAction',
       config: {
         policies: [],
         middlewares: [],
       },
      },
    ],
  };