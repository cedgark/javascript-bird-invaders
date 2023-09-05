let score = document.querySelector("#score")
let body_element = document.querySelector("body")

let game_score = sessionStorage.getItem('game_score')

score.innerHTML = game_score // For every click, the score increases
