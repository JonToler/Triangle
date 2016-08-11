$(document).ready(function() {
  $("form#triangle").submit(function(event){
    event.preventDefault();
    var line1 = parseInt($("input#input1").val());
    var line2 = parseInt($("input#input2").val());
    var line3 = parseInt($("input#input3").val());
    // debugger;
    if ((line1 === line2) && (line1 === line3) && (line2 === line3)){
        $("#outPut").text("Your triangle is equilateral");
    } else if (line1 === line2 && line2 != line3){
        $("#outPut").text("Your triangle is isoscles");
    }
      else if (line1 === line3 && line2 != line1){
        $("#outPut").text("Your triangle is isoscles");
    }
    else if (line3 === line2 && line1 != line3){
      $("#outPut").text("Your triangle is isoscles");
    }
    else if (line3 + line2 <= line1){
    $("#outPut").text("Welcome to the Bermuda Triangle");
    }
    else if (line1 + line3 <= line2){
      $("#outPut").text("Welcome to the Bermuda Triangle");
    }
    else if (line1 + line2 <= line3){
      $("#outPut").text("Welcome to the Bermuda Triangle");
    }
    else if (line1 != line2 && line2 != line3 && line1 != line3){
    $("#outPut").text("Your triangle is scalene");
    }

    else {
      console.log("hello");
    }
  });

});
