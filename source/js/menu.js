var header = document.querySelector('.page-header'),
    navMain = document.querySelector('.main-nav'),
    navToggle = document.querySelector('.main-nav__toggle');

// если JS включен, то убираем класс
header.classList.remove('page-header--nojs');

// если ширина окна больше 1170, то показываем меню
if(window.innerWidth > 1170)
  navMain.classList.remove('main-nav--closed');

window.addEventListener("resize", function() {
  if(window.innerWidth < 1170)
    navMain.classList.add('main-nav--closed');
  else
    navMain.classList.remove('main-nav--closed');
});

navToggle.addEventListener('click', function() {
  if(navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.remove('main-nav--opened');
    navMain.classList.add('main-nav--closed');
  }
});
