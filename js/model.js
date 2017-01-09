var Model = {
  boardEdges: {
    xmax: 0,
    ymax: 0
  },

  snakeBody: [],

  foodCoords: [],

  currentDirection: '',

  score: 0,

  grow: false,

  init: function(size) {
    this.createBoard(size);
    this.createSnake();
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

  createSnake: function(){
    this.snakeBody.push(this.genRandCoords());
  },

  snakeMove: function() {
    // console.log("snek mooooooved");
    var change = Model.setDirection();
    var snakeHead = Model.snakeBody[0].slice(0)
    if(!this.grow){
      Model.snakeBody.pop()
    }
    this.grow = false
    snakeHead[0] += change[0]
    snakeHead[1] += change[1]
    Model.snakeBody.unshift(snakeHead)  
  },

  checkLose: function() {
    var headPos = Model.snakeBody[0]
    if(headPos[1] > this.boardEdges.xmax || headPos[1] < 0){
      return true;
    }else if(headPos[0] > this.boardEdges.ymax || headPos[0] < 0){
      return true;
    }else if(this.snakeCollision(this.snakeBody[0])){
      return true
    }
    return false;
  },

  checkDirection: function() {
    return this.currentDirection;
  },

  setDirection: function(event) {
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
      }else{
        newDir = false
      }
    }

    switch (newDir || this.checkDirection()) {
      case 'l':
        Model.currentDirection = "l"
        return [-1,0]
      case 'r':
        Model.currentDirection = "r"
        return [1,0]
      case 'u':
        Model.currentDirection = "u"
        return [0,-1]
      case 'd':
        Model.currentDirection = "d"
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
    this.score += 100 * this.snakeBody.length
    this.grow = true;
  },

  overlap: function(compareCoord, exclude){
    var overlap = false;
    var storedIndex;
    this.snakeBody.forEach(function(snakeBit, index) {
      var same = (snakeBit[0] === compareCoord[0] && 
        snakeBit[1] === compareCoord[1])
      if (same) {
        overlap = true;
      }
      });
    return overlap
  },

  snakeCollision: function(head){
    //actually all we have to do is make sure that the head doesn't overlap with any of the snake peices. This method should look familiar. 
    var overlap = false;
    this.snakeBody.slice(1).forEach(function(snakeBit, index) {
      var same = (snakeBit[0] === head[0] && 
        snakeBit[1] === head[1])
      if (same) {
        overlap = true;
      }
      });
    return overlap
  },

  notHead: function(head, snakeBit){
    console.log(snakeBit)
    if(snakeBit === undefined){
      return false
    }
    if(head[0] === snakeBit[0] && head[1] === snakeBit[1]){
      console.log("returning true")
      return true
    }
    return false
  }

};

// store snake body, array of coordinates.
// store direction of snake
// logic for which direction to set the snake
// store the plane dimensions
// store food as coordinate pair
// growning snake logic
// food placing logic
// losing logic
// food eating logic (remove from board)
// score logic
