var numOfClicks = 0;
const hedding = document.createElement("h1")
const para = document.createElement("p");
const facts = ["stuff", "more stuff","cool stuff","hi","bye","ha ha","boo!","yes","no","why?","needles :("]

randomBtm.addEventListener("click", function(e){
  numOfClicks += 1
  if (numOfClicks==1) {
    para.innerText = "This is a paragraph";
  } else {
    para.innerText = facts [randomNum(0,facts[length])]
    
  };
  
  
  console.log("I was clicked!!");

  

  document.body.appendChild(para);
});

function randomNum(min,max){
  ((Math.random(0)*(max-1))+min)
};