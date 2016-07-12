$(function () {
    var tabContainers = $('div.tabs > div'); // получаем массив контейнеров
    tabContainers.hide().filter(':first').show(); // прячем все, кроме первого
    // далее обрабатывается клик по вкладке
    $('div.tabs ul.tabs-naviganion a').click(function () {
        tabContainers.hide(); // прячем все табы
        tabContainers.filter(this.hash).show(); // показываем содержимое текущего
        $('div.tabs ul.tabs-naviganion a').removeClass('selected'); // у всех убираем класс 'selected'
        $(this).addClass('selected'); // текушей вкладке добавляем класс 'selected'
        return false;
    }).filter(':first').click();
});


function theRotator() {
    // Устанавливаем прозрачность всех картинок в 0
    $('div#rotator ul li').css({opacity: 0.0});
 
    // Берем первую картинку и показываем ее (по пути включаем полную видимость)
    $('div#rotator ul li:first').css({opacity: 1.0});
 
    // Вызываем функцию rotate для запуска слайдшоу, 5000 = смена картинок происходит раз в 5 секунд
    setInterval('rotate()',5000);
}
 
function rotate() { 
    // Берем первую картинку
    var current = ($('div#rotator ul li.show')?  $('div#rotator ul li.show') : $('div#rotator ul li:first'));
 
    // Берем следующую картинку, когда дойдем до последней начинаем с начала
    var next = ((current.next().length) ? ((current.next().hasClass('show')) ? $('div#rotator ul li:first') :current.next()) : $('div#rotator ul li:first'));   
 
    // Расскомментируйте, чтобы показвать картинки в случайном порядке
    // var sibs = current.siblings();
    // var rndNum = Math.floor(Math.random() * sibs.length );
    // var next = $( sibs[ rndNum ] );
 
    // Подключаем эффект растворения/затухания для показа картинок, css-класс show имеет больший z-index
    next.css({opacity: 0.0})
    .addClass('show')   
    .animate({opacity: 1.0}, 1000);
 
    // Прячем текущую картинку
    current.animate({opacity: 0.0}, 1000)
    .removeClass('show');
};
 
$(document).ready(function() {      
    // Запускаем слайдшоу
    theRotator();
});



    $('#zoom_05').elevateZoom({
    zoomType: "inner",
cursor: "default",
zoomWindowFadeIn: 500,
zoomWindowFadeOut: 200,
easing: true,
easingAmount: 4,
gallery:'gallery_01', 
galleryActiveClass: 'active', 
imageCrossfade: false
   }); 

    $("#zoom_05").bind("click", function(e) {  
  var ez =   $('#zoom_05').data('elevateZoom'); 
    $.fancybox(ez.getGalleryList());
  return false;
});


// КАРУСЕЛЬ 

$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        loop:true, //Зацикливаем слайдер
        margin:50, //Отступ от картино если выводите больше 1
        nav:true, //Отключил навигацию
        autoplay:true, //Автозапуск слайдера
        smartSpeed:2000, //Время движения слайда
        autoplayTimeout:1000, //Время смены слайда
        navText : ["<div class='next-1'></div>","<div class='next-2'></div>"],
        responsive:{ //Адаптация в зависимости от разрешения экрана
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
});