var Model = {
  boardEdges: {
    xmax: 0,
    ymax: 0
  },

  snakeBody1: [],
  snakeBody2: [],
  foodCoords: [],

  currentDirection1: '',
  currentDirection2: '',

  score: 0,

  grow: false,

  init: function(size) {
    this.createBoard(size);
    this.createSnake(Model.snakeBody1);
    this.createSnake(Model.snakeBody2);
    this.addFood();
  },

  createBoard: function(size){
    this.boardEdges.xmax = size;
    this.boardEdges.ymax = size;
  },

  genRandCoords: function(){
    var x = Math.floor(Math.random() * (this.boardEdges.xmax));
    var y = Math.floor(Math.random() * (this.boardEdges.ymax));
    return [x, y];
  },

  createSnake: function(snakeBody){
    snakeBody.push(this.genRandCoords());
  },

  snakeMove: function(snakeBody, firstp) {
    var change = Model.setDirection(undefined, firstp);
    var snakeHead = snakeBody[0]
    if(!this.grow){
      snakeBody.pop()
    }
    this.grow = false
    snakeHead[0] += change[0]
    snakeHead[1] += change[1]
    snakeBody.unshift(snakeHead) 
  },

  checkLose: function(snakeBody) {
    var headPos = snakeBody[0]
    if(headPos[1] > this.boardEdges.xmax || headPos[1] < 0){
      return true;
    }else if(headPos[0] > this.boardEdges.ymax || headPos[0] < 0){
      return true;
    }else if(this.snakeCollision(snakeBody[0], snakeBody)){
      return true
    }else if(this.snakeOverlap()){
      return true
    }
    return false;
  },

  setDirection: function(event, firstp = true) {
    var newDir;
    if(event){
      var press = event.which
      if(press === 38){
        newDir = "u";
      }else if(press === 40){
        newDir = "d";
      }else if(press === 37){
        newDir = "l"
      }else if(press === 39){
        newDir = "r"
      }else if(press === 87){
        newDir = "u";
        firstp = false
      }else if(press === 83){
        newDir = "d";
        firstp = false
      }else if(press === 65){
        newDir = "l";
        firstp = false
      }else if(press === 68){
        newDir = "r";
        firstp = false
      }else{
        newDir = false
      }
    }
    var final = Model.dirAssist(newDir, firstp)

    return final;

  },

  setter: function(player1, val){
    if(player1){
      Model.currentDirection1 = val
    }else{
      Model.currentDirection2 = val
    }
  },

  checkDir: function(player1){
    if(player1){
      return Model.currentDirection1
    }else{
      return Model.currentDirection2
    }
  },

  dirAssist: function(newDir, player1) {

    switch (newDir || Model.checkDir(player1)) {
          case 'l':
            Model.setter(player1, "l")
            return [-1,0]
          case 'r':
            Model.setter(player1, "r")
            return [1,0]
          case 'u':
            Model.setter(player1, "u")
            return [0,-1]
          case 'd':
            Model.setter(player1, "d")
            return [0,1]
          default:
            return [0,0]
        }
  },

  addFood: function() {
    Model.foodCoords = this.genRandCoords()
    while(this.overlap(Model.foodCoords)){
      Model.foodCoords = this.genRandCoords();
    }
  },

  onFood: function(){   
     return this.overlap(Model.foodCoords);
  }, 

  eatFood: function() {
    this.addFood();
    this.score += 100
    this.grow = true;
  },

  overlap: function(compareCoord, exclude){
    var overlap = false;
    var storedIndex;

    this.snakeBody1.forEach(function(snakeBit, index) {
      var same = (snakeBit[0] === compareCoord[0] && 
        snakeBit[1] === compareCoord[1])
      if (same) {
        overlap = true;
      }
      });
    return overlap

    this.snakeBody2.forEach(function(snakeBit, index) {
      var same = (snakeBit[0] === compareCoord[0] && 
        snakeBit[1] === compareCoord[1])
      if (same) {
        overlap = true;
      }
      });
    return overlap
  },

  snakeCollision: function(head, snakeBody){
    //actually all we have to do is make sure that the head doesn't overlap with any of the snake peices. This method should look familiar. 
    var body = snakeBody.slice(1)
    console.log(body)
    console.log(snakeBody)
    console.log(head)
    var overlap = false;
    body.forEach(function(snakeBit, index) {
      var same = (snakeBit[0] === head[0] && 
        snakeBit[1] === head[1])
      if (same) {
        overlap = true;
      }
      });
    return overlap
  },


  snakeOverlap: function(){
    var overlap = false
    Model.snakeBody1.forEach(function(segment){
      Model.snakeBody2.forEach(function(s2segment){
          if(segment[0] === s2segment[0] &&segment[1] === s2segment[1]){
            overlap = true
          }
      })
    })
    return overlap
  },

  notHead: function(head, snakeBit){
    if(snakeBit === undefined){
      return false
    }
    if(head[0] === snakeBit[0] && head[1] === snakeBit[1]){

      return true
    }
    return false
  }

};
