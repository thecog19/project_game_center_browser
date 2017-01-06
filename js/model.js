var Model = {
  boardEdges: {
    xmax: 0,
    ymax: 0
  },

  init: function(size) {
    this.createBoard(size);
    //this.createSnake();
    // this.placeFood();
  },


  createBoard: function(size){
    this.boardEdges.xmax = size;
    this.boardEdges.ymax = size;
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