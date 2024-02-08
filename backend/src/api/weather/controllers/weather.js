'use strict';
const axios = require("axios");

/**
 * weather controller
 */
const { entityService } = require("@strapi/strapi").factories;

// const { createCoreController } = require('@strapi/strapi').factories;

// module.exports = createCoreController('api::weather.weather');

module.exports = {
    exampleAction: async (ctx, next) => {
        try {
            const { location } = ctx.query;

            const response = await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=4cab85d4ce0d46e8838183917240102&q=${location}&days=7&aqi=yes&alerts=no`);


            const data = response.data;

            const productData = {
                location_name: data['location']['name'],
                location_region: data['location']['region'],
                location_country: data['location']['country'],
                current_temp_c: data['current']['temp_c'],
                condition_text: data['current']['condition']['text'],
                condition_icon: data['current']['condition']['icon'],
                wind_mph: data['current']['wind_mph'],
                humidity: data['current']['humidity'],
                cloud: data['current']['cloud'],
                feelslike_c: data['current']['feelslike_c'],
                air_quality_pm10: data['current']['air_quality']['pm10'],
                forecast_date: data['forecast']['forecastday'][0]['date'],
                maxtemp_c: data['forecast']['forecastday'][0]['day']['maxtemp_c'],
                mintemp_c: data['forecast']['forecastday'][0]['day']['mintemp_c'],
                avgtemp_c: data['forecast']['forecastday'][0]['day']['avgtemp_c'],
            };

            const entry = await strapi.entityService.create("api::weather.weather", { data: productData });
            ctx.body = entry;

        } catch (err) {
            ctx.body = err;
        }
    }
};