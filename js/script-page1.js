let phrases = [
    'ФРАЗА 1', 'ФРАЗА 2', 'ФРАЗА 3', 'ФРАЗА 4'
]

let text = document.querySelector('.text')
let button = document.querySelector('.button');
let buttonBack = document.querySelector('.button_back');
let img = document.querySelector('.img')


text.textContent = phrases[0]

let i = 0

function nextPhrase() {

  smoothly(text, 'textContent', phrases[i = i + 1]) 

  if ( i > 1 && i < 4 ) {
     
    img.style.display = 'block'
  }
  
   else {
    img.style.display = 'none'
   }


}

function backPhrase() {
  
  smoothly(text, 'textContent', phrases[i = i - 1])    
       
  if ( i > 1 && i < 4 ) {
     
    img.style.display = 'block'
  }
  
   else {
    img.style.display = 'none'
   }

}


button.addEventListener('click', function () {
  
  nextPhrase()

  }
)


buttonBack.addEventListener('click', function () {
  
  backPhrase()

  }
)













































/*let text = document.querySelector('.text');
let button = document.querySelector('.button');
let button2 = document.querySelector('.button2');
let button3 = document.querySelector('.button3');
let button4 = document.querySelector('.button4');

let button_back = document.querySelector('.button_back');
let button2_back = document.querySelector('.button2_back');
let button3_back = document.querySelector('.button3_back');
let button4_back = document.querySelector('.button4_back');

button.addEventListener('click', function () {
    
    smoothly(text, 'textContent', phrases[0]);
    button.style.display = 'none'
    button2.style.display = 'inline-block'
      button_back.style.display = 'inline-block'

    button_back.addEventListener('click', function () {
    
        text.textContent = 'ФРАЗА 0'
        button_back.style.display = 'none'
        button.style.display = 'inline-block'
        button2.style.display = 'none'
          
      });
    
  });
  
  
  button2.addEventListener('click', function () {
    
    smoothly(text, 'textContent', phrases[1]);
    button2.style.display = 'none'
    button3.style.display = 'inline-block'
    button2_back.style.display = 'inline-block'
    button_back.style.display = 'none'


    button2_back.addEventListener('click', function () {
    
        text.textContent = phrases[0]
        button2_back.style.display = 'none'
        button3.style.display = 'none'
        button2.style.display = 'inline-block'
        button_back.style.display = 'inline-block'
          
      });
      
  });
  
  button3.addEventListener('click', function () {
    
    smoothly(text, 'textContent', phrases[2]);
    button3.style.display = 'none'
    button4.style.display = 'inline-block'
    button3_back.style.display = 'inline-block'
    button2_back.style.display = 'none'

    button3_back.addEventListener('click', function () {
    
        text.textContent = phrases[1]
        button3.style.display = 'inline-block'
        button4.style.display = 'none'
        button3_back.style.display = 'none'
        button2_back.style.display = 'inline-block'
          
      });
      
  });
  
  button4.addEventListener('click', function () {
    
    smoothly(text, 'textContent', phrases[3]);
    
    
    button4.style.display = 'none'
    button3_back.style.display = 'none'
    button4_back.style.display = 'inline-block'
    
    
    button4_back.addEventListener('click', function () {
    
        text.textContent = phrases[2]
        
        button4.style.display = 'inline-block'
    button3_back.style.display = 'inline-block'
    button4_back.style.display = 'none'
          
      });

  });
  
  */ 