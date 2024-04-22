let updateTimer = () => {
    let now = new Date();
    let dateTimeString = now.toLocaleString();
    document.getElementById('timer').textContent = dateTimeString;
};

updateTimer();
setInterval(updateTimer, 1000);
