var playState = {
    player_one: null,
    player_two: null,
    stela_one: null,
    stela_two: null,
    platform: null,
    cursor_one: null,
    cursor_two: null,
    way_one: null,
    way_two: null,
    velocity: 0,
    standard_velocity: 64,
    turbo_velocity: 128,
    slow_velocity: 35,

    flip_player_one: {
        "flipDown" : false,
        "flipUp" : false, 
        "flipRight":   false,
        "flipLeft" : false
    },
    flip_pLayer_two : {
        "flipDown" : false,
        "flipUp" : false, 
        "flipRight":   false,
        "flipLeft" : false
    },


    preload:function(){

        game.load.image('platform', 'assets/background/platform.png');
        game.load.spritesheet('player_one', 'assets/sprites/blue-bike.png', 32, 32);
        game.load.image('player_two', 'assets/sprites/stelaTwo.png');
        game.load.image('stela_one', 'assets/sprites/stelaOne.png');
        game.load.image('stela_two', 'assets/sprites/stelaTwo.png');
        
    },
    create: function(){
        //Adding the level background
        game.add.sprite(0, 0, 'platform');
        
        //Adding the players
        player_one = game.add.sprite(5, 5, 'player_one');
        player_two = game.add.sprite(512, 5, 'player_two');

        //Enabling physics on the players
        game.physics.arcade.enable(player_one);
        game.physics.arcade.enable(player_two);

        //First player moves with the arrow keys
        cursor_one = game.input.keyboard.createCursorKeys();

        //The second one uses de wasd keys to move
        cursor_two = {
            "up": game.input.keyboard.addKey(Phaser.Keyboard.W),
            "down": game.input.keyboard.addKey(Phaser.Keyboard.S), 
            "left": game.input.keyboard.addKey(Phaser.Keyboard.A), 
            "right": game.input.keyboard.addKey(Phaser.Keyboard.D), 
        }

        stela_one = game.add.group();
        stela_one.enableBody = true;

        stela_two = game.add.group();
        stela_two.enableBody = true;


    },
    update: function(){

        game.physics.arcade.collide(player_one, stela_one, this.crashOne(1), null, this);
        game.physics.arcade.collide(player_one, stela_two, this.crashTwo(2), null, this);
    
    
        game.physics.arcade.collide(player_two, stela_one, this.crashOne(1), null, this);
        game.physics.arcade.collide(player_two, stela_two, this.crashTwo(2), null, this);

        this.controlPlayerOne();
        this.controlPlayerTwo();
           
    },

    controlPlayerOne: function(){
        way_one = stela_one.create(player_one.position.x, player_one.position.y, 'stela_one')
        way_one.body.immovable = true;
    
        if (cursor_one.left.isDown)
        {
            //  Move to the left
            if(! this.flip_player_one.flipLeft){
    
                player_one.body.position.x -=  1;
                player_one.body.velocity.x = - this.standard_velocity;
                player_one.body.velocity.y = 0;
                //planet.animations.play('left');
                
                this.flip_player_one.flipLeft = true;
            }
            
    
        }
        else if (cursor_one.right.isDown)
        {
            if(! this.flip_player_one.flipRight)
            {
                //planet.animations.play('right');
                player_one.body.position.x += 1;
                player_one.body.velocity.x = this.standard_velocity;
                player_one.body.velocity.y = 0;
               
                this.flip_player_one.flipRight = true;
    
            }
           
        }
        else if (cursor_one.up.isDown)
        {
            if(! this.flip_player_one.flipUp)
            {
                //planet.animations.play('up');
                player_one.body.position.y -= 1;
                player_one.body.velocity.x = 0;
                player_one.body.velocity.y = - this.standard_velocity;
    
                this.flip_player_one.flipUp = true;
    
            }
    
    
        }
        else if( cursor_one.down.isDown)
        {
           //  planet.body.velocity.y = 32;
           //   planet.body.velocity.x = 0;
    
           if(! this.flip_player_one.flipDown)
           {
                //planet.animations.play('down');
                player_one.body.position.y += 1;
                player_one.body.velocity.x = 0;
                player_one.body.velocity.y = this.standard_velocity;

                this.flip_player_one.flipDown = true;
    
           }
           
        }else{
    
        }
    
        if (cursor_one.up.isUp) {
            this.flip_player_one.flipUp = false;
        } 
        if (cursor_one.down.isUp) {
            this.flip_player_one.flipDown = false;
        }
        if (cursor_one.left.isUp) {
           this.flip_player_one.flipLeft = false;
        }
        if (cursor_one.right.isUp) {
           this.flip_player_one.flipRight = false;
        }
    },

    controlPlayerTwo: function(){

    },

    crashOne: function(stela){

    },

    crashTwo: function(stela){

    }
    
};

