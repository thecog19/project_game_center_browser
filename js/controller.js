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
    View.renderMGS(Model.snakeBody);
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
    Controller.interval = setInterval(Controller.gameLoopEvents, 1000);

  },

  gameLoopEvents: function(){
    Model.snakeMove();
    View.renderMGS(Model.snakeBody);
    if(Model.checkLose()){
      View.renderDefeat()
      Controller.initalizeBoard(Controller.size)
    }
    if(Model.onFood()){
      Model.eatFood()
      View.renderFood(Model.foodCoords)
    }
  },

  clear: function() {
    if(Controller.interval){
     clearInterval(Controller.interval)
    }
    Model.snakeBody = [];
    View.clear();
  }
};



$(function() {
  Controller.init();
});
//merge view and model! woo! :D
