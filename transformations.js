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
  function open_about() {
    var section = document.getElementById('About');
    section.scrollIntoView({ behavior: 'smooth' });
    console.log('Button clicked!');
  }
  function open_main() {
    var section = document.getElementById('Main');
    section.scrollIntoView({ behavior: 'smooth' });
    console.log('Button clicked!');
  }
  
  
  window.addEventListener('scroll', handleScroll);

  const fish = document.querySelector('.fish');

  function getRandomValue(min, max) {
    return Math.random() * (max - min) + min;
  }
  
  function animateFish() {
    const x = getRandomValue(-100, 100) + 'px';
    const y = getRandomValue(-50, 50) + 'px';
  
    fish.style.setProperty('--x', x);
    fish.style.setProperty('--y', y);
  }
  
  setInterval(animateFish, 2000);