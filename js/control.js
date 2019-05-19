const tools = ["rock","paper","scissors"]
const method = [
    { "user": "rock"    , "com": "paper"    , "result": false },
    { "user": "rock"    , "com": "scissors" , "result": true },
    { "user": "paper"   , "com": "scissors" , "result": false },
    { "user": "paper"   , "com": "rock"     , "result": true },
    { "user": "scissors", "com": "paper"    , "result": true },
    { "user": "scissors", "com": "rock"     , "result": false },
    { "user": "paper"   , "com": "paper"    , "result": null },
    { "user": "scissors", "com": "scissors" , "result": null },
    { "user": "rock"    , "com": "rock"     , "result": null },
]       
let user = ""
let com = ""
let scorePlayer = [0,0]
let result = ""
let score = "0 : 0";

function clickAction(action) {
    user = action
    com = tools[randomComputer()]
    showAnswer()
    Decided()
    if(result!=null) {
        if(result) {
            scorePlayer[0] += 1; 
            document.getElementById("textResult").innerHTML = "Win"
        }else{
            scorePlayer[1] += 1;
            document.getElementById("textResult").innerHTML = "Loser"
        }
    }else{
        document.getElementById("textResult").innerHTML = "Equal"
    }
    show()
}

function show() {
    score = scorePlayer[0] + " : " + scorePlayer[1]
    document.getElementById("textScore").innerHTML = score
}

function showAnswer() {
    switch (com) {
        case "rock":
            document.getElementById("showAnswer").src = "./img/rock.png"
            break;
        case "paper":
            document.getElementById("showAnswer").src = "./img/paper.png"
            break;
        case "scissors":
            document.getElementById("showAnswer").src = "./img/scissors.jpg"
            break;
        default:
            document.getElementById("showAnswer").src = "./img/Start.png"
            break;
    }
}

function Decided() {
    method.forEach(element => {
        if(element.user==user&&element.com==com) {
            result = element.result
        }
    })
    user = ""
    com = ""
}

function resetScore() {
    document.getElementById("showAnswer").src = "./img/Start.png"
    scorePlayer[0] = 0
    scorePlayer[1] = 0
    score = "0 : 0"
    user = ""
    com = ""
    document.getElementById("textScore").innerHTML = score
    document.getElementById("textResult").innerHTML = ""
}

function randomComputer() {
    let r = Math.floor(Math.random() * (3 - 0)) + 0;
    return r
}