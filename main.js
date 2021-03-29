canvas = document.getElementById("canvas")
ctx = canvas.getContext("2d")
roverx = 100
rovery = 100
rover = "rover.png"
background = "mars.jpg"

function add () {
    bg = new Image()
    bg.src = background
    bg.onload = uploadBackground

    rvrimg = new Image()
    rvrimg.src = rover
    rvrimg.onload = uploadrvr
}
function uploadBackground () {
    ctx.drawImage(bg, 0, 0, canvas.width, canvas.height)
}

function uploadrvr () {
    ctx.drawImage(rvrimg, roverx, rovery, 100, 100)
}
window.addEventListener("keydown", kd)

function kd (e) {
    x = e.keyCode
    console.log(x)

    if (x == 37) {
        left()
    }
    if (x == 38) {
        up()
    }
    if (x == 39) {
        right()
    }
    if (x == 40) {
        down()
    }
}