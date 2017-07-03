$(document).ready(function() {
    var pixChanger = function(event) {
    event.preventDefault();
    var city = $('#city-type').val();
    var lowerCase = city.toLowerCase();
    // check if input is 'nyc' or 'new york' or 'new york city'
    if (lowerCase === "nyc" || lowerCase === "new york" || lowerCase === "new york city") {
      // change background-image to nyc.jpg
      $('body').css('background-image', 'url(images/nyc.jpg)');
    }
      // check if input is 'austin' or 'atx'
      else if (lowerCase === "austin" || lowerCase === "atx") {
        // change background-image to austin.jpg
        $('body').css('background-image', 'url(images/austin.jpg)');
      }
      // check if input is 'sf' or 'san fransisco' or 'bay area'
      else if (lowerCase === "sf" || lowerCase === "san fransisco" || lowerCase === "bay area") {
        // change background-image to sf.jpg
        $('body').css('background-image', 'url(images/sf.jpg)');
      }
      // check if input is 'syd' or 'sydney'
      else if (lowerCase === "syd" || lowerCase === "sydney") {
        // change background-image to sydney.jpg
        $('body').css('background-image', 'url(images/sydney.jpg)');
      }
      // check if input is 'los angeles' or 'la' or 'lax'
      else if (lowerCase === "los angeles" || lowerCase === "la" || lowerCase === "lax") {
        // change background-image to la.jpg
        $('body').css('background-image', 'url(images/la.jpg)');
      }
      // can't find this city
      else {
        $('body').css('background-image', 'url(images/citipix_skyline.jpg)');
        // reset to default pic
      }
    }

    $('form').submit(pixChanger)

    //$("#city-type").attr() --?
});
