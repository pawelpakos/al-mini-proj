  let biblioteka = ["Dzwieki/Applause1.ogg", "Dzwieki/Barking.mp3", "Dzwieki/beam7.wav", "Dzwieki/burst.wav", "Dzwieki/Break in.mp3", "Dzwieki/Coin.ogg", "Dzwieki/DoorClose1.wav", "Dzwieki/Hammer.ogg", "Dzwieki/Hurt1.mp3"];
  let wszystkie = document.querySelectorAll(".dzk");
  for(let i=0; i<wszystkie.length; i++){
      wszystkie[i].addEventListener("click", function(){
          let dzwiek = new Audio(biblioteka[i]);
          dzwiek.play();
      }, false);
  }