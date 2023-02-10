exports.up = function (knex) {
  return knex.schema
    .createTable("users", (table) => {
      table.increments("id").primary();
      table.string("user_name").notNullable();
      table.string("user_password").notNullable();
    })
    .createTable("songList", (table) => {
      table.increments("id").primary();
      table.string("title").notNullable();
      table.string("composer").notNullable().defaultTo("composer unknown");
      table.string("url_path").notNullable();
      table.string("tags").notNullable();
      table.string("favorite").notNullable().defaultTo("false");
      table
        .integer("user_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("users")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    });
};

exports.down = function (knex) {
  return knex.schema.dropTable("songList").dropTable("users");
};
