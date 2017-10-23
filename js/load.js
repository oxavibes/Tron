var loadState = {
    preload: function(){
        var loadingLabel = game.add.text(250, 150, 'Cargando...', {
            font: '24px Courier',
            fill: '#fff',
        });
        
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        game.scale.PageAlignHorizontally = true;
        game.scale.pageAlignVertically = true;
        
        game.load.image('initialbackground', 'assets/background/initialbackground.png');
        game.load.spritesheet('new_game_button', 'assets/buttons/new_game.png', 100, 17);
        game.load.spritesheet('edit_map_button', 'assets/buttons/map_editor_button.png', 125, 18);
        game.load.spritesheet('quit_button', 'assets/buttons/quit_button.png', 50, 18);


        game.load.audio('main_music','assets/music/main-music.ogg');


    },
    create: function(){
        game.state.start('title');
    }
};