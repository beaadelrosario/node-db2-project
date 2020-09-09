// records changes to the db schema
exports.up = function(knex) {
  return knex.schema.createTable("car", tbl => {
    tbl.increments('id');
    tbl.string('vin').unique().notNullable().index();
    tbl.string('make').notNullable();
    tbl.string('model').notNullable();
    tbl.integer('mileage').notNullable();
    tbl.string('transmission');
    tbl.string('title');
  })
};

//undo changes defined on the up func
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('car');
};

// VIN, make, model and mileage