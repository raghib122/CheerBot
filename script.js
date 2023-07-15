//Event listeners
document.getElementById("submit").onclick = appendEnd;
document.getElementById("clear").onclick = clear;

//Still working on how to have this work when pressing enter. So far this confilics with the copyBtn(); function.
document.getElementById("url").onkeydown = onEnter;
function onEnter() {
  if (event.which == 13 || event.keyCode == 13) {
    appendEnd();
    return false;
  }
  return true;

};

function appendEnd() {
  var name = document.getElementById("url").value;

  var space = ' ';
  var str1 = "CheerBot  says: " + '"';
  var end = '"'

  var pickMeUps = ["really is the coolest",
    "has some great hair doo!",
    "has been working out... I can tell",
    "has those kind of eyes one can get lost in",
    "is such a rock star!", "...keep your rock on!",
    "can get through anything!",
    "has such a positive attitude",
    "really is the only one I go to for advice.",
    "has such a positive attitude.",
    "really is the only one I go to for advice.",
    "has an infectious smile that brightens my day!",
    "radiates confidence and charm wherever they go.",
    "is a shining example of resilience and strength.",
    "has a heart full of kindness and compassion.",
    "brings so much joy and laughter to those around them.",
    "always knows how to make a difficult situation seem manageable.",
    "has a natural talent for making others feel valued and appreciated.",
    "has an incredible sense of style that turns heads.",
    "is a true inspiration, always pursuing their dreams with unwavering determination.",
    "brings a spark of creativity to everything they do.",
    "has a magnetic personality that draws people in.",
    "has a beautiful soul that shines through in every interaction.",
    "is a true friend, always there to lend a helping hand.",
    "possesses an incredible work ethic that is truly inspiring.",
    "has a voice that could move mountains and touch hearts.",
    "brings so much positivity and light into the world.",
    "...can there there be anyone better? I contest that there cannot!"
  ]

  if (name.length < 1) {
    alert("name is required");
  } else {
    //document.getElementById("display_results").innerHTML = result;
    var getRandomPickMeUp = function () {
      return pickMeUps[Math.floor(Math.random() * pickMeUps.length)];
    }
    var random = getRandomPickMeUp();
    var response = space + random;
    var result = str1 + name + response + end;
    document.getElementById("display_results").innerHTML = result;
  }
  //copyBtn();
};

//This copies what the bot says so the end user can past the response wherever they would like.
/*function copyBtn() {
  var textToCopy = document.getElementById("display_results");
  var range = document.createRange();
  range.selectNode(textToCopy);
  window.getSelection().addRange(range);
  
  try {  
    var successful = document.execCommand('copy');  
    var msg = successful ? 'successful' : 'unsuccessful';  
    console.log('Copy text command was ' + msg);  
  } catch(err) {  
    console.log('Oops, unable to copy');  
  }
  window.getSelection().removeAllRanges();
  console.log(range);
};*/

//Clears the name field and what Pick'me'up bot says
function clear() {
  var label = document.getElementById("url");
  var results = document.getElementById("display_results");

  label.value = '';
  results.innerHTML = '';
};