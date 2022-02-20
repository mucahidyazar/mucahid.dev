const routes = require('./routes.json')

const rewrites = routes.map(route => ({
  source: route.source,
  destination: route.destination,
  locale: route.locale,
}))

module.exports = {rewrites}
