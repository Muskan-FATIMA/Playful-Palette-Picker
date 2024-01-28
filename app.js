let btn=document.querySelector("#btn");
let rgbcode=document.querySelector(".rgbcode");
let hexcode=document.querySelector(".hexcode");
let box=document.querySelector(".face");

btn.addEventListener("click",()=>{


    const red=Math.floor(Math.random() * 256);
    const green=Math.floor(Math.random() * 256);
    const blue=Math.floor(Math.random() * 256);
    
    const rgb=`rgb(${red},${green},${blue})`;
    const hex =`#${red.toString(16).padStart(2,'0')}${green.toString(16).padStart(2,'0')}${blue.toString(16).padStart(2,'0')}`;
 
   
  
    rgbcode.innerText = rgb;
    hexcode.innerText = hex;
    rgbcode.style.color = rgb;
    hexcode.style.color = hex;
    box.style.backgroundColor=rgb;
});
  


   
   
  

