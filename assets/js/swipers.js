var swiper = new Swiper('.projects-swiper', {
    slidesPerView: 'auto',        
    spaceBetween: 12,             
    loop: true,                   
    navigation: {
        nextEl: '.projects-swiper-button-next',
        prevEl: '.projects-swiper-button-prev',
      }
});

var swiper2 = new Swiper('.stories-swiper', {
    slidesPerView: 'auto',        
    spaceBetween: 12,             
    loop: false,                   
    navigation: {
        nextEl: '.stories-swiper-button-next',
        prevEl: '.stories-swiper-button-prev',
      }
});

var swiper3 = new Swiper('.creators-swiper', {
    slidesPerView: 'auto',        
    spaceBetween: 30,             
    loop: true,   
    navigation: false,
    slideToClickedSlide: true             
});

var swiper4 = new Swiper('.about-swiper', {
    slidesPerView: 'auto',        
    spaceBetween: 20,             
    loop: true,                   
    navigation: {
        nextEl: '.about-swiper-button-next',
        prevEl: '.about-swiper-button-prev',
    }
});