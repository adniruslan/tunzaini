/*======================================================

Project: WhatsChat - WhatsApp Chat Widget jQuery Plugin
Author: Black Theme
Released On: 4, Sep 2019
@version: 1.0

========================================================*/

$(document).ready(function(){

    //click event on a tag
    $('.wc-list').on("click",function(){
     
      var number =  $(this).attr("data-number");
      var message =  $(this).attr("data-message");
      
      //checking for device type
      if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
          // redirect link for mobile WhatsApp chat awc
          window.open('https://wa.me/'+number+'/?text='+message, '-blank');  
      }
      else{
          // redirect link for WhatsApp chat in website
          window.open('https://web.WhatsApp.com/send?phone='+number+'&text='+message, '-blank'); 
      }
    })
});

// floating button click event function
$('#wcBtn').click(function() {
   
    $('.wc-list-sm').toggleClass('scale-out');

});
