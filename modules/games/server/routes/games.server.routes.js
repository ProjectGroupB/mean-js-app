'use strict';

/**
 * Module dependencies
 */
var gamesPolicy = require('../policies/games.server.policy'),
  games = require('../controllers/games.server.controller');

module.exports = function(app) {
  // Games Routes
  app.route('/api/games').all(gamesPolicy.isAllowed)
    .get(games.list)
    // .post(games.create);
    .post(games.uploads);


  app.route('/api/games/:gameId').all(gamesPolicy.isAllowed)
    .get(games.read)
    .put(games.update)
    .delete(games.delete);

  // Finish by binding the Game middleware
  app.param('gameId', games.gameByID);
};
