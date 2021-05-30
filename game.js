// DOM SELECT
const again = document.querySelectorAll(".reset");
const secretnumber = document.querySelector(".SecretNumber");
const massage = document.querySelector(".guessMassage");
let number = document.querySelector(".guessNumber");
const check = document.querySelector(".check");
const score = document.querySelector(".score");
const hscore = document.querySelector(".highScore");
let cnumber = document.querySelector(".checkNumber");
const container = document.querySelector(".container");
const hdder = document.querySelector(".hdder");
let psc = document.querySelector("#sc");
let phc = document.querySelector("#hc");
let sugess = document.querySelector(".sugess");
let crsn = document.querySelector(".SSecretNumber")

// start logic
let Nscore = 6;
let Hscore = 0;
let snumber = Math.trunc(Math.random() * 20) + 1;


function play() {
   console.log(Number(number.value), typeof Number(number.value));
   console.log(snumber, typeof snumber);
   score.textContent = Nscore;
   if (Number(!number.value)) {
      massage.innerHTML = "No number added !"
      massage.style.color = "red"
   }
   else if (Number(number.value) === snumber) {
      massage.innerHTML = number.value + " is Correct Number."
      secretnumber.innerHTML = snumber
      massage.style.color = "rgb(15, 255, 47)"


      secretnumber.style.backgroundColor = "rgb(15, 255, 47)";
      secretnumber.style.color = "white";
      if (Nscore > Hscore) {
         Hscore = Nscore;
         hscore.textContent = Hscore;
      }
      function gret() {
         hdder.classList.add("blur")
         container.classList.remove("hidden")
         sugess.innerHTML = "You Win The Game.";
         sugess.style.color = "rgb(9, 184, 9)";
         psc.innerHTML = "Score: " + Nscore;
         phc.innerHTML = "Highscore: " + Hscore;
         crsn.innerHTML = "Secret Number: " + snumber;

      }
      setTimeout(gret, 1500);

   }
   else if (Number(number.value) > 20 || Number(number.value) === 0) {
      massage.innerHTML = "Incorrect Number!"
      massage.style.color = "red";
      hdder.classList.add("blur")
      container.classList.remove("hidden")
      sugess.innerHTML = "Incorrect Number !";
      sugess.style.color = "red";
      console.log(sugess);
      console.log(snumber);

   }
   else if (Number(number.value) - 1 === snumber || Number(number.value) - 2 === snumber || Number(number.value) - 3 === snumber) {
      if (Nscore > 1) {
         Nscore--;
         massage.innerHTML = "''" + number.value + "''" + " Very close from Guessnumber"
         score.textContent = Nscore;
         secretnumber.style.color = "rgb(156, 6, 156)";


         console.log(Nscore);
      }
      else {
         massage.innerHTML = "You lost the Game!"
         hdder.classList.add("blur")
         container.classList.remove("hidden")
         psc.innerHTML = "Score: 0"
         phc.innerHTML = "Highscore: " + Hscore;
      }
   }

   else if (Number(number.value) > snumber & Number(number.value) <= 20) {

      if (Nscore > 1) {
         Nscore--;
         massage.innerHTML = "''" + number.value + "''" + " is Too High"
         score.textContent = Nscore;
         secretnumber.style.color = "rgb(156, 6, 156)";


         console.log(Nscore);
      }
      else {
         massage.innerHTML = "You lost the Game!"
         hdder.classList.add("blur")
         container.classList.remove("hidden")
         psc.innerHTML = "Score: 0"
         phc.innerHTML = "Highscore: " + Hscore;
      }
   }

   else if (Number(number.value) + 1 === snumber || Number(number.value) + 2 === snumber || Number(number.value) + 3 === snumber) {
      if (Nscore > 1) {
         Nscore--;
         massage.innerHTML = "''" + number.value + "''" + " Very close from Guessnumber"
         score.textContent = Nscore;
         massage.style.color = "rgb(156, 6, 156)";

         console.log(Nscore);
      } else {
         massage.innerHTML = "You lost the Game!"
         hdder.classList.add("blur")
         container.classList.remove("hidden")
         psc.innerHTML = "Score: 0 "
         phc.innerHTML = "Highscore: " + Hscore;

      }
   }

   else if (Number(number.value) < snumber & Number(number.value) > 0) {
      if (Nscore > 1) {
         Nscore--;
         massage.innerHTML = "''" + number.value + "''" + " is Too Low"
         score.textContent = Nscore;
         massage.style.color = "rgb(156, 6, 156)";

         console.log(Nscore);
      } else {
         massage.innerHTML = "You lost the Game!"
         hdder.classList.add("blur")
         container.classList.remove("hidden")
         psc.innerHTML = "Score: 0"
         phc.innerHTML = "Highscore: " + Hscore;
      }
   }


   else {
      massage.innerHTML = "Incorrect Number!"
      massage.style.color = "red";
      hdder.classList.add("blur")
      container.classList.remove("hidden")


   }
   number.value = "";
};

check.addEventListener('click', play);

number.addEventListener("keyup", function (event) {
   let key = event.key
   console.log(key);
   if (key === "Enter") {
      play();
   }

   
});



for (let i = 0; i < again.length; i++) {
   console.log(again[i]);
   again[i].addEventListener('click', function () {
      Nscore = 6;
      snumber = Math.trunc(Math.random() * 20) + 1;
      container.classList.add("hidden")
      hdder.classList.remove("blur")
      secretnumber.innerHTML = "?"
      number.value = " ";
      secretnumber.style.color = "rgb(156, 6, 156)";
      massage.innerHTML = "Start Guessing....."
      massage.style.color = "rgb(156, 6, 156)"
      score.textContent = Nscore;
      secretnumber.style.backgroundColor = "white";
      console.log(score.textContent);



   })
};
