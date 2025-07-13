let turn = 'x';
let title = document.querySelector('.title');
let squares = [];
let gameOver = false; 

function winner() {
    for (let i = 1; i < 10; i++) {
        squares[i] = document.getElementById('item' + i).innerHTML;
    }

    if (squares[1] == squares[2] && squares[2] == squares[3] && squares[1] != '') {
        title.innerHTML = '<span>' + squares[1] + '</span> Won';
        document.getElementById('item1').style.backgroundColor = 'red';
        document.getElementById('item2').style.backgroundColor = 'red';
        document.getElementById('item3').style.backgroundColor = 'red';
        gameOver = true; 
        setInterval(() => { title.innerHTML += '.'; }, 1000);
        setTimeout(() => { location.reload() }, 3000);
    }
    if (squares[4] == squares[5] && squares[5] == squares[6] && squares[4] != '') {
        title.innerHTML = '<span>' + squares[4] + '</span> Won';
        document.getElementById('item4').style.backgroundColor = 'red';
        document.getElementById('item5').style.backgroundColor = 'red';
        document.getElementById('item6').style.backgroundColor = 'red';
        gameOver = true;
        setInterval(() => { title.innerHTML += '.'; }, 1000);
        setTimeout(() => { location.reload() }, 3000);
    }
    if (squares[7] == squares[8] && squares[8] == squares[9] && squares[7] != '') {
        title.innerHTML = '<span>' + squares[7] + '</span> Won';
        document.getElementById('item7').style.backgroundColor = 'red';
        document.getElementById('item8').style.backgroundColor = 'red';
        document.getElementById('item9').style.backgroundColor = 'red';
        gameOver = true;
        setInterval(() => { title.innerHTML += '.'; }, 1000);
        setTimeout(() => { location.reload() }, 3000);
    }
    if (squares[1] == squares[5] && squares[5] == squares[9] && squares[1] != '') {
        title.innerHTML = '<span>' + squares[1] + '</span> Won';
        document.getElementById('item1').style.backgroundColor = 'red';
        document.getElementById('item5').style.backgroundColor = 'red';
        document.getElementById('item9').style.backgroundColor = 'red';
        gameOver = true;
        setInterval(() => { title.innerHTML += '.'; }, 1000);
        setTimeout(() => { location.reload() }, 3000);
    }
    if (squares[3] == squares[5] && squares[5] == squares[7] && squares[3] != '') {
        title.innerHTML = '<span>' + squares[3] + '</span> Won';
        document.getElementById('item3').style.backgroundColor = 'red';
        document.getElementById('item5').style.backgroundColor = 'red';
        document.getElementById('item7').style.backgroundColor = 'red';
        gameOver = true;
        setInterval(() => { title.innerHTML += '.'; }, 1000);
        setTimeout(() => { location.reload() }, 3000);
    }
    if (squares[1] == squares[4] && squares[4] == squares[7] && squares[1] != '') {
        title.innerHTML = '<span>' + squares[1] + '</span> Won';
        document.getElementById('item1').style.backgroundColor = 'red';
        document.getElementById('item4').style.backgroundColor = 'red';
        document.getElementById('item7').style.backgroundColor = 'red';
        gameOver = true;
        setInterval(() => { title.innerHTML += '.'; }, 1000);
        setTimeout(() => { location.reload() }, 3000);
    }
    if (squares[2] == squares[5] && squares[5] == squares[8] && squares[2] != '') {
        title.innerHTML = '<span>' + squares[2] + '</span> Won';
        document.getElementById('item2').style.backgroundColor = 'red';
        document.getElementById('item5').style.backgroundColor = 'red';
        document.getElementById('item8').style.backgroundColor = 'red';
        gameOver = true;
        setInterval(() => { title.innerHTML += '.'; }, 1000);
        setTimeout(() => { location.reload() }, 4000);
    }
    if (squares[3] == squares[6] && squares[6] == squares[9] && squares[3] != '') {
        title.innerHTML = '<span>' + squares[3] + '</span> Won';
        document.getElementById('item3').style.backgroundColor = 'red';
        document.getElementById('item6').style.backgroundColor = 'red';
        document.getElementById('item9').style.backgroundColor = 'red';
        gameOver = true;
        setInterval(() => { title.innerHTML += '.'; }, 1000);
        setTimeout(() => { location.reload() }, 4000);
    }
}

function game(id) {
    if (gameOver) return; 

    let e = document.getElementById(id);
    console.log(id);
    if (turn === 'x' && e.innerHTML === '') {
        e.innerHTML = 'x';
        title.innerHTML = '<span>O</span> Turn';
        turn = 'o';
    }
    if (turn === 'o' && e.innerHTML === '') {
        e.innerHTML = 'o';
        title.innerHTML = '<span>X</span> Turn';
        turn = 'x';
    }
    winner();
}
