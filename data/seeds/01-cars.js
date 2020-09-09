
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('car').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('car').insert([
        {
          "vin": "A002646854654",
          "make": "Ford",
          "model": "Focus",
          "mileage": 20000,
          "transmission": "auto",
          "title": "clean"
      },
      ]);
    });
};
