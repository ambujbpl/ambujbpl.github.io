var body_Color = document.querySelectorAll('.body_Color span');
var root = document.querySelector(':root');

body_Color.forEach((swatch) => {
  swatch.addEventListener('click', (e) => {
    root.style.setProperty('--body-color', e.target.style.background);
  });
});

var sidebar_Wrapper_Color = document.querySelectorAll('.sidebar_Wrapper_Color span');
var root = document.querySelector(':root');

sidebar_Wrapper_Color.forEach((swatch) => {
  swatch.addEventListener('click', (e) => {
    root.style.setProperty('--sidebar-color', e.target.style.background);
  });
});

// Config box
// SKIN Select
$('.spin-icon').click(function() {
  $(".theme-config-box").toggleClass("show");
});
