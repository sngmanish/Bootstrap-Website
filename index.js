$(function () { 
  $(window).scroll(function () {
      if ($(this).scrollTop() > 1000) { 
          $('.navbar .navbar-brand img').attr('src','http://placehold.it/220?text=Original+Logo!');
      }
      if ($(this).scrollTop() < 1000) { 
          $('.navbar .navbar-brand img').attr('src','http://placehold.it/120?text=Original+Logo!');
      }
  })
});