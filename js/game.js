var game =  new Phaser.Game(640, 480, Phaser.AUTO, null, 'game');

//Adding each game state
game.state.add('boot', bootState);
game.state.add('load', loadState);
game.state.add('menu', menuState);
game.state.add('mapeditor', mapEditorState);
game.state.add('play', playState);

//Calling the boot state
game.state.start('boot');