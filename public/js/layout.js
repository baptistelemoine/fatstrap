(function($){

  window.addEventListener('load', function() {
    FastClick.attach(document.body);
  }, false);

  $(window).on('resize', function(e){
      console.log($(this).width());
  })
  

  //COMBO BOX SETTINGS
  //on btn expand click
  $('[data-toggle=dropdown]').on('click', function (e){
    var $current = $(e.currentTarget);
    $current.toggleClass('button-enabled');
    $current.parent().css('z-index', 1000).find('[data-role=combo-submenu]').toggle();
  });
  //stop hover btn effect
  $('[data-toggle=dropdown]').hover(
	function (e){
		//if($(this).hasClass('button-enabled')) $(this).css('border', 0);
	}
  );

  

}(jQuery));