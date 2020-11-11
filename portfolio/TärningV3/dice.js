function shuffleDice() {
    
    let time = 0;

    document.getElementById("click-to-roll").style.display = "none";

    for (let i = 0; i < 10; i++) {
        setTimeout(function() {resetDice() }, time );
        time += 200;
        setTimeout(function() {diceAnimation()} , time);
        time += 200;
    }

    document.getElementById("dice").onclick = function(){ shuffleDice() };

}

function diceAnimation(){

    document.getElementById("click-to-roll").style.display = "none";
    document.getElementById("blank").style.display = "none";

    let value = Math.floor(Math.random() * 6);
    
    if (value === 0) {
        x = document.getElementById("one").style.display = "grid";
    }
    else if (value === 1) {
        x = document.getElementById("two").style.display = "grid";
    }
    else if (value === 2) {
        x = document.getElementById("three").style.display = "grid";
    }
    else if (value === 3) {
        x = document.getElementById("four").style.display = "grid";
    }
    else if (value === 4) {
        x = document.getElementById("five").style.display = "grid";
    }
    else if (value === 5) {
        x = document.getElementById("six").style.display = "grid";
    }

}

function resetDice() {
    document.getElementById("one").style.display = "none";
    document.getElementById("two").style.display = "none";
    document.getElementById("three").style.display = "none";
    document.getElementById("four").style.display = "none";
    document.getElementById("five").style.display = "none";
    document.getElementById("six").style.display = "none"; 
    document.getElementById("blank").style.display = "grid";
}