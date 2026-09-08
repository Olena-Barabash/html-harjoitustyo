const canvas = document.getElementById("piirustustaulu");
const btnVariValitsin = document.getElementById("btn-vari");
const btnTyhjenna = document.getElementById("btn-tyhjenna");

const ctx = canvas.getContext("2d");
const canvasRect = canvas.getBoundingClientRect();
const lineWidth = 2;

let piirtaa = false;

ctx.strokeStyle = btnVariValitsin.value;
ctx.lineWidth = lineWidth;

let x, y;

canvas.addEventListener("mousedown", function (event) {
    piirtaa = true;

    x = event.clientX - canvasRect.left;
    y = event.clientY - canvasRect.top;

    ctx.beginPath();
    ctx.moveTo(x, y);
});

canvas.addEventListener("mousemove", function (event) {
    if (piirtaa) {
        x = event.clientX - canvasRect.left;
        y = event.clientY - canvasRect.top;

        ctx.lineTo(x, y);
        ctx.stroke();
    }
});

canvas.addEventListener("mouseup", function (event) {
    piirtaa = false;
});

btnVariValitsin.addEventListener("input", () => {
    ctx.strokeStyle = btnVariValitsin.value;
});

btnTyhjenna.addEventListener("click", function () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});

function muutaPiirtoalustanKoko() {
    canvas.width = canvas.parentElement.clientWidth - 4; // **4 – reunuksen leveys pikseleinä**
    canvas.height = canvas.parentElement.clientHeight - 4; // **4 – reunuksen leveys pikseleinä**
    ctx.strokeStyle = btnVariValitsin.value;
}

muutaPiirtoalustanKoko();

window.addEventListener("resize", muutaPiirtoalustanKoko);
