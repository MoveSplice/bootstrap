$(function(){
   "use strict";
   var qsf = function(){
      var timer = null;
       var i = 0;
      timer = setInterval(function(){
          var index = $(this).index;

          i++;
         if(i>3){
             i=0;
         }
          $("#carousel li").eq(index).show().siblings("li").hide();
          console.log(i)
      },2000);
      // $("#carousel li").hover(function(){
      //    clearInterval(timer)
      // })
   };
    qsf();
});