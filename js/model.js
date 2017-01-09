var Model = {
  boardEdges: {
    xmax: 0,
    ymax: 0
  },

  snakeBody: [],

  foodCoords: [],

  currentDirection: 'r',

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
    Model.snakeBody.pop()
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
    }
    return false;

  },

  checkDirection: function() {
    return this.currentDirection;
  },

  // left off here
  setDirection: function(event) {
    var newDir;
    if(event){
      var press = event.which
      if(press === 38){
        console.log("up")
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
        return [0,-1]
      case 'r':
        Model.currentDirection = "r"
        return [0,1]
      case 'u':
        Model.currentDirection = "u"
        return [-1,0]
      case 'd':
        Model.currentDirection = "d"
        return [1,0]
      default:
        return [0,0]
    }
  },

  addFood: function() {
    var overlap = true;
    while (overlap) {
      this.foodCoords = this.genRandCoords();
      this.snakeBody.forEach(function(snakeBit) {
        var differentX = snakeBit[0] !== Model.foodCoords[0];
        var differentY = snakeBit[1] !== Model.foodCoords[1];
        if (differentX && differentY) {
          overlap = false;
        }
      });
    }
  },

   onFood: function(){
    var overlap = false;
    this.snakeBody.forEach(function(snakeBit) {
      var sameX = snakeBit[0] === Model.foodCoords[0];
      var sameY = snakeBit[1] === Model.foodCoords[1];
      if (sameY && sameX) {
        overlap = true;
        }
      });
    
    return overlap
  },

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
