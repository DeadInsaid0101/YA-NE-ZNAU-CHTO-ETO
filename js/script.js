let new_game = [
    { src: './img/night_dvor.jpg', href: './page.html' },
    { src: './img/pixel_fon_2.jpg', href: './page2.html' },
    { src: './img/pixel_fon_3.png', href: './page3.html' },
    { src: './img/pixel_fon_4.jpg', href: './page4.html' },
    { src: './img/pixel_fon_5.jpg', href: './page5.html' }
  ];

  const btn1 = document.getElementById('btn-chapter-1');
btn1.addEventListener('click', () => {
  const link = document.getElementById('link-start-game');
  let image = document.querySelector('.img_chapters');
  link.href = new_game[0].href;
  image.src = new_game[0].src;
  btn1.style.color = 'white';
  btn2.style.color = 'rgb(255, 88, 186)';
  btn3.style.color = 'rgb(255, 88, 186)';
  btn4.style.color = 'rgb(255, 88, 186)';
  btn5.style.color = 'rgb(255, 88, 186)';
  
  return false;
});

const btn2 = document.getElementById('btn-chapter-2');
btn2.addEventListener('click', () => {
  const link = document.getElementById('link-start-game');
  let image = document.querySelector('.img_chapters');
  link.href = new_game[1].href;
  image.src = new_game[1].src;
  btn1.style.color = 'rgb(255, 88, 186)';
  btn2.style.color = 'white';
  btn3.style.color = 'rgb(255, 88, 186)';
  btn4.style.color = 'rgb(255, 88, 186)';
  btn5.style.color = 'rgb(255, 88, 186)';
  
  return false;
});

const btn3 = document.getElementById('btn-chapter-3');
btn3.addEventListener('click', () => {
  const link = document.getElementById('link-start-game');
  let image = document.querySelector('.img_chapters');
  link.href = new_game[2].href;
  image.src = new_game[2].src;
  btn1.style.color = 'rgb(255, 88, 186)';
  btn2.style.color = 'rgb(255, 88, 186)';
  btn3.style.color = 'white';
  btn4.style.color = 'rgb(255, 88, 186)';
  btn5.style.color = 'rgb(255, 88, 186)';
  
  return false;
});

const btn4 = document.getElementById('btn-chapter-4');
btn4.addEventListener('click', () => {
  const link = document.getElementById('link-start-game');
  let image = document.querySelector('.img_chapters');
  link.href = new_game[3].href;
  image.src = new_game[3].src;
  btn1.style.color = 'rgb(255, 88, 186)';
  btn2.style.color = 'rgb(255, 88, 186)';
  btn3.style.color = 'rgb(255, 88, 186)';
  btn4.style.color = 'white';
  btn5.style.color = 'rgb(255, 88, 186)';
  
  return false;
});

const btn5 = document.getElementById('btn-chapter-5');
btn5.addEventListener('click', () => {
  const link = document.getElementById('link-start-game');
  let image = document.querySelector('.img_chapters');
  link.href = new_game[4].href;
  image.src = new_game[4].src;
  btn1.style.color = 'rgb(255, 88, 186)';
  btn2.style.color = 'rgb(255, 88, 186)';
  btn3.style.color = 'rgb(255, 88, 186)';
  btn4.style.color = 'rgb(255, 88, 186)';
  btn5.style.color = 'white';
  return false;
});
