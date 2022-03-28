//start btn.. when this is pressed we hide this and show the other
//elements
let startbox= document.getElementsByClassName("startgamebox")[0];

//pick your weapon
let middleFrame= document.getElementsByClassName("setMiddle")[0];
//main frame of game with btns
let mainframe= document.getElementsByClassName("mainframe")[0];
// score board
let scoreBoard= document.getElementsByClassName("scoreFrame")[0];
//loading sim
let loading= document.getElementsByClassName("loading")[0];
//weapons
let weaponsBtn= document.getElementsByClassName("weapons");

let humensScoreGui= document.getElementById("humenScore");
let computerScoreGui= document.getElementById("computerScore");
let i=0;
let isGameRunning=false;
let humenScore=0;
let computerScore=0;

startbox.onclick = function() {
    startbox.style.visibility = 'hidden';
    


    
    startLoad(i);
 
    isGameRunning=true;
    setTimeout(showGame,1000);

    console.log("clicked")
    //methodCaller()
}

function startLoad(num) {
  
        
        // console.log("loading");
        // loading.textContent="loading "+num+"%";
        // // if (i<100){
        // //     setTimeout( startLoad(i),100)
        // //     i++;
        // //    }
}


function showGame() {
   
    mainframe.style.visibility="visible";
    middleFrame.style.visibility = 'visible';
    scoreBoard.style.visibility="visible";
}

function methodCaller() {
   
    
    
}




function sleep(seconds) 
{
  var e = new Date().getTime() + (seconds * 1000);
  while (new Date().getTime() <= e) {}
}



function getWinner(humenGuess,compGuess) {
   let picks1= document.getElementById("picks1");
   let picks2= document.getElementById("picks2");


    console.log(humenGuess+" "+ compGuess)
    picks1.textContent="Humen picked "+humenGuess;
    picks2.textContent="The Bot Picked "+compGuess;

   
   if(humenGuess=="Rock" &&compGuess=="Scissors"){
       setScore("humen")
   }else if(humenGuess=="Rock" &&compGuess=="Paper"){
        setScore("computer")
   }else if(humenGuess=="Rock" &&compGuess=="Rock"){
    setScore("tie")
} else if(humenGuess=="Paper" &&compGuess=="Scissors"){
        setScore("computer")
    }else if(humenGuess=="Paper" &&compGuess=="Paper"){
        setScore("tie")
    }else if(humenGuess=="Rock" &&compGuess=="Rock"){
        setScore("humen")
    } else if(humenGuess=="Scissors" &&compGuess=="Scissors"){
        setScore("tie")
    }else if(humenGuess=="Scissors" &&compGuess=="Paper"){
        setScore("humen")
    }else if(humenGuess=="Scissors" &&compGuess=="Rock"){
        setScore("computer")
    }




  
}


function computerGuess() {
    let guess= getGuess(1,3);

    if(guess===0){
        guess++;
    }

    console.log(guess);
    switch (guess) {
        case 1:
          return "Paper";
          break;
        case 2:
            return "Scissors";
        case 3:
            return "Rock"
          break;
  
      }
      if (guess===0){
          console.log("caught zero")
        computerGuess();
      }
}


function getGuess(min, max) {
    return Math.floor(Math.random() * 4);;
  }

// send who you want to increase, humen, or computer
  function setScore(whoToinCrease) {
    let winnerText= document.getElementById("winnerText");
    
    if (whoToinCrease==="humen"){
        humensScoreGui.textContent=++humenScore;  
        winnerText.textContent="Humen wins";
      
      }else if(whoToinCrease==="computer"){
        computerScoreGui.textContent=++computerScore;
        winnerText.textContent="Computer wins";
      }else if(whoToinCrease==="tie"){
        winnerText.textContent="No one wins";
      }
  }



//   weaponsBtn.onclick=function() {
//       console.log("weaponsBtn")
//   }


  document.addEventListener('click', function(e){
    
       
        let guess=  e.target.textContent
    switch (guess) {
        case "Paper":
            getWinner("Paper",computerGuess())
          return "Paper";
          break;
        case "Scissors":
            getWinner("Scissors",computerGuess())
            return "Scissors";
        case "Rock":
            getWinner("Rock",computerGuess())
            return "Rock"
          break;
        default:
         console.log("not a button")
      }
     
 
  })