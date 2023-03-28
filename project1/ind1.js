function display(){
    var xyz =new Date();
    var hrs = xyz.getHours();
    var min = xyz.getMinutes();
    var sec = xyz.getSeconds();
    var sesion = document.getElementById('session');

     if(hrs>12){
         sess.innerHTML='PM';
     }else{
        sess.innerHTML='AM';
     }

     if(hrs>=12){
        hrs= hrs-12;
     }
     document.getElementById('hours').innerHTML=hrs;
    document.getElementById('minutes').innerHTML=min;
    document.getElementById('Seconds').innerHTML=sec;
}
setInterval(display,10);
