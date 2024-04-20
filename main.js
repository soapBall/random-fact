var numOfClicks = 0;
var random = 0
const head = document.createElement("h1");
const para = document.createElement("p");
const facts = ["A while ago, people invented washing machines that use WiFi. Why, no one knows. But these could destroy the world because of AI. What if someone made a true AI, an AI that could have its own ideas? That AI, if it had bad intentions, could hypothetically hack into the internet, control the washing machines, and flood full houses! Meanwhile, another AI that went into the internet and took over one of those washing machine maker robots could make millions of more WiFi washing machines and convince everyone that they are the best washing machines. The world would be destroyed!"
,"Have you ever wondered why time measurement for almost all of the world is in base 60, instead of base 10 like basically everything else? The clock we use dates back to"];
const hFacts = ["Why AI will destroy your washing machines"
, "Why is the time we use in base 60?"];
var factsSeen=[]
var prevousNum = null
randomBtm.addEventListener("click", function(e){
  numOfClicks += 1
  randomNum = Math.round(((Math.random(0)*(facts.length-1))));
  if (factsSeen.length>=facts.length){
    factsSeen = [];
    console.log("list was emptied!")
    factsSeen.push(prevousNum)
  };

  while (factsSeen.includes(randomNum)){
    randomNum = Math.round(((Math.random(0)*(facts.length-1))));
  };
  factsSeen.push(randomNum);
  head.innerText = hFacts [randomNum];
  para.innerText = facts [randomNum];
  //para.innerText="hello"
  console.log("I was clicked!!");
  document.body.appendChild(head);
  document.body.appendChild(para);
  prevousNum=randomNum

});
