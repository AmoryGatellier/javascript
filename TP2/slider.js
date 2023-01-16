$('document').ready(function(){
    $('.nextBtn').click(function(){
      let current = document.querySelector('.current'); 
      let prev = document.querySelector('.prev'); 
      let next = document.querySelector('.next'); 
      $(current).removeClass('current'); 
      $(prev).removeClass('prev'); 
      $(next).removeClass('next'); 
      
      $(current).addClass('prev'); 
      $(prev).addClass('next'); 
      $(next).addClass('current'); 
    })
    
    $('.prevBtn').click(function(){
      let current = document.querySelector('.current'); 
      let prev = document.querySelector('.prev'); 
      let next = document.querySelector('.next'); 
      
      $(current).removeClass('current'); 
      $(prev).removeClass('prev'); 
      $(next).removeClass('next'); 
      
      $(current).addClass('next'); 
      $(prev).addClass('current'); 
      $(next).addClass('prev'); 
    })
  });