new WOW().init();



// jquery
$(document).ready(function(){

  //dragg
  $( "#draggable" ).draggable();


  //dropp
  $( "#droppable" ).droppable({
    drop: function( event, ui ) {
    $( this )
    .addClass( "ui-state-highlight" )
    .find( "p" )
    .html( "Dropped!" );
    }
});


  //dragg
  $( "#accordion" ).accordion({
      collapsible: true
  });

  //auto complete
  var data = [
      "html",
      "css",
      "bootstrap",
      "Jquery"
    ];

    $( "#topic" ).autocomplete({
      source: data
    });

    // datepicker
    $( "#datepicker" ).datepicker();

    //progressbar
    $( "#progressbar" ).progressbar({
      value: 60
    });

    //tooltip
    $( document ).tooltip();

    //tabs
    $( "#tabs" ).tabs();

    // sortable
    $( "#sortable" ).sortable();

    // add class

    $( "#button" ).on( "click", function() {
    $( "#effect" ).addClass( "newClass", 1000, callback );

    setTimeout(function() {
      $( "#effect" ).removeClass( "newClass" );
      }, 1500 );

    var state = true;
    $( "#button" ).on( "click", function() {
      if ( state ) {
        $( "#effect" ).animate({
          backgroundColor: "#aa0000",
          color: "#fff",
          width: 500
        }, 1000 );
      } else {
        $( "#effect" ).animate({
          backgroundColor: "#fff",
          color: "#000",
          width: 240
        }, 1000 );
      }
      state = !state;

});
