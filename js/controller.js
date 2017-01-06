var Controller = {
  init: function() {
    View.init({selectSize: this.selectSize});
  },

  initalizeBoard: function(size){
    this.clear();
    Model.init(size);
    View.renderBoard(Model.boardEdges);
    View.renderMGS(Model.snakeBody);
  },

  selectSize: function(event){
     var size = View.returnSize();
     Controller.initalizeBoard(size);
  }
};



$(document).ready(function() {
  Controller.init();
});

//merge view and model! woo! :D