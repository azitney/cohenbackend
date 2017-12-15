
exports.up = function(knex, Promise) {
  return knex.schema.createTable('items', function(table) {
    table.increments();
    table.string('title');
    table.string('description');
    table.integer('price');
    table.json('tags');
    table.string('primary_photo');
    table.string('status');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('items');
};
