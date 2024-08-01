const button = document.getElementById("btn");
const namea= document.getElementById("namechnge");
const image= document.getElementById("imagechnge");
const h3= document.getElementById("h3");
// const h1=document.getElementById("h1");
const animatedText = document.getElementById("h1");
let toggle = true;

animatedText.textContent = "Create your avatar";

animatedText.addEventListener("animationiteration", () => {
  if (toggle) {
    animatedText.textContent = "Guess your personality";
  } else {
    animatedText.textContent = "Create your avatar";
  }
  toggle = !toggle;
});

button.addEventListener("click", function(){
  const a = namea.value;
  alert(a);
    image.setAttribute("src" ,`https://joesch.moe/api/v1/ ${a}`);
    setTimeout(()=>{
        h3.style.visibility="visible";
    },1000)
    setTimeout(()=>{
        h3.style.visibility="hidden";
    },4000);
   

})
