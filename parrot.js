let gp = document.querySelector("#green");
let np = document.querySelector("#nyan");
let op = document.querySelector("#owl");
let bp = document.querySelector("#bomber1");
let bpgif = document.querySelector("#bomber2");
let score = document.querySelector("#score")
let high_score = document.querySelector("#high_score")
let body_element = document.querySelector("body")

if (sessionStorage.getItem('high_score') != null) { // if the high score is in session, then render it on the page
  high_score.innerHTML = 'High Score:' + ' ' + sessionStorage.getItem('high_score')
}



RightMovement()

gp.addEventListener('click', function gp_move() {
gp.style.left = getRandomInt(87) // for every click, the bird resets to a random position
gp.style.top = getRandomInt(77)
score.innerHTML = Number(score.innerHTML) + 1 // For every click, the score increases

} );

gp.addEventListener('mouseover', function gp_highlight() { // for every hover in, the bird's border highlights to represent that it is clickable
gp.style.cursor = "pointer";
gp.style.border = "medium outset green";

} );

gp.addEventListener('mouseout', function gp_highlight() { // for every hover out, the bird's border highlights to represent that it is unclickable
gp.style.border = "none";
} );

np.addEventListener('click', function np_move() {
np.style.left = getRandomInt(87)  // for every click, the bird resets to a random position
np.style.top = getRandomInt(76)
score.innerHTML = Number(score.innerHTML) + 1 // For every click, the score increases
} );

np.addEventListener('mouseover', function gp_highlight() { // for every hover in, the bird's border highlights to represent that it is clickable
np.style.cursor = "pointer";
np.style.border = "medium outset blue";
} );

np.addEventListener('mouseout', function gp_highlight() { // for every hover out, the bird's border highlights to represent that it is unclickable
np.style.border = "none";
} );

op.addEventListener('click', function op_move() {
op.style.left = getRandomInt(87)  // for every click, the bird resets to a random position
op.style.top = getRandomInt(76)
score.innerHTML = Number(score.innerHTML) + 1 // For every click, the score increases
} );

op.addEventListener('mouseover', function op_highlight() { // for every hover in, the bird's border highlights to represent that it is clickable
op.style.border = "medium outset orange";
op.style.cursor = "pointer";
} );

op.addEventListener('mouseout', function op_highlight() { // for every hover out, the bird's border highlights to represent that it is unclickable
op.style.border = "none";
} );

bp.addEventListener('click', function bp_move() {
bpgif.style.display = 'block' // if the bomb is clicked, an explosion is displayed for 500 ms before becoming invisible in the display
bpgif.style.left = bp.style.left
bpgif.style.top = bp.style.top
setTimeout(function () {
  bpgif.style.display = 'none'
},500)

bp.style.left = getRandomInt(87)  // for every click, the bird resets to a random position
bp.style.top = getRandomInt(76)
score.innerHTML = Number(score.innerHTML) - 1 // For every click, the score decreases
} );

bp.addEventListener('mouseover', function bp_highlight() { // for every hover in, the bird's border highlights to represent that it is clickable
bp.style.border = "thick outset black";
bp.style.cursor = "pointer";
} );

bp.addEventListener('mouseout', function bp_highlight() { // for every hover out, the bird's border highlights to represent that it is unclickable
bp.style.border = "none";
} );

function getRandomInt(max) {
  return Math.floor(Math.random() * max) + '%'; // return a random whole number below a max
}

function getRandomClickSpeed(max) {
  return Math.floor(Math.random() * max); // return a random whole number below a max - for speeds
}



function gameOver() {

sessionStorage.setItem('game_score',score.innerHTML) // save the score and the high score for the game


if (Boolean(sessionStorage.getItem('high_score'))) { //high score is in session

    if ( Number(score.innerHTML) > sessionStorage.getItem('high_score')) {

      sessionStorage.setItem('high_score', Number(score.innerHTML))

    }

} else { // high score is not in session
  sessionStorage.setItem('high_score', Number(score.innerHTML))


}

window.location.href = "parrot_gameover.html";

}

