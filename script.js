let time = 0, isRunning = false, interval, sessions = 0;
        function updateTimer() {
            let minutes = Math.floor(time / 60);
            let seconds = time % 60;
            document.getElementById("timer").innerText = minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
        }
        function startTimer() {
            let customMinutes = document.getElementById("customTime").value;
            if (customMinutes && !isRunning) {
                time = customMinutes * 60;
                updateTimer();
            }
            if (!isRunning) {
                isRunning = true;
                interval = setInterval(function() {
                    if (time > 0) {
                        time--;
                        updateTimer();
                    } else {
                        clearInterval(interval);
                        isRunning = false;
                        sessions++;
                        document.getElementById("sessions").innerText = sessions;
                        alert("Time's up!");
                    }
                }, 1000);
            }
        }
        function pauseTimer() {
            clearInterval(interval);
            isRunning = false;
        }
        function resumeTimer() {
            if (!isRunning && time > 0) {
                isRunning = true;
                interval = setInterval(function() {
                    if (time > 0) {
                        time--;
                        updateTimer();
                    } else {
                        clearInterval(interval);
                        isRunning = false;
                        sessions++;
                        document.getElementById("sessions").innerText = sessions;
                        alert("Time's up!");
                    }
                }, 1000);
            }
        }
        function resetTimer() {
            clearInterval(interval);
            isRunning = false;
            time = 0;
            updateTimer();
        }
        updateTimer();