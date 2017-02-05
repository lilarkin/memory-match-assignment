$(document).ready(function() {
  
  // var tiles : [ 'mm_assets/mm_images/img1.JPG', 
  //             'mm_assets/mm_images/img2.JPG', 
  //             'mm_assets/mm_images/img3.JPG',
  //             'mm_assets/mm_images/img4.JPG',
  //             'mm_assets/mm_images/img5.JPG',
  //             'mm_assets/mm_images/img6.JPG',
  //             'mm_assets/mm_images/img7.JPG',
  //             'mm_assets/mm_images/img8.JPG']

  var $button = $('.btn');


// make this do the opposite, so white and shows image if clicked
  $button.on('click', function() {
    $(this).find('img').show();
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

  // onGameStart : function() { return false; },
  // onGameEnd : function() { return false; }

  // var myMem = new Memory;
  // myMem.resetGame();

});