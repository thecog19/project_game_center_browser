var Controller = {
  init: function() {
    View.init({selectSize: this.selectSize});
  },

  initalizeBoard: function(size){
    this.clear();
    Model.init(size);
    View.renderBoard(Model.boardEdges);
    View.renderMGS(Model.snakeBody);
    View.renderFood(Model.foodCoords);
    this.gameLoop();
  },

  selectSize: function(event){
     var size = View.returnSize();
     Controller.initalizeBoard(size);
  },

  gameLoop: function() {
    setInterval(Model.snakeMove, 1000);
  },

  clear: function() {
    Model.snakeBody = [];
    View.clear();
  }
};



$(document).ready(function() {
  Controller.init();
});

//merge view and model! woo! :D
