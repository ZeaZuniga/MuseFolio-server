exports.up = function (knex) {
  return knex.schema.createTable("songList", (table) => {
    table.increments("id").primary();
    table.string("title").notNullable();
    table.string("composer").notNullable().defaultTo("composer unknown");
    table.string("url_path").notNullable();
    table.string("tags").notNullable();
    table.string("favorite").notNullable().defaultTo("false");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("songList");
};
