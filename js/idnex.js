function calendar(){
    let NowDay = new Date()
    console.log(NowDay);
    let WinterBegin =new Date(2022,11,1);
    console.log(WinterBegin);
    console.log(WinterBegin-NowDay)
    
    let Allseconds = (WinterBegin-NowDay) / 1000;
    let days = Math.floor(Allseconds / 3600 / 24);
    let hours = Math.floor(Allseconds / 3600) % 24 ;
    let minutes = Math.floor(Allseconds / 60)  % 60;
    let seconds = Math.floor(Allseconds)%60
    console.log(days,hours,minutes,seconds);

    document.getElementById('days').innerHTML = days   
    document.getElementById('hours').innerHTML = hours
    document.getElementById('minutes').innerHTML =minutes
    document.getElementById('seconds').innerHTML =seconds
}
calendar();

setInterval(calendar,1000)