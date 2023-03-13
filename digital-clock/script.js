function time() {
    let time = new Date();

    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();

    let am_pm = "AM";

    if (hours > 12) {
        am_pm = "PM";
        hours = hours - 12;
    } else {
        am_pm = "AM";
    }

    hours < 10 ? hours = "0" + hours : hours = hours;
    minutes < 10 ? minutes = "0" + minutes : minutes = minutes;
    seconds < 10 ? seconds = "0" + seconds : seconds = seconds;

    let currentTime = hours + ":" + minutes + ":" + seconds + " " + am_pm;
    document.getElementById("clock").innerHTML = currentTime;
}

time();
setInterval(time, 1000);