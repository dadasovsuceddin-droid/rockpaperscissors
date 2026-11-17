function comMove(){
    let a=Math.random();
    if(a<1/3){
        return 'rock';
    }else if(a<2/3){
        return 'paper';
    }else{
        return 'scissors';
    }
}
function result(computerMove,playerMove){
    if(computerMove===playerMove){
        return 'tie';
    }else if(computerMove==='rock'){
        if(playerMove==='paper'){
            return 'You win';
        }else{
            return 'Computer win';
        }
    }else if(computerMove==='paper'){
        if(playerMove==='scissors'){
            return 'You win';
        }else{
            return 'Computer win';
        }
    }else{
        if(playerMove==='rock'){
            return 'You win';
        }else{
            return 'Computer win';
        }
    }
}
function updateScore(text){
    score=JSON.parse(localStorage.getItem('score'));
    if(text==='You win'){
        score.Wins+=1;
    }else if(text==='Computer win'){
        score.losses+=1;
    }else{
        score.ties+=1;
    }
    localStorage.setItem('score',JSON.stringify(score));
}
function show_move(computerMove,playerMove){
    document.querySelector('.moves').innerHTML=`You <img class="you_image" src="rpsLogo/${playerMove}.jpg"> <img class="com_image" src="rpsLogo/${computerMove}.jpg"> Computer`;
}