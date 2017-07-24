var MinuteExo = 0;
var MinuteBreak = 0;
var secondes = 60;
var testExo = false;
var testBreak = false;
var timeExo;
var timeBreak;

function lancementDecompteExo(){
  $("#remplissageBreak").slideUp();
  $("#remplissageExo").slideDown(((MinuteExo+1) * secondes)*1000);
  timeExo = setTimeout(function () {
    console.log("test2");
    secondes--;
    decompteExo();
  }, 1000);
}

function decompteExo(){
    console.log("test3");
    if (MinuteExo === 0 && secondes === 0) {
      $("#secondesExo").text(secondes);
      secondes = 60;
      transition();
        }
    else if (secondes === 0) {
      secondes = 60;
      $("#secondesExo").text(secondes);
      MinuteExo--;
      $("#compteurExo").text(MinuteExo);
      lancementDecompteExo();
    }
    else if (MinuteExo < 0) {
      transition();
    }
    else{
      console.log(secondes);
      $("#secondesExo").text(secondes);
      $("#compteurExo").text(MinuteExo);
      lancementDecompteExo();
    }
}

function lancementDecompteBreak(){
  $("#remplissageExo").slideUp();
  $("#remplissageBreak").slideDown(((MinuteBreak+1) * secondes)*1000);
  timeBreak = setTimeout(function () {
    console.log("testBreak2");
    secondes--;
    decomptebreak();
  }, 1000);
}

function decomptebreak(){
    console.log("test3");
    if (MinuteBreak === 0 && secondes === 0) {
      $("#secondesBreak").text(secondes);
      transition();
    }
    else if (secondes === 0) {
      secondes = 60;
      $("#secondesBreak").text(secondes);
      MinuteExo--;
      $("#compteurBreak").text(MinuteExo);
      lancementDecompteBreak();
    }
    else if (MinuteBreak < 0) {
      transition();
    }
    else{
      console.log(secondes);
      $("#secondesBreak").text(secondes);
      $("#compteurBreak").text(MinuteExo);
      lancementDecompteBreak();
    }
}

function transition(){
  if (MinuteBreak === 0 && secondes === 0) {
    secondes = 60;
    MinuteExo--;
    lancementDecompteExo();
  }
  else if (MinuteExo === 0 && secondes === 0) {
    secondes = 60;
    MinuteBreak--;
    lancementDecompteBreak();
  }
  else{
    $("#remplissageExo").slideUp();
    $("#remplissageBreak").slideUp();
    alert("indiquez un temps");
  }
}

function depart(){
  $("#compteurBreak").text(MinuteBreak);
  $("#compteurExo").text(MinuteExo);
  console.log("test");
}

$(document).ready(function(){
  depart();
  $("#gaucheBreak").click(function(){
    console.log("test");
    MinuteBreak++;
    $("#compteurBreak").text(MinuteBreak);
  });
  $("#gaucheExo").click(function(){
    console.log("test");
    MinuteExo++;
    $("#compteurExo").text(MinuteExo);
  });
  $("#droiteBreak").click(function(){
    console.log("test");
    MinuteBreak--;
    $("#compteurBreak").text(MinuteBreak);
  });
  $("#droiteExo").click(function(){
    console.log("test");
    MinuteExo--;
    $("#compteurExo").text(MinuteExo);
  });
  $("#exo").click(function(){
    console.log("testExo");
    /*if (testExo == true) {
      testExo = false;
      clearTimeOut(timeExo);
    }
    else {*/
      testExo = true;
      secondes = 60;
      MinuteExo--;
      lancementDecompteExo();
   //}
  });
  $("#break").click(function(){
    console.log("testBreak");
    secondes = 60;
    MinuteExo--;
    lancementDecompteBreak();
  });

});
