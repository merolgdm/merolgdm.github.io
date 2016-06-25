$(document).ready(function(){
	"use strict";
	
	$('.navbar-collapse a').on('click',function() {
	$('.navbar-collapse').removeClass('in');
	});

var height = $(window).height();
$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  if (scroll > height) {
      jQuery('.navbar-default').addClass('navbar-fixed-top');
  } else {
      jQuery('.navbar-default').removeClass('navbar-fixed-top');
}
});
	
/*   $('section#work a').on('click',function() {
    $('#modal img').attr('src', $(this).attr('data-image-url') );
    });*/

	
	$('section#intro  .anima1').waypoint(function(){
      console.log(this);
        $(this.element).addClass('animated fadeInDownBig');
    },{
        offset:'60%'
    });
	
		$('section#intro  .anima2').waypoint(function(){
      console.log(this);
        $(this.element).addClass('animated fadeInRight');
    },{
        offset:'60%'
    });
	
		$('section#intro  .anima1').waypoint(function(){
      console.log(this);
        $(this.element).addClass('animated fadeInDownBig');
    },{
        offset:'60%'
    });
	
		$('section#acerca_de  .anima3').waypoint(function(){
      console.log(this);
        $(this.element).addClass('animated fadeInDown');
    },{
        offset:'60%'
    });
	
		$('section#acerca_de  .anima2').waypoint(function(){
      console.log(this);
        $(this.element).addClass('animated fadeInRight');
    },{
        offset:'60%'
    });
	
	$('section#servicios  .anima1').waypoint(function(){
      console.log(this);
        $(this.element).addClass('animated fadeInDownBig');
    },{
        offset:'60%'
    });
	
	$('section#servicios  .anima2').waypoint(function(){
      console.log(this);
        $(this.element).addClass('animated fadeInDownBig');
    },{
        offset:'100%'
    });
	
		$('section#servicios  .anima3').waypoint(function(){
      console.log(this);
        $(this.element).addClass('animated fadeInDownBig');
    },{
        offset:'60%'
    });
	
	$('section#work  .anima1').waypoint(function(){
      console.log(this);
        $(this.element).addClass('animated bounceInDown');
    },{
        offset:'60%'
    });
	
		$('section#work  .anima2').waypoint(function(){
      console.log(this);
        $(this.element).addClass('animated bounceInUp');
    },{
        offset:'60%'
    });
	
	
$('section#contacto  .anima1').waypoint(function(){
      console.log(this);
        $(this.element).addClass('animated fadeInRight');
    },{
        offset:'60%'
    });

$('section#contacto  .anima2').waypoint(function(){
      console.log(this);
        $(this.element).addClass('animated fadeInRight');
    },{
        offset:'60%'
    });

$('section#contacto  .anima3').waypoint(function(){
      console.log(this);
        $(this.element).addClass('animated fadeInRight');
    },{
        offset:'60%'
    });
	
$('section#contacto  .anima4').waypoint(function(){
      console.log(this);
        $(this.element).addClass('animated fadeInRight');
    },{
        offset:'60%'
    });
	
$('section#contacto  .anima5').waypoint(function(){
      console.log(this);
        $(this.element).addClass('animated fadeInRight');
    },{
        offset:'60%'
    });
	
	
	$('#soporteForm').bootstrapValidator({
	message:"Esto no es válido",
	feedbackIcons:{
		valid: 'glyphicon glyphicon-ok',
		invalid:'glyphicon glyphicon-remove',
		validating:'glyphicon glyphicon-refresh'
	},
	fields:{
		nombre:{
			validators:{
				notEmpty:{
					message: "Este es un campo obligatorio"
					},
				}
		
		},
		email:{
			validators:{
				notEmpty:{
					message: "Este es un campo obligatorio"
					},
					emailAddress:{
						message: "Eso no parece un correo electrónico"
						}
				}
		},
		mensaje:{
			validators:{
				notEmpty:{
					message: "El mensaje no puede ir vacio. Quien manda un mensaje vacio?"
					}
				}
		
		}
	}

}).on('success.form.bv', function(e){
	e.preventDefault();
	var $form =$(e.target);
	var bv =$form.data('bootstrapValidator');
	
	$.post($form.attr('action'), $form.serialize(), function(result){
		$('#correcto').fadeIn();
		console.log(result);
	},'json');
});
	
	
	
	
     
});

		



// inicio de smooth scroll
smoothScroll.init({
    speed: 500, // Integer. How fast to complete the scroll in milliseconds
    easing: 'easeInOutQuad', // Easing pattern to use
    updateURL: false, // Boolean. Whether or not to update the URL with the anchor hash on scroll
    offset: 0, // Integer. How far to offset the scrolling anchor location in pixels
    callbackBefore: function ( toggle, anchor ) {}, // Function to run before scrolling
    callbackAfter: function ( toggle, anchor ) {} // Function to run after scrolling
});