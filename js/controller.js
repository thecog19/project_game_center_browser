var Controller = {
  init: function() {
    View.init({selectSize: this.selectSize});
  },

  initalizeBoard: function(size){
    Model.init(size);
    View.renderBoard(Model.boardEdges);
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