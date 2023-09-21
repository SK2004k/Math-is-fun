var h=0;
function nextturn(){
var s = document.getElementById("question");
var o1 = Math.floor(Math.random() * 100);
var o2 = Math.floor(Math.random() * 100);
var operatorarray = ["+","-","*","/"];
var operator = operatorarray[Math.floor(Math.random() *4 )];

s.innerHTML = o1 + operator + o2;

var result = eval(o1 + operator + o2).toFixed(1);
h = Math.floor(Math.random() * 4) + 1;

var option = document.getElementById("op" + h);
option.innerHTML = result;
for(var i=1;i<=4;i++)
{
    if(i!=h)
    {
        var optiont = document.getElementById("op" + i);
        var t  = Math.floor(Math.random() * 100);
        var ot = operatorarray[Math.floor(Math.random() *4 )];
        var a = eval(result + ot + t).toFixed(1);
      optiont.innerHTML = a;
    }
}
}
var timer = 5;
var min = 60;
function runtime(){
    var timeint = setInterval(function(){
      if(timer>=0){
              if(min>0){
               min--;
               document.querySelector("#timeval").textContent="0" + timer + ":" + min;
              }
              else
              {
                if(timer>0)
                {
                    timer--;
                    min=60;
                    document.querySelector("#timeval").textContent="0" + timer + ":" + min;
                }
            else
                 {
                    clearInterval(timeint);
        document.querySelector(".pbody").innerHTML=`<h3 style="Color : blue; font-size: 40px">Game Over<h3>`;
              }
            }
        }
    },1000);
}
var score =0;
var life=3;
function increasescore(){
    score += 10;
    document.querySelector("#scoreval").textContent=score;
  }

  function decreasescore(){
    score -= 5;
    document.querySelector("#scoreval").textContent=score;
     document.getElementById("h" + life).style.color="#000000";
     life--;
    if(life<=0)
    {
        document.querySelector(".pbody").innerHTML=`<h3 style="Color : blue; font-size: 40px">Game Over<h3>`;
        
    }
  }
  document.querySelector("#op1").addEventListener('click',() => {

    if(h==1)
    {
        increasescore();
        nextturn();
    }
    else
    {
        decreasescore();
    }
})
document.querySelector("#op2").addEventListener('click',() => {
    if(h==2)
    {
        increasescore();
        nextturn();
    }
    else
    {
        decreasescore();
    }
})
document.querySelector("#op3").addEventListener('click',() => {

    if(h==3)
    {
        increasescore();
        nextturn();
    }
    else
    {
        decreasescore();
    }
})
document.querySelector("#op4").addEventListener('click',() => {

    if(h==4)
    {
        increasescore();
        nextturn();
    }
    else
    {
        decreasescore();
    }
})
runtime();
nextturn();
