function addBoard(){ 
   for (var i = 0; i < 8; i++) {
        for (var j = 0; j < 8; j++) {
            if ((i%2==0 && j%2==0)|| (i%2!=0 && j%2!=0)){
                $("#board").append('<div class="s_kl"></div>');
            }
            else $("#board").append('<div class="t_kl"></div>');
        }
    }
}
function addDraughts(){
  $("div").filter(".t_kl").slice(0,12).append('<Omsk_0001.jpg">');
  $("div").filter(".t_kl").slice(20,32).append('<img src="Omsk_0002.jpg">');
}


unction addBoard(){ 
   for (var i = 0; i < 8; i++) {
        for (var j = 0; j < 8; j++) {
            if ((i%2==0 && j%2==0)|| (i%2!=0 && j%2!=0)){
                $("#board").append('<div class="s_kl"></div>');
            }
            else $("#board").append('<div class="t_kl"></div>');
        }
    }
}
function addDraughts(){
  $("div").filter(".t_kl").slice(0,12).append('<Omsk_0001.jpg">');
  $("div").filter(".t_kl").slice(20,32).append('<img src="Omsk_0002.jpg">');
}



  
  