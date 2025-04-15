 
  const track = document.querySelector('.slider-track');
  const nextBtn = document.getElementById('next');
  const prevBtn = document.getElementById('prev');
  const slideWidth = 320;  
  let position = 0;

  
  function getMaxScroll() {
    return track.scrollWidth - track.clientWidth;
  }

 
  nextBtn.addEventListener('click', () => {
    const maxScroll = getMaxScroll();
    if (Math.abs(position) < maxScroll) {
      position -= slideWidth;
    } else {
      position = 0;    
    }
    updateSlider();
  });

  
  prevBtn.addEventListener('click', () => {
    if (position < 0) {
      position += slideWidth;
    }
    updateSlider();
  });

  
  function updateSlider() {
    track.style.transform = `translateX(${position}px)`;
  }

 
  setInterval(() => {
    const maxScroll = getMaxScroll();
    if (Math.abs(position) < maxScroll) {
      position -= slideWidth;
    } else {
      position = 0;
    }
    updateSlider();
  },4000);
 
