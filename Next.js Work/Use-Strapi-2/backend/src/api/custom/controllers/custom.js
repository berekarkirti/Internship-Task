'use strict';

/**
 * custom controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::custom.custom', ({ strapi }) => ({
    async combinedData(ctx) {
      const [products, categories] = await Promise.all([
        strapi.entityService.findMany('api::product.product', { populate: '*' }),
        strapi.entityService.findMany('api::category.category', { populate: '*' }),
      ]);
  
      const stockLessThanTen = products.filter(product => product.stock < 10).length;
  
    //   const stockGreaterThanTen = products.filter(product => product.stock > 10).length;
  
      ctx.body = {
        // products,
        // categories,
        // productCount: products.length,
        // categoryCount: categories.length,
        stockLessThanTen,    
        // stockGreaterThanTen,   
      };
    }
  }));
