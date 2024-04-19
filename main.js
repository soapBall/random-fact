var numOfClicks = 0;
const hedding = document.createElement("h1")
const para = document.createElement("p");
const facts = ["stuff", "more stuff","cool stuff","hi","bye","ha ha","boo!","yes","no","why?","needles :("]

randomBtm.addEventListener("click", function(e){
  numOfClicks += 1
  if (numOfClicks==1) {
    para.innerText = "This is a paragraph";
  } else {
    para.innerText = facts [Math.round(Math.random(0)*10)]
    
  };
  
  
  console.log("I was clicked!!");

  

  document.body.appendChild(para);
});



function fact1(){
  para.innerText = "Have you ever wondered why time measurement for almost all of the world is in base 60, instead of base 10 like basically everything else?";
  hedding.innerText = "Why is the time we use base 60?"
};