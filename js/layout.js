(function($){

  //ComboBox
  $('[data-toggle=dropdown]').on('click', function (e){ 
    var $current = $(e.currentTarget);
    $current.toggleClass('button-enabled');
    $current.prev().find('[data-role=combo-submenu]').toggle();
  });

}(jQuery));