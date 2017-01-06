var View = {
  init: function(callbacks) {
    var $button = $("button");
    $button.on("click", callbacks.selectSize);
  },

  returnSize: function(){
    return $("select option:selected").val();
  },

  renderBoard: function(boardEdges){
    var $container = $(".container");
    for(var col = 1; col <= boardEdges.xmax; col++ ){
      for(var cell = 1; cell <= boardEdges.ymax; cell++ ){
        var $square = $("<div>").addClass("square");
        $container.append($square);
      }
      $container.append("<br>")
    }
    
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