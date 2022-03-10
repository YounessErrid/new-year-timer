const dd  =   document.getElementById("days");
const hh =   document.getElementById("hours");
const mm  =   document.getElementById("mins");
const ss   =   document.getElementById("seconds");
const yy = new Date();
document.getElementById("year").innerHTML = yy.getFullYear();


function countdown(){
    const curDate = new Date();
    const newYearsDate = new Date("1 jan " + (curDate.getFullYear() +1) );
    const Tseconds = (newYearsDate - curDate) / 1000;
    
    const days = Math.floor(Tseconds / 86400);
    const hours = Math.floor(Tseconds / 3600) % 24;
    const mins = Math.floor(Tseconds / 60) % 60;
    const seconds = Math.floor(Tseconds) % 60;
    
    dd.innerHTML = days;
    hh.innerHTML = timeFormat(hours);
    mm.innerHTML = timeFormat(mins);
    ss.innerHTML = timeFormat(seconds);
}
function timeFormat(time){
    return time < 10 ? '0'+'${time}' : time ;
}
countdown();
setInterval(countdown , 1000);
