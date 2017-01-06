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
    for(var col = 0; col < boardEdges.xmax; col++ ){
      for(var cell = 0; cell < boardEdges.ymax; cell++ ){
        var $square = $("<div>").addClass("square").attr({
          "data-x": col,
          "data-y": cell
        });
        $container.append($square);
      }
      $container.append("<br>");
    }
  },

  renderMGS: function(snake){
    snake.forEach(function(snakeBit){
      var $coordinate = $(".square").filter("[data-x='" + snakeBit[0] +"']").filter("[data-y='" + snakeBit[1] +"']");
      $coordinate.addClass("snek");
    });
  },

  clear: function() {
    var $square = $('.square');
    var $br = $('br');
    $square.remove();
    $br.remove();
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
