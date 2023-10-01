const countDate = new Date ("jul 21 2027 12:32:14").getTime();

var x = setInterval(function(){
    let now = new Date().getTime();

let distance = countDate - now;

var d = Math.floor(distance / (1000 * 60 * 60 * 24));
var hrs = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var min = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var sec = Math.floor((distance % (1000 * 60 * 60)) / 1000);

document.getElementById('Timer').innerHTML = d + "d" + hrs +"h" + min + "m" + sec + "s";


if( distance < 0){
    clearInterval(x);
    document.getElementById('Timer').innerHTML="Time's Up";
}

})