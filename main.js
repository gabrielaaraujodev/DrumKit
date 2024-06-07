let btnA = document.getElementById("btnA");
let btnS = document.getElementById("btnS");
let btnD = document.getElementById("btnD");
let btnF = document.getElementById("btnF");
let btnG = document.getElementById("btnG");
let btnH = document.getElementById("btnH");
let btnJ = document.getElementById("btnJ");
let btnK = document.getElementById("btnK");
let btnL = document.getElementById("btnL");

document.addEventListener("keydown",
  (event) => {
    if(event.key === "a") {
      let playA = document.getElementById("playA");
      btnA.classList.add("efects");
      playA.play();
    } else {
      btnA.classList.remove("efects");
    }

    if(event.key === "s") {
      let playS = document.getElementById("playS");
      btnS.classList.add("efects");
      playS.play();
    } else {
      btnS.classList.remove("efects");
    }

    if(event.key === "d") {
      let playD = document.getElementById("playD");
      btnD.classList.add("efects");
      playD.play();
    } else {
      btnD.classList.remove("efects");
    }

    if(event.key === "f") {
      let playF = document.getElementById("playF");
      btnF.classList.add("efects");
      playF.play();
    } else {
      btnF.classList.remove("efects");
    }

    if(event.key === "g") {
      let playG = document.getElementById("playG");
      btnG.classList.add("efects");
      playG.play();
    } else {
      btnG.classList.remove("efects");
    }

    if(event.key === "h") {
      let playH = document.getElementById("playH");
      btnH.classList.add("efects");
      playH.play();
    } else {
      btnH.classList.remove("efects");
    }

    if(event.key === "j") {
      let playJ = document.getElementById("playJ");
      btnJ.classList.add("efects");
      playJ.play();
    } else {
      btnJ.classList.remove("efects");
    }

    if(event.key === "k") {
      let playK = document.getElementById("playK");
      btnK.classList.add("efects");
      playK.play();
    } else {
      btnK.classList.remove("efects");
    }

    if(event.key === "l") {
      let playL = document.getElementById("playL");
      btnL.classList.add("efects");
      playL.play();
    } else {
      btnL.classList.remove("efects");
    }

  }
);
