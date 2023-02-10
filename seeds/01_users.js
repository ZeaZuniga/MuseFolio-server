exports.seed = async function (knex) {
  await knex("users").del();
  await knex("users").insert([
    { id: 1, user_name: "Zea", user_password: "password" },
    { id: 2, user_name: "Juanisimo", user_password: "juarez" },
  ]);
};
