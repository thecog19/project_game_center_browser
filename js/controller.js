var Controller = {
  init: function() {
    View.init({selectSize: this.selectSize,
               keyPressed: this.keyPressed});
  },

  interval: "",
  size: "",

  initalizeBoard: function(size){
    this.clear();
    Model.init(size);
    View.renderBoard(Model.boardEdges);
    View.renderMGS(Model.snakeBody1, ".snek");
    View.renderMGS(Model.snakeBody2, ".p2");
    View.renderFood(Model.foodCoords);
    this.gameLoop();
  },

  keyPressed: function(event){
    Model.setDirection(event)
  },

  selectSize: function(event){
    Controller.size = View.returnSize();
    Controller.initalizeBoard(Controller.size);
  },

  gameLoop: function() {
    Controller.interval = setInterval(Controller.gameLoopEvents, 500);

  },

  gameLoopEvents: function(){

    if(Model.checkLose(Model.snakeBody1) || Model.checkLose(Model.snakeBody2)){
      View.renderDefeat(Model.score)
      Controller.initalizeBoard(Controller.size)
    }
    Model.snakeMove(Model.snakeBody1, true);
    Model.snakeMove(Model.snakeBody2, false);
    View.renderMGS(Model.snakeBody1, ".snek");
    View.renderMGS(Model.snakeBody2, ".p2");
    
    if(Model.onFood()){
      Model.eatFood()
      View.renderFood(Model.foodCoords)
      View.updateScore(Model.score)
    }
  },

  clear: function() {
    if(Controller.interval){
     clearInterval(Controller.interval)
    }
    Model.snakeBody1 = [];
    Model.currentDirection1 = ""
    Model.snakeBody2 = [];
    Model.currentDirection2 = ""
    Model.score = 0
    View.clear();
  }
};



$(function() {
  Controller.init();
});
//merge view and model! woo! :D
