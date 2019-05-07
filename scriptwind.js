    var x = document.getElementById("tree");
    var y = document.getElementById("fallingLeaves");
    var boolean = true;


    function disappear() {
        if (boolean) {
            x.style.animation = "disappear 3s forwards";
            y.style.animation = "disappear 3s forwards";
            boolean = false;
        } else {
            x.style.animation = "appear 3s forwards";
            y.style.animation = "appear 3s forwards";
            boolean = true;
        }

    }

    document.addEventListener("click", disappear);
    document.addEvent