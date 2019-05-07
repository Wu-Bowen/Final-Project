    let count = 1;
    let increaseLog = document.getElementById('extra');
    let decreaseLog = document.getElementById('extra2');
    let animation1 = document.getElementById('odd');
    let animation2 = document.getElementById('even');
    let background = document.getElementById("background");

    function increase() {
        if (count == 1) {
            count++;
            animation1.style.animationName = "flameodd2";
            animation2.style.animationName = "flameeven2";
            background.style.filter = "brightness(15%)";
            return;
        }
        if (count == 2) {
            count++;
            animation1.style.animationName = "flameodd3";
            animation2.style.animationName = "flameeven3";
            background.style.filter = "brightness(30%)";
            return;
        }
        if (count == 3) {
            count++;
            animation1.style.animationName = "flameodd4";
            animation2.style.animationName = "flameeven4";
            background.style.filter = "brightness(50%)";
            return;
        }
    }

    function decrease() {
        if (count == 4) {
            count--;
            animation1.style.animationName = "flameodd3";
            animation2.style.animationName = "flameeven3";
            background.style.filter = "brightness(30%)";
            return;
        }
        if (count == 3) {
            count--;
            animation1.style.animationName = "flameodd2";
            animation2.style.animationName = "flameeven2";
            background.style.filter = "brightness(15%)";
            return;
        }
        if (count == 2) {
            count--;
            animation1.style.animationName = "flameodd1";
            animation2.style.animationName = "flameeven1";
            background.style.filter = "brightness(0%)";
            return;
        }
    }

    increaseLog.addEventListener("click", increase);
    decreaseLog.addEventListener("click", decrease);