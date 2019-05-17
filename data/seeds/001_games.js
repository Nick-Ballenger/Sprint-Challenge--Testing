exports.seed = function(knex, Promise) {
  return knex('games')
    .truncate()
    .then(function() {
      return knex('games').insert([
        { title: 'Super Mario Bros', genre: 'Platformer', releaseYear: '1985'},
        { title: 'Legend of Zelda', genre: 'Advenure', releaseYear: '1986'},
        { title: 'Skryim', genre: 'RPG', releaseYear: '2011'},
      ]);
    });
};