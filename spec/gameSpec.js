var Game = require('../src/game');

describe('Gutter game', function(){

  var game = new Game();

  it('Scores 0 on a gutter game', function(){
    for(var i = 0; i < 20; i++){
      game.roll(0);
    }
    expect(game.score).toEqual(0);
  });
});
