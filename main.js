var numOfClicks = 0;
const heading = document.createElement("h1")
const para = document.createElement("p");
const facts = ["stuff", "more stuff","cool stuff","hi","bye","ha ha","boo!","yes","no","why?","needles :("]

randomBtm.addEventListener("click", function(e){
  numOfClicks += 1
  if (numOfClicks==1) {
    para.innerText = "This is a paragraph";
  } else {
    para.innerText = facts [Math.round(((Math.random(0)*(facts.length-1))))];
    console.log(randomnum(1,5))
  };
  
  
  console.log("I was clicked!!");

  

  document.body.appendChild(para);
});
 
function randomnum(max, min){
  
};