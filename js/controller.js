var Controller = {
  init: function() {
    View.init({intializeBoard: this.intializeBoard})
  },

  intializeBoard: function(size){
    console.log("YEAH SNAKES  " + size)
  }
};



$(document).ready(function() {
  Controller.init();
});

//merge view and model! woo! :D