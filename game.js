let userscore="0";
let compscore="0";

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userscorepara=document.querySelector("#user_score")
const compscorepara=document.querySelector("#comp_score")
const genCompchoice = ()=>{
    const option=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return option[randIdx];
}
const draw=()=>{
    
    msg.innerText="the game is draw ! play again"
     msg.style.backgroundColor="#081b31";
}
const showwinner=(userWin,userchoice,compChoice)=>{
    if(userWin){

        userscore++;
        userscorepara.innerText=userscore;
     
        msg.innerText=`you win ! your ${userchoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else{

           compscore++;
        compscorepara.innerText=compscore;
      
        msg.innerText=`you loose ! ${compChoice} beats your ${userchoice}`;
        msg.style.backgroundColor="red";
    }

}
const playgame =(userchoice) =>{

    console.log("the user choice=",userchoice);

    const compChoice=genCompchoice();
    console.log("comp choice=",compChoice);
    if(userchoice===compChoice){
        draw();

    }
    else{
        let userWin=true;
        if(userchoice==="rock"){
        userWin=compChoice==="paper"?false:true;

    }else if(userchoice==="paper"){
        userWin=compChoice==="scissors"?false:true;
    }
    else{
        userWin=compChoice==="rock"?false:true;
    }
    showwinner(userWin ,userchoice,compChoice);
}
}

choices.forEach((choice) => {
    choice.addEventListener("click",() => {
        const userchoice=choice.getAttribute("id");
       
        playgame(userchoice);




    });
});