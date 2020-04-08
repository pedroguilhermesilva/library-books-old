exports.up = function (knex) {
  return knex.schema.createTable("books", function (table) {
    table.increments();
    table.string("isbn").notNullable();
    table.string("type").notNullable();
    table.string("name").notNullable();
    table.string("drescription").notNullable();
    table.string("start_date").notNullable();
    table.string("end_date").notNullable();

    table.string("user_id").notNullable();

    table.foreign("user_id").references("id").inTable("users");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("books");
};
