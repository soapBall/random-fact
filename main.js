var numOfClicks = 0;
var random = 0
const head = document.createElement("h1");
const para = document.createElement("p");
const facts = ["A while ago, people invented washing machines that use WiFi. Why, no one knows. But these could destroy the world because of AI. What if someone made a true AI, an AI that could have its own ideas? That AI, if it had bad intentions, could hypothetically hack into the internet, control the washing machines, and flood full houses! Meanwhile, another AI that went into the internet and took over one of those washing machine maker robots could make millions of more WiFi washing machines and convince everyone that they are the best washing machines. The world would be destroyed!"
,"Have you ever wondered why time measurement for almost all of the world is in base 60, instead of base 10 like basically everything else? The clock we use dates back to the late 1800s and is based on the Gallic (German) calendar. They most likely did it because 60 is the first number that is a multiple of 1, 2, 3, 4, 5, and 6.",
'Apple product names often start with the letter “i” before their name because Steve Jobs said in 1998, the “i” in the iMac stood for “internet”, but he also said that it could stand for "individual," "instruct," "inform," and "inspire". Later he stated that the “i” in front of a product like the iPhone, iMac, and iPad did not have any official meaning, and it can mean whatever you want it to be. Although we know what it could mean, it still leaves us with the question, why did they choose the letter “i” instead of a letter like “p” for possibility?'];
const hFacts = ["Why AI will destroy your washing machines"
, "Why is the time we use in base 60?",
"Why do most apple products have an “i” in front of their name?"];
var factsSeen=[]
var lastFact
randomBtm.addEventListener("click", function(e){
  numOfClicks += 1
  randomNum = Math.round(((Math.random(0)*(facts.length-1))));
  if (factsSeen.length>=facts.length){
    factsSeen = [];
    console.log("list was emptied!")
    factsSeen.push(lastFact)

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
  lastFact=randomNum
});
