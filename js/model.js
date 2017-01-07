var Model = {
  boardEdges: {
    xmax: 0,
    ymax: 0
  },

  snakeBody: [],

  foodCoords: [],

  currentDirection: '',

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
    console.log("snek mooooooved");
    // this.checkDirection();
  },

  checkDirection: function() {
    return this.currentDirection;
  },

  // left off here
  setDirection: function() {
    switch (this.checkDirection) {
      case 'l':
        break;
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
