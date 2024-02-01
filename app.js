const choices = document.querySelectorAll(".choice")
const msg = document.querySelector('#msg')
const user = document.querySelector('#you')
const comp = document.querySelector('#comp')
let userscore =0;
let compscore =0;

const arr = ["Rock","Paper" , "Scissors"]


const showWinner = (userwin,userchoice,compchoice) =>{
    if(userwin){
        console.log("user wins the game");
        userscore++;
        msg.innerHTML = `USER WINS THE GAME!  your ${userchoice} beats the computer's ${compchoice}`
        msg.style.backgroundColor ="Green"
        user.innerHTML = userscore;

    }else{
        console.log("computer wins the game");
        compscore++;
        msg.innerHTML = `COMPUTER WINS THE GAME! Computer's ${compchoice} beats your ${userchoice}`
        msg.style.backgroundColor ="Red"
        comp.innerHTML= compscore;
    }


}

const drawgame = ()=>{
    msg.innerHTML = "IT'S A DRAW PLAY AGAIN"
}

const playgame = (userchoice) => {
    console.log("userchoice is ", userchoice);
    //genereating computer choice 
    let num = Math.floor(Math.random()*3);
    const compchoice = arr[num];
    console.log("computer choice is ",compchoice);

    if(userchoice === compchoice){
        drawgame();
        console.log("draw game");
    }else{
        let userwin = true;
        if(userchoice ==="Rock"){
            userwin = compchoice==="Paper" ?false : true;
        }
        else if(userchoice ==="Paper"){
            userwin = compchoice==="Scissors" ?false : true;
        }
        else {
            userwin = compchoice==="Rock" ?false : true;
        }

        showWinner(userwin,userchoice,compchoice);

    }

}


choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice = choice.getAttribute("id")
        // console.log(userchoice);
        playgame(userchoice)
    })
})