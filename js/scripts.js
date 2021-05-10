// Business Logic
var sum = 0;
function scoreBoard(userValue) {
  var questions = [ "framework" ,"function" ,"year","js" ];
  questions.forEach(function(question) {
    var userValue = $("input:radio[name=" + question + "]:checked").val();
    if(userValue === "10") {
      sum+=10;
    }
  });
}

// User Interface.
 
  $("#submit").click(function(event) {
    event.preventDefault();
    $("#score").show();
    $("#form1").hide();
    // scoreCalculator();
    // var output= $("#").val();
    if(sum <= 30) {
      $(".name-display").text(`Nice trial`);
    } else {
      $(".name-display").text(`Congratulations.`);
    }
    $(".scoreDisplay").text(sum + "/40");
  })
  $("#retake").click(function(event) {
    event.preventDefault();
    location.reload();
  })
