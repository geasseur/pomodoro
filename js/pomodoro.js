var sauvMinExo = 0;
var sauvMinBreak = 0;
var MinuteExo = 0;
var MinuteBreak = 0;
var secondes = 60;

function lancementDecompteExo(){
  if (MinuteBreak < 0 || MinuteExo < 0) {
    alert("erreur");
    return "";
  }
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
  if (MinuteBreak < 0 || MinuteExo < 0) {
      alert("erreur");
      return "";
  }
  $("#secondesBreak").text(secondes);
  $("#compteurBreak").text(MinuteBreak);
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
      $("#compteurBreak").text(MinuteBreak);
      lancementDecompteBreak();
    }
    else if (MinuteBreak < 0) {
      transition();
    }
    else{
      console.log(secondes);
      $("#secondesBreak").text(secondes);
      $("#compteurBreak").text(MinuteBreak);
      lancementDecompteBreak();
    }
}

//Fait la transition entre les deux compteurs, en remettant celui qui vient de ce terminé à son point de départ avant de lancer le suivant.
function transition(){
  if (MinuteBreak === 0 && secondes === 0) {
    secondes = 60;
    MinuteBreak = sauvMinBreak;
    $("#compteurBreak").text(sauvMinBreak);
    $("secondesBreak").text("00");
    MinuteExo--;
    lancementDecompteExo();
  }
  else if (MinuteExo === 0 && secondes === 0) {
    secondes = 60;
    $("#compteurExo").text(sauvMinExo);
    $("secondesExo").text("00");
    MinuteExo = sauvMinExo;
    MinuteBreak--;
    lancementDecompteBreak();
  }
}

function depart(){
  $("#compteurBreak").text(sauvMinBreak);
  $("#compteurExo").text(sauvMinExo);
  console.log("test");
}

$(document).ready(function(){
  depart();
  $("#gaucheBreak").click(function(){
    console.log("test");
    sauvMinBreak++;
    MinuteBreak++;
    console.log(MinuteBreak)
    $("#compteurBreak").text(MinuteBreak);
  });
  $("#gaucheExo").click(function(){
    console.log("test");
    sauvMinExo++;
    MinuteExo++;
    $("#compteurExo").text(MinuteExo);
  });
  $("#droiteBreak").click(function(){
    console.log("test");
    sauvMinBreak--;
    MinuteBreak--;
    $("#compteurBreak").text(MinuteBreak);
  });
  $("#droiteExo").click(function(){
    console.log("test");
    sauvMinExo--;
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
      secondes = 60;
      MinuteExo--;
      lancementDecompteExo();
   //}
  });
  $("#break").click(function(){
    console.log("testBreak");
    secondes = 60;
    MinuteBreak--;
    lancementDecompteBreak();
  });

});
