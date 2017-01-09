var View = {
  init: function(callbacks) {
    var $button = $("button");
    $button.on("click", callbacks.selectSize);
    $(document).keydown(callbacks.keyPressed
    )
  },

  returnSize: function(){
    return $("select option:selected").val();
  },

  renderBoard: function(boardEdges){
    var $container = $(".container");
    for(var col = 0; col < boardEdges.xmax; col++ ){
      for(var cell = 0; cell < boardEdges.ymax; cell++ ){
        var $square = $("<div>").addClass("square").attr({
          "data-x": cell,
          "data-y": col
        });
        $container.append($square);
      }
      $container.append("<br>");
    }
  },

  renderMGS: function(snake, klass){
    var $snake = $(klass)
    $snake.removeClass(klass.slice(1))

    snake.forEach(snakeBit => {
      this.renderObject(snakeBit[0], snakeBit[1], klass.slice(1));
    });
  },

  renderFood: function(foodCoords) {
    var $food = $(".food")
    $food.removeClass("food")

    this.renderObject(foodCoords[0], foodCoords[1], "food");
  },

  renderObject: function(x,y,klass) {
    var $coords = $(".square").filter("[data-x='" + x +"']").filter("[data-y='" + y +"']");
    $coords.addClass(klass);
  },

  clear: function() {
    var $square = $('.square');
    var $br = $('br');
    $square.remove();
    $br.remove();
  },

  renderDefeat: function(score){
    alert("You have been defeated! \n Your score was " + score );
  }, 

  updateScore: function(score){
    $(".score").text(score)
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
