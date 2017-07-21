var MinuteExo = 20;
var MinuteBreak = 5;
var secondes = 60;

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
    lancementDecompteExo();
  });
  $("#break").click(function(){
    lancementDecompteBreak();
  });

});

function lancementDecompteExo(){
  console.log("test");
  $("#secondesExo").text(secondes);
  setInterval(decompteExo,1000);
}

function decompteExo(){
  while(MinuteExo != 0){
    secondes--;
    $("#secondesExo").text(secondes);
    if (secondes === 0) {
      secondes = 60;
      MinuteExo--;
      $("#compteurExo").text(MinuteExo);
    }
  }
  if (MinuteExo === 0) {
    lancementDecompteBreak();
  }
}

function lancementDecompteBreak(){
  console.log("test");
  $("#secondesExo").text(secondes);
  setInterval(decompteBreak,1000);
}

function decompteBreak(){
  while(MinuteBreak != 0){
    secondes--;
    $("#secondesExo").text(secondes);
    if (secondes === 0) {
      secondes = 60;
      MinuteBreak--;
      $("#compteurBreak").text(MinuteBreak);
    }
  }
  lancementDecompteBreak();
}

function depart(){
  $("#compteurBreak").text(MinuteBreak);
  $("#compteurExo").text(MinuteExo);
  console.log("test");
}
