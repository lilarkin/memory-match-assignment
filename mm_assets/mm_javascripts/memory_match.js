$(document).ready(function() {
  
  var $button = $('.btn');


// make this do the opposite, so white and shows image if clicked
  $button.on('click', function() {
    $(this).find('img').hide();
    //if match {
      //face up
      //alert('You found a match!')
    //else
      //alert('They do not match. Pick again.)
      //face down
    //}
  });

  // identify if choice matches
  // give alert that they do/do not match
  // leave matches face up
  // alert winner when all matches showing
  // quit or reshuffle 
  // alert if pick a card that is showing (already matched)


});