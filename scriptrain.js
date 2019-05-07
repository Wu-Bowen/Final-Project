        let umbrella = document.getElementById('umbrella');
        let rain = document.getElementById('rain');
        var boolean = true;

        function flipRain() {
            if (boolean) {
                rain.style.background = "url('rain2.png')";
                rain.style.animationName = "rain2";
                boolean = false;
            } else {
                rain.style.background = "url('rain.png')";
                rain.style.animationName = "rain";
                boolean = true;
            }
        }


        umbrella.addEventListener("click", flipRain);