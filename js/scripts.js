//business logic

const add = function(number1, number2){
  return number1 + number2;
};

const subtract = function(number1, number2){
  return number1 - number2;
};

const divide = function(number1, number2){
  return number1 / number2;
};

const multiply = function(number1, number2){
  return number1 * number2;
};

//user interface logic
$(document).ready(function(){
  $("form#add").submit(function(event){
    event.preventDefault();
    const number1 = parseInt($("input#add1").val());
    const number2 = parseInt($("input#add2").val());
    const result = add(number1, number2);
    $("#output").text(result);
    
  });
});