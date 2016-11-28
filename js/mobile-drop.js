$(function(){

   $(".icon-mobile").click(function(){
      $(".menu-mobile").fadeToggle('fast');
   });


   $(".btn-cadastra").click(function(){
      $(".teste-2").addClass('opc-login');
      $(".teste").removeClass('opc-cadastre');

   });
   $(".btn-entrar").click(function(){
      $(".teste").addClass('opc-cadastre');
      $(".teste-2").removeClass('opc-login');
   });

   $('.btn-cadastra').on('click', function(){

   	$(".teste-2").addClass('opc-login');
   	$(".teste").removeClass('opc-cadastre');
   	
   });
   $(".btn-cancel-1").click(function(){
      $(".modal-entrar").fadeOut('fast');
   });

   $(".btn-cancel-2").click(function(){
      $(".modal-cadastro").fadeOut('fast');
   });

   $('.icon-video').bind('click', function(){
      $('.liga-film').get(0).play();
      $('.cover-video').fadeOut('fast');
   });




});
