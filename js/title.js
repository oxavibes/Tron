
var titleState = {

    create: function(){        
        var background = game.add.tileSprite(0, 0, 640, 480, 'initialbackground');
            
        var newgamebtn = game.add.button( game.world.centerX -50 ,game.world.centerY - 25 , 'new_game_button', null, this, 2, 1, 0);
        newgamebtn.onInputOver.add(over, this);
        newgamebtn.onInputOut.add(out, this);
        newgamebtn.onInputUp.add(up, this);

        var editmapbtn = game.add.button(game.world.centerX -63 , game.world.centerY - 25 + 18 * 2, 'edit_map_button', null, this, 2, 1, 0);
        editmapbtn.onInputOver.add(over, this);
        editmapbtn.onInputOut.add(out, this);
        editmapbtn.onInputUp.add(up, this);

        var quitbtn = game.add.button(game.world.centerX - 25, game.world.centerY - 25 + 18 * 4,  'quit_button', null, this, 2, 1, 0);
        quitbtn.onInputOver.add(over, this);
        quitbtn.onInputOut.add(out, this);
        quitbtn.onInputUp.add(up, this);

        
        function over(){
            
        }
        
        function out(){
            
        }
        
        function up(){
            
        }

      
    },
    update: function (){
        if(game.input.activePointer.isDown){
            //game.state.start('play');
        }
    }
};