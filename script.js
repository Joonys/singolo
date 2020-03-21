window.onload = () => {
  const MENU = document.querySelectorAll('.menu__link');
  const anchors = document.querySelectorAll('a[href*="#"]');
  const portfolio = document.getElementById('portfolio');
  const services = document.getElementById('services');
  const about = document.getElementById('about');
  const contact = document.getElementById('contact');
  const slider = document.querySelector('.slider');
  const header = document.querySelector('.header');
  
  let servicesH = services.offsetHeight,
  portfolioH = portfolio.offsetHeight/4,
  aboutH = about.offsetHeight,
  contactH = contact.offsetHeight,
  sliderH = slider.offsetHeight;
  

  MENU.forEach(el => {
    el.addEventListener('click', () => {
        MENU.forEach(element => {
            element.classList.remove('menu__link--active');
        });
        el.classList.add('menu__link--active');
    });
});

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
      e.preventDefault()
      
      const blockID = anchor.getAttribute('href').substr(1)
      
      document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
      })
  })
  }

  window.onscroll = function showHeader() {
    if (window.pageYOffset > 100) {
        header.classList.add('header-fixed');
    } else {
        header.classList.remove('header-fixed');
    }
    

    if (window.pageYOffset > portfolioH + servicesH + sliderH + aboutH) {
        MENU.forEach(element => {
            element.classList.remove('menu__link--active');
        });
        MENU[4].classList.add('menu__link--active');
    } else if (window.pageYOffset > portfolioH + servicesH + sliderH - 95) {
        MENU.forEach(element => {
            element.classList.remove('menu__link--active');
        });
        MENU[3].classList.add('menu__link--active');
    } else if (window.pageYOffset > servicesH + sliderH - 95) {
        MENU.forEach(element => {
            element.classList.remove('menu__link--active');
        });
        MENU[2].classList.add('menu__link--active');
    } else if (window.pageYOffset > sliderH - 95) {
        MENU.forEach(element => {
            element.classList.remove('menu__link--active');
        });
        MENU[1].classList.add('menu__link--active');
    } else {
        MENU.forEach(element => {
            element.classList.remove('menu__link--active');
        });
        MENU[0].classList.add('menu__link--active');
    }
}
  
}