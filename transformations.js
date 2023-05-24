function isElementInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  function handleScroll() {
    var rectangle = document.querySelector('.rectangle');
    var header2 = document.querySelector('.header2');
  
    if (isElementInViewport(rectangle)) {
      rectangle.classList.add('visible');
      header2.classList.add('visible');
    } else {
      rectangle.classList.remove('visible');
      header2.classList.remove('visible');
    }
  }
  
  window.addEventListener('scroll', handleScroll);