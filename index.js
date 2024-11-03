let counter = document.getElementById("counter")
let count = 18

let scoreCount = document.getElementById("score-count")
let score = 10


function add1(){
count += 1
counter.textContent = count
}

function add2(){
    count += 2
    counter.textContent = count
}

function add3(){
    count += 3
    counter.textContent = count
}


function increase1(){
    score += 1
    scoreCount.textContent = score
}

function increase2(){
    score += 2
    scoreCount.textContent = score
}

function increase3(){
    score += 3
    scoreCount.textContent = score
}
   
function newGame(){
    count = 0
    score = 0

    counter.textContent = count
     scoreCount.textContent = score
     
}