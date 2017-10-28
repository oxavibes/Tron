
var menuState = {
    background: null,
    new_game_button: null,
    edit_map_button: null,
    load_game_button: null,

    create: function (){        
        background = game.add.tileSprite(0, 0, 640, 480, 'initialbackground');
            
        new_game_button = game.add.button( game.world.centerX - 50 ,game.world.centerY - 25 , 'new_game_button', null, this, 2, 1, 0);
        
        /*var load_game = game.add.text(game.world.centerX - 60 , game.world.centerY - 30 + 18 * 4 , 'LOAD GAME', 
        {
            font: '22px Arial',
            fill: '#fff'
        });*/

        edit_map_button = game.add.button(game.world.centerX -63 , game.world.centerY - 25 + 18 * 2, 'edit_map_button', null, this, 2, 1, 0);
        
        //load_game_button = game.add
      
    },
    
    update: function (){
        new_game_button.onInputUp.add(function(){
            game.state.start('play');
        }, this);
        
        edit_map_button.onInputUp.add(function(){
            game.state.start('mapeditor');
        }, this);

    }
};