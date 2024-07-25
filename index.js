  

  let random_number = document.getElementById("random_number")
  let button = document.getElementById("random")
  
  button.addEventListener("click" , ()=> {
      let inp1 =  + document.getElementById("inp1").value
      let inp2 =  + document.getElementById("inp2").value
     let random = Math.floor( inp1 +  Math.random() *(inp2 - inp1 + 1 ) );
     random_number.innerText = random
     

  })