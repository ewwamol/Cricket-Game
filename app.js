let resultMsg;
    let computerChoiseMsg ;
    let computerChoise;
    function genComChoi(){
        
        let randomNum = Math.random() * 3;
        if (randomNum >0  && randomNum <= 1 ) {
            return 'bat';
        } else if( randomNum>1 && randomNum<=2){
            return 'ball';
        } else{
            return 'Stump';
        }
    }

      let scoreStr = localStorage.getItem('score');
      let score;
      resetScore(scoreStr);
      
      function resetScore(scoreStr){
      score= scoreStr ? JSON.parse(scoreStr) :{
        win:0,
        lost:0,
        tie: 0,
        };
    score.displayScrore= function(){ 
        return `Score: won: ${score.win} Lost : ${ score.lost} Tie  : ${ score.tie}`};
        showResut();
    }

    function resultdis(userMove,computerMove){
    
    if(userMove==='bat'){
        if(computerMove === 'bat'){
            score.tie++;
            return 'its tie';
        }else if(computerMove === 'ball'){  
            score.win++;
            return'User Won';
        }else if(computerMove === 'Stump'){
            score.lost++;
            return`Computer has won`;      
        }  
    }
    if(userMove==='ball'){
        if( computerMove === 'ball'){
            score.tie++;
            return 'its tie';      
        }else if(computerMove === 'bat'){  
            score.lost++;
            return'Computer has won';
        }else if(computerMove === 'Stump'){
            score.win++;
            return'User won.';
        }  
    }
    else{
        if( computerMove === 'bat'){
            score.win++;
          return'User Won';
        }else if(computerMove === 'ball'){
            score.lost++;  
          return `Computer has won`;      
        }else if(computerMove === 'Stump'){
         score.tie++;
          return `it's tie`;
        }  
    }
}
    
    function showResut(userMove,computerMove,result){
       
     localStorage.setItem('score',JSON.stringify(score));  
     document.querySelector('#usermove').innerText=
     userMove!==undefined?`You Have Chosen ${userMove}`:'';

     document.querySelector('#computer-move').innerText=computerMove ? `Computer has Chosen ${computerMove}`:'';
     
     document.querySelector('#result').innerText=result||'';

     document.querySelector('#score').innerText=`${score.displayScrore()}`;
     

    console.log(score)

    }