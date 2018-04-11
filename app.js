var forGame=document.getElementById('first');
var forWicket=document.getElementById('wickt');
var forScore=document.getElementById('runs');
var forBalls=document.getElementById('bals');
var forOver=document.getElementById('over');
var forCalc=document.getElementById('first');
var forCalc2=document.getElementById('italic');
var forCalc3=document.getElementById('scnd');

var wickets=0;
var score=0;
//var over=0;
var balls=0;
function forRandom(){
    // document.getElementById('btn_2').disabled=true;
    var a=Math.floor(Math.random()*7);
    if(a===0){
       wickets++;
       forCalc3.innerHTML=wickets;
    }else{
        score+=a;
        forCalc2.innerHTML=score;
    }
    //forGame.innerHTML=a;
    console.log(a);
    
    balls++;
    forBalls.innerHTML=balls;
   if(balls===6){
      forOver.innerHTML='First Over Complete Team A';
   }else if(balls ===12){
       forOver.innerHTML='Second Over Complete Team A';
             
    document.getElementById('total_Score').innerHTML=score;
    document.getElementById('total_Wickts').innerHTML=wickets;
    document.getElementById('head').innerHTML='Team B';
    wickets=0;
    score=0;
    forWicket.innerHTML=wickets;
    forScore.innerHTML=score;
      
   }if(balls ===24){
    document.getElementById('btn_1').disabled=true;
    document.getElementById('team_B1').innerHTML=score;
    document.getElementById('team_B2').innerHTML=wickets;
   }
    if(balls === 18){
        forOver.innerHTML='First Over Complete Team B';
    }
    else if(balls === 24){
        forOver.innerHTML='Second Over Complete Team B';
    }
    

}
// var frstTeam1=document.getElementById('total_Score').innerHTML=score;
// var scndTeam=document.getElementById('team_B1').innerHTML=score;
function forResult(){
    console.log('Hello World');
    
}
// var forRandom=(Math.floor(Math.random()*2)+1);
// console.log(forRandom);
var forToss=document.getElementById('result');
var forChoice=document.getElementById('choice');
var forChoiceBoll=document.getElementById('choiceBol');
function startToss(){
    var a=document.getElementById('states');
    console.log(a.selectedIndex);
    //if(a.selectedIndex === 0){
        //alert('Please select any option');
    //}
    var forRandom=(Math.floor(Math.random()*2)+1);
      if(a.selectedIndex === forRandom){
         //console.log('won toss');
         forToss.innerHTML='You Won The Toss';
         forChoice.innerHTML='Bat First';
         forChoiceBoll.innerHTML='Boll First';

     }
     if(a.selectedIndex !== forRandom){
         //console.log('You loss toss');
         forToss.innerHTML='You Loss The Toss';
     }

}