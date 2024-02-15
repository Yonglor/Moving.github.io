var hellow = document.getElementById("dism");

function shoes() {
    alert("구매 완료!")
    money -= 2000
    hellow.innerHTML = money;
    document.addEventListener('keydown',function letgo3(event) {
        if (event.key === 'w' || event.key === 'W') {
            money += 1;
        ballPosition.y -= 30;
        moveBall();
        hellow.innerHTML = money;
    }
})

document.addEventListener('keydown', function letgo2(event) {
        if (event.key === 's' || event.key === 'S') {
        ballPosition.y += 30;
        moveBall();
        money += 1;
        hellow.innerHTML = money;
    }
})

document.addEventListener('keydown', function letgo1(event) {
        if (event.key === 'a' || event.key === 'A') {
        ballPosition.x -= 30;
        moveBall();
        money += 1;
        hellow.innerHTML = money;
    }
})
document.addEventListener('keydown', function finallyIfoundit(event) {
    if (event.key === 'd' || event.key === 'D') {
        ballPosition.x += 30;
        moveBall();
        money += 1;
        hellow.innerHTML = money;
    }
})
}

function qwe() {
    alert("돈부터 벌어오자!")
}