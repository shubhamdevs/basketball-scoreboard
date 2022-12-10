let homeStoreEl =document.getElementById("home-score")
let homeScore = 0

function increaseHomeScoreOne(){
    homeScore += 1
    homeStoreEl.textContent = homeScore
}

function increaseHomeScoreTwo() {
    homeScore += 2
    homeStoreEl.textContent = homeScore
}

function increaseHomeScoreThree() {
    homeScore += 3
    homeStoreEl.textContent = homeScore
}

let gustStorEl = document.getElementById("guest-score")
let gustScore = 0

function increaseGuestScoreOne() {
    gustScore += 1
    gustStorEl.textContent = gustScore
}
function increaseGuestScoreTwo() {
    gustScore += 2
    gustStorEl.textContent = gustScore
}
function increaseGuestScoreThree() {
    gustScore += 3
    gustStorEl.textContent = gustScore
}