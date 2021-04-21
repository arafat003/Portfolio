
// type js starts

var typed = new Typed('.element', {
    strings: ["Web Design", "Web Development", "WordPress", "PSD to HTML" , "PSD to WordPress", "Responsive Design", "SEO"],
    typeSpeed: 50,
    backSpeed:50,
    loop:true
  });
//   type js ends


// progress bar starts

$(document).ready(function(){
  $(".progress-bar").ProgressBar();
});

// progress bar ends
// gallery
// init Isotope
var $grid = $('.items').isotope({
  // options
});
// filter items on button click
$('.filter-items').on( 'click', 'li', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
  
});

$(function() {
  $( '.filter-items ul li' ).on( 'click', function() {
        $( this ).parent().find( 'li.active' ).removeClass( 'active' );
        $( this ).addClass( 'active' );
  });
});
// filter items on button click ends here

// contact form

var form = document.getElementById("my-form");
    
async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("form-status");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
  }).then(response => {
    status.innerHTML = "Thanks for your submission!";
    form.reset()
  }).catch(error => {
    status.innerHTML = "Oops! There was a problem submitting your form"
  });
}
form.addEventListener("submit", handleSubmit)

// scroll up plugin
$(function(){
  $.scrollUp({
    scrollText: '<i class="fas fa-chevron-up"></i>'
  });
 

});

// image lazy load
lazyload();



