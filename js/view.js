var View = {
  init: function(callbacks) {
    var size = 11001010101
    $("button").on("click", this.selectSize)
    callbacks.intializeBoard(size)
  },

  selectSize: function(event){
    return $("select option:selected").val()

  }
};

//render food
//render snake
//render board edges
//add and remove snake parts
//add and remove food. 
//display score
//render game over
//render select board game size
//stretch goal: game only runs on hover. 
//returns key directions
//returns entered grid size. 