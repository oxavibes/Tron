
var titleState = {
    create: function(){
        var nameLabel = game.add.text(280, 120, "Click anywhere to start", {
            font: '24px Space Mono',
            fill: '#fff'
        });
        game.add.image(0,0,'background');
        var music = game.add.audio('main_music');

        music.play();

        game.input.activePointer.capture = true;
    },
    update: function(){
        if(game.input.activePointer.isDown){
            game.state.start('play');
        }
    }
};