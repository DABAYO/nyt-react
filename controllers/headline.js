// Controller for headlines
// ============================
const db = require("../models");

module.exports = {
  // Find all headlines, sort them by date, send them back to the user
  findAll: function(req, res) {
    db.Headline
      .find(req.query)
      .sort({ date: -1 })
      .then(function(dbHeadline) {
        res.json(dbHeadline);
      });
  },
  // Delete the specified headline
  delete: function(req, res) {
    db.Headline.remove({ _id: req.params.id }).then(function(dbHeadline) {
      res.json(dbHeadline);
    });
  },
  // Update the specified headline
  create: function(req, res) {
    db.Headline
      .create(req.body)
      .then(dbHeadline => res.json(dbHeadline))
      .catch(err => res.status(422).json(err));
  }
};
