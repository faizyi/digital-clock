
var date = new Date
var convert = date.toString()
var copy = convert.slice(0,15)
document.getElementById('date').copy
document.write(copy)

function updateTime() {
    var time = new Date();
    var hours = time.getHours().toString().padStart(0);
    var minutes = time.getMinutes().toString().padStart(0);
    var seconds = time.getSeconds().toString().padStart(0);

    var timeString = `${hours}:${minutes}:${seconds}`;
    document.getElementById('time').textContent = timeString;
}

setInterval(updateTime)






