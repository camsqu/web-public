//2023 Cameron Squire

//---Terminal Text--- from Tobias https://codepen.io/Tbgse/pen/dYaJyJ

// function([string1, string2],target id,[color1,color2])    
 consoleText(['networking student', 'pc builder', 'pentester', 'cybersecurity nerd', 'turn signal user'], 'text',['white','gray','lightgreen','lightblue','orange']);

function consoleText(words, id, colors) {
  if (colors === undefined) colors = ['#fff'];
  var visible = true;
  var con = document.getElementById('console');
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById(id)
  target.setAttribute('style', 'color:' + colors[0])
  window.setInterval(function() {

    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount)
      window.setTimeout(function() {
        var usedColor = colors.shift();
        colors.push(usedColor);
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute('style', 'color:' + colors[0])
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function() {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 5000)
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount)
      letterCount += x;
    }
  }, 120)
  window.setInterval(function() {
    if (visible === true) {
    //   con.className = "console-underscore hidden"
      con.setAttribute('style', 'display: none;')
      visible = false;

    } else {
    //   con.className = "console-underscore"
      con.setAttribute('style', '')
      visible = true;
    }
  }, 400)
}


//---Cloudflare Stream---
//Player API (not in use)
const player = Stream(document.getElementById('proj'));
const player2 = Stream(document.getElementById('skill'));

  player.addEventListener('play', () => {
    console.log('playing!');
  });
  player.play().catch(() => {
    console.log('playback failed, muting to try again');
    player.muted = true;
    player.play();
  });

//<video> tag controls

function vidAutoplay(element) {
  var video = document.getElementById(element);
  video.play();
}

function vidPause(element) {
  var video = document.getElementById(element);
  video.pause();
}

//---Personal code---
function countSecondsSinceDate(date) {
  const currentDate = new Date();
  const difference = currentDate - date;
  const seconds = Math.floor(difference / 1000);
  return seconds;
}

var secondsOld = countSecondsSinceDate(2000-0o2-0o5);
document.getElementById('age').innerHTML = secondsOld;

window.setInterval(function(){

  var secondsOld = countSecondsSinceDate(2000-0o2-0o5);
  document.getElementById('age').innerHTML = secondsOld;

}, 1000)