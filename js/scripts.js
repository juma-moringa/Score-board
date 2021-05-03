// Business Logic
var sum = 0;
function scoreBoard(userValue) {
  var questions = ["js", "year", "framework","function"];
  questions.forEach(function(question) {
    var userValue = $("input:radio[name=" + question + "]:checked").val();
    if(userValue === "10") {
      sum+=10;
    }
  });
}