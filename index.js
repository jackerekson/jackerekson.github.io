const me = document.querySelector('#me')

let backgrounds = ['./background/me.jpg','./background/me1.jpg','./background/me2.jpg','./background/me3.jpg','./background/me4.jpg','./background/me5.jpg']
let i = 0;

setInterval(function() {
    me.style.setProperty('background-image', 'url(' + backgrounds[i] + ')');

    i++;

    if (i == backgrounds.length) {
        i = 0;
    }
}, 5000);

function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }