$(function() {
  $('.flipster1').flipster({
    style: 'coverflow',  //ここでレイアウトをかえる。（coverflow|carousel|flat|wheel）
    // spacing: 0
  });
});

$(document).ready(function(){
  $(".demo").hex();
});

$(document).ready(function() {
  $('#fullpage').fullpage();
});

// let galleryImages = document.querySelectorAll(`.services-cell`);
// let getLatestOpenedImg;
// let windowWidth = window.innerWidth

// galleryImages.forEach(function(image, index){
//   image.onclick = function() {
    
//     getLatestOpenedImg = index + 1 ;

//     let container = document.body;
//     let newImaWindow = document.createElement('div');
//     container.appendChild(newImaWindow);
//     newImaWindow.setAttribute('class', 'img-window');
//     newImaWindow.setAttribute('onclick', 'closeImg()');
    
//     let newImg = image.firstElementChild.cloneNode();
//     newImaWindow.appendChild(newImg)
//     console.log(newImg)

//   }
// })






// $(document).ready(function() {
//   $('#fullpage').fullpage({
//   anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage'],
//   menu: '#menu'
//   });

// $(document).ready(function() {
// $('#fullpage').fullpage({
//     anchors: ['top', '1st', '2nd', 'last'],
//     menu: '#global-menu'
// });
// });

// $(function() {
//   $("#js-spnav").click(function() {
//     $('.header-nav').toggleClass("show");
//   });
// });

// $(window).on('load scroll', function() {
//   add_class_in_scrolling($('.animationTarget'));
  
// });

// // スクロールで要素が表示された時にclassを付与する
// function add_class_in_scrolling(target) {
//   var winScroll = $(window).scrollTop();
//   var winHeight = $(window).height();
//   var scrollPos = winScroll + winHeight;

//   if(target.offset().top < scrollPos) {
//       target.addClass('is-show');
//   }
// }

