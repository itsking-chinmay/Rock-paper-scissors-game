let userScore=0;
let computerScore=0;
const userScore_span = document.getElementById("user-score") ;
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.getElementById(".score-board") ;
const result_p= document.querySelector(".result > p"); 
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

//// We did this bcoz of easy  convience 

function getComputerChoice(){
    const choices = ['r','p','s'];
    const randomNumber= Math.floor(Math.random() * 3); // The random function will not go beyond the three.
    return choices[randomNumber];  /// This will give the random r,s,p comparing with the arry choices.
}

function convertToWord(letter){
    if(letter=='r') return "rock";
    if(letter=='p') return "paper";
    return "scissors";

}


function win(user, computer){
    userScore++;
    userScore_span.innerHTML= userScore; // Here we are chnaging the values of the score board with the reference of ids in html.
    computerScore_span.innerHTML= computerScore;
    const smallUserWord= "user".fontsize(3).sub();
    const smallCompWord= "comp".fontsize(3).sub();
    result_p.innerHTML= convertToWord(user)+ smallUserWord + " beats " + convertToWord(computer) +smallCompWord + " You win ! "
  //  document.getElementById(userChoice).classList.add('green-glow'); // Here we used the class list it gives us the list of items in a array and then we used the .add it is a used to add the class or styles which we added in a css.
    //console.log(user);
    //console.log(computer);
}
function lose(user,computer){
    computerScore++;
    userScore_span.innerHTML= userScore;
    computerScore_span.innerHTML= computerScore;
    const smallUserWord= "user".fontsize(3).sub();
    const smallCompWord= "comp".fontsize(3).sub();
    result_p.innerHTML= convertToWord(user)+ smallUserWord + 
    " losses with " + convertToWord(computer)+ smallCompWord + " You lose"
    // console.log(user);
    //console.log(computer);
}
function draw(user,computer){
    userScore_span.innerHTML= userScore;
    computerScore_span.innerHTML= computerScore;
    console.log(user);
    console.log(computer);
    result_p.innerHTML= "Its a draw !"
}
function game(userChoice){
   const ComputerChoice = getComputerChoice();
   switch(userChoice +  ComputerChoice){  // The + sign indicates that 1 and 2 
   case "rs":
   case "pr":
   case "sp":
       win(userChoice,ComputerChoice);  // Here we pass the argument bcoz to show the result like you lose or win in a html
    break;
    case "rp":
    case "ps":
    case "sr":
        lose(userChoice,ComputerChoice);
    break;
    case "rr":
    case "pp":
    case "ss":
        //console.log("Its a Draw"); //draw.
        draw(userChoice,ComputerChoice);
    break;
  }
}



function main()
{
    rock_div.addEventListener('click',function() {
    game('r');
    })

    paper_div.addEventListener('click',function() {
    game('p');
    })

    scissors_div.addEventListener('click',function() {
    game('s');
    })
    
}

main();