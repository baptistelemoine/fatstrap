(function($){

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

  var Menu = {
    $wrapper:$('#wrapper'),
    open:function(){
        // this.$el.parent().show();
        this.$wrapper.css('transform','translateX(260px)');
        // this.$wrapper.css('margin-left', '260px')
        this.isOpen = true;
      },

      close:function(){
        this.$wrapper.css('transform','translateX(0px)');
        // this.$wrapper.css('margin-left', '0')
        this.isOpen = false;
      },

      openClose:function(e){
        return this.isOpen ? this.close() : this.open();
      }
  };



  //open close menu
  $('#btn-menu').on('click', function (e){
    // Menu.openClose();
  });
  

}(jQuery));