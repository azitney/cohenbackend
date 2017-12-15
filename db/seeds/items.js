
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('items').del()
    .then(function () {
      // Inserts seed entries
      return knex('items').insert([
        {title: 'Hines Ward Signed Helmet', description: 'Hines Ward signed Pittsburgh Steelers Throwback Full-Size Helmet. Auto JSA COA. This helmet was signed after an event and it comes with a COA from James Spence Authentication Guarantee', price: 29999, tags: JSON.stringify(["sports", "pittsburgh", "autographed"]), primary_photo: 'https://s20.postimg.org/m6tdvijst/hineshelmet.png', status: 'forsale' },
        {title: 'Adlers Appetite Signed Drumhead', description: 'This drumhead was signeded by the whole band in Pittsburgh before a show. It comes with a COA to guarantee authenticity ', price: 19999, tags: JSON.stringify(["artists", "autographed"]), primary_photo: 'https://s20.postimg.org/bww0t92rx/adlersappetit.png', status: 'forsale'},
        {title: 'Avril Lavigne Signed CD', description: 'Avril Lavigne signed this in Pittsburgh after a concert. It comes with a COA from James Spence Authentication Guarantee ', price: 12999, tags: JSON.stringify(["artists", "autographed"]), primary_photo: 'https://s20.postimg.org/nn9yav0rx/avril.png', status: 'forsale' },
        {title: 'Juju Smith Schuster Signed Football', description: 'This football was signed at a Steelers Practice and it comes with a COA from James Spence authenticity.', price: 11999, tags: JSON.stringify(["sports", "autographed", 'pittsburgh']), primary_photo: 'https://s20.postimg.org/caxct24xp/juju.png', status: 'forsale' },
        {title: 'John Travolta signed Movie', description: 'John Travolta signed Be Cool movie photo. This photo was signed in Cleveland and comes with a COA to guarantee authenticity.', price: 7999, tags: JSON.stringify(["movies", "autographed"]), primary_photo: 'https://s20.postimg.org/832kk0dp9/john.png', status: 'forsale' },
        {title: 'Betty Who Signed CD Cover', description: 'Betty Who signed Take Me WHen You Go CD Cover. Betty Who signed this in Pittsburgh, PA after a concert. Comes with a COA to guarantee authenticity.', price: 9999, tags: JSON.stringify(["artists", "autographed", 'sale']), primary_photo: 'https://s20.postimg.org/coyosirkd/betty.png', status: 'sold'}
      ]);
    });
};
