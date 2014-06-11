$(document).ready(function(){
  var pathArray = window.location.pathname.split( '/' );
  var curPage = pathArray[pathArray.length - 1];

  if (curPage === 'resume') {
    $('nav a').eq(1).addClass('selected');
  } else if (curPage === 'about') {
    $('nav a').eq(2).addClass('selected');
  } else {
    $('nav a').eq(0).addClass('selected');
  }
});