function RightMovement() { // ensures the birds and bombs are slowly-quickly moving in to the right directions with setInterval() and clearInteral()

let gp_startTime = Date.now()
let np_startTime = Date.now()
let op_startTime = Date.now()
let bp_startTime = Date.now()
let gp_speed = 20 // current click speed of the birds and bombs
let np_speed = 20
let op_speed = 20
let bp_speed = 20

let gp_timer = setInterval(gpRunner,gp_speed);  // movement speed of birds

function gpRunner() { // keep the birds moving at a set pace

  if (parseInt(gp.style.left) > screen.width * window.devicePixelRatio) { // optimise for mobile screens
  clearInterval(gp_timer)
  gameOver() // if the birds reach the end, the game ends
  return
  }
//console.log(gp_speed)

  if (Date.now() - gp_startTime > 5000) {
    gp_startTime = Date.now()
    clearInterval(gp_timer)
    gp_speed -= getRandomClickSpeed(3)  //dynamically change the interval of movement speed every xyz seconds by stopping and resetting the setInterval() with the new interval

    gp_timer = setInterval(gpRunner,gp_speed)

  }

//Every 10 seconds, the speed of bird increases by 1-5 clicks
  gp.style.left = parseInt(gp.style.left) + 2 + 'px'} // else continue the birds right movement


  let np_timer = setInterval(npRunner,np_speed);  // movement speed of birds

  function npRunner() { // keep the birds moving at a set pace

    if (parseInt(np.style.left) > screen.width * window.devicePixelRatio) {
    clearInterval(np_timer)
    gameOver() // if the birds reach the end, the game ends
    return
    }
  //console.log(gp_speed)

    if (Date.now() - np_startTime > 5000) {
      np_startTime = Date.now()
      clearInterval(np_timer)
      np_speed -= getRandomClickSpeed(3)  //dynamically change the interval of movement speed every xyz seconds by stopping and resetting the setInterval() with the new interval

      np_timer = setInterval(npRunner,np_speed)

    }

  //Every 10 seconds, the speed of bird increases by 1-5 clicks
    np.style.left = parseInt(np.style.left) + 2 + 'px'} // else continue the birds right movement



    let op_timer = setInterval(opRunner,op_speed);  // movement speed of birds

    function opRunner() { // keep the birds moving at a set pace

      if (parseInt(op.style.left) > screen.width * window.devicePixelRatio) {
      clearInterval(op_timer)
      gameOver() // if the birds reach the end, the game ends
      return
      }
    //console.log(gp_speed)

      if (Date.now() - op_startTime > 5000) {
        op_startTime = Date.now()
        clearInterval(op_timer)
        op_speed -= getRandomClickSpeed(3)  //dynamically change the interval of movement speed every xyz seconds by stopping and resetting the setInterval() with the new interval

        op_timer = setInterval(opRunner,op_speed)

      }

    //Every 10 seconds, the speed of bird increases by 1-5 clicks
      op.style.left = parseInt(op.style.left) + 2 + 'px'} // else continue the birds right movement



  let bp_timer = setInterval(bpRunner,bp_speed);  // movement speed of bomb

  function bpRunner() { // keep the bomb moving at a set pace

  //console.log(gp_speed)

  if (parseInt(bp.style.left) > screen.width * window.devicePixelRatio) {
  bp.style.left = getRandomInt(87)
  bp.style.top = getRandomInt(76)
  // if the bomb reaches the end, the game continues and the bomb resets to a random position at the start
  }

    if (Date.now() - bp_startTime > 5000) {
      bp_startTime = Date.now()
      clearInterval(bp_timer)
      bp_speed -= getRandomClickSpeed(3)  //dynamically change the interval of movement speed every xyz seconds by stopping and resetting the setInterval() with the new interval

      bp_timer = setInterval(bpRunner,bp_speed)

    }

  //Every 10 seconds, the speed of bird increases by 1-5 clicks
    bp.style.left = parseInt(bp.style.left) + 2 + 'px'} // else continue the birds right movement


}

/* Scoreboard (cilicks) (positive score) - teleports
//Mines - teleports (negative score)
//Slow/fast left-right Movement
Kill game if a bird reaches the end
Speed of birds increases by random speed as time passes
High score board
 */
