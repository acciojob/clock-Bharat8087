//your JS code here. If required.
 updateTimer() {
            var now = new Date();
            var dateTimeString = now.toLocaleString();
            document.getElementById('timer').textContent = dateTimeString;
        }

        updateTimer();
        setInterval(updateTimer, 1000);