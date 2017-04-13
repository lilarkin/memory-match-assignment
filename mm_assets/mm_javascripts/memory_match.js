$(document).ready(function() {
  var $button = $('.btn');
  var $image = $('.img');

  let tiles = ['mm_assets/mm_images/img1.JPG',
              'mm_assets/mm_images/img1.JPG',
              'mm_assets/mm_images/img2.JPG',
              'mm_assets/mm_images/img2.JPG', 
              'mm_assets/mm_images/img3.JPG',
              'mm_assets/mm_images/img3.JPG',
              'mm_assets/mm_images/img4.JPG',
              'mm_assets/mm_images/img4.JPG', 
              'mm_assets/mm_images/img5.JPG',
              'mm_assets/mm_images/img5.JPG', 
              'mm_assets/mm_images/img6.JPG',
              'mm_assets/mm_images/img6.JPG', 
              'mm_assets/mm_images/img7.JPG',
              'mm_assets/mm_images/img7.JPG',
              'mm_assets/mm_images/img8.JPG', 
              'mm_assets/mm_images/img8.JPG'];

let tileValues = [];

var tile1, tile2

// assign each image to 2 tiles with a for loop
for (i = 0; i < 8; i++) { 
  let rand  = 1 + Math.floor(Math.random() * 8); 
  let img = 'mm_assets/mm_images/img' + rand + '.JPEG';
  tileValues.push(img);
  tileValues.push(img);
}
// var tilesFlipped = 0;

// flipTile = (val) => {
// 	if (tileValues.length < 2) {
		// what do i do here? value needs to access tiles array
		// if(memoryValues.length === 0) {
		// 	memoryValues.push(val);
		// } else if(memoryValues.length === 1){
		// 	memoryValues.push(val);
		// 	if(memoryValues[0] == memoryValues[1]){
		// 		tilesFlipped += 2;
				// Clear both array
				// memoryValues = [];
				// Check to see if the whole board is cleared
			// 	if(tilesFlipped === tiles.length) {
			// 		alert("Board cleared.");
			// 		newBoard();
			// 	}
			// } else {
			// 	flipTwoBack = () => {
				    // Flip the 2 tiles back over
				    // var tile1 = 
				    // var tile2 = 
				    
				    // Clear both arrays
// 				    memoryValues = [];
// 				}
// 				setTimeout(flip2Back, 700);
// 			}
// 		}
// 	}
// };




// tiles.forEach(function() {

// });
// img {
// display: none;
// }

// make this do the opposite, so white and shows image if clicked
  // $button.on('click', function(tile1, tile2) {
  //   $(this).find('img').show();
  //   if match {
  //     face up
  //     alert('You found a match!')
  //   else
  //     alert('They do not match. Pick again.)
  //     face down
  //   }
  // });

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