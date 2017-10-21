var loadState = {
    preload: function(){
        var loadingLabel = game.add.text(250, 150, 'Cargando...', {
            font: '24px Courier',
            fill: '#fff',
        });
        
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        game.scale.PageAlignHorizontally = true;
        game.scale.pageAlignVertically = true;
        
        game.load.image('background', 'assets/sprites/background_3.png');
        //game.load.image('new_game_button', 'assets/sprites/grey_button03.png');
        //game.load.image('quit_game_button_down', 'assets/sprites/blue_button01.png');
        game.load.spritesheet('dude', 'assets/sprites/dude.png', 32, 48);


        game.load.audio('main_music','assets/music/main-music.ogg');


    },
    create: function(){
        game.state.start('title');
    }
};