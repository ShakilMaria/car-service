let prevBtn = document.getElementById('pr_prev');
let nextBtn = document.getElementById('pr_next');




 

nextBtn.addEventListener('click', function(){
   let productItem = document.querySelectorAll('.product-item')
   document.querySelector('.product-box').appendChild(productItem[0])
       
      
})
prevBtn.addEventListener('click', function(){
   let productItem = document.querySelectorAll('.product-item')
   
   
    document.querySelector('.product-box').prepend(productItem[productItem.length - 1])
     
      
})


