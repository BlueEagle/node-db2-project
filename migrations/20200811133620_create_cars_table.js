exports.up = function (knex) {
  return knex.schema.createTable("cars", (tbl) => {
    tbl.increments("id");
    tbl.string("vin").notNullable().unique();
    tbl.string("make").notNullable();
    tbl.string("model").notNullable();
    tbl.string("mileage").notNullable();
    tbl.string("transmission");
    tbl.string("status");
  });
};

exports.down = function (knex) {
  return knex.scheme.dropTableIfExists("cars");
};
