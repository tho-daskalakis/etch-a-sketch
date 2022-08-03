const container = document.querySelector('#container');


// Create divs in container
for (let i = 0; i < 16; i++) {
    let div = document.createElement('div');
    div.id = i + 1;
    container.appendChild(div);
}

const grid = document.querySelectorAll('div#container div');
console.log(grid);

grid.forEach(box => box.addEventListener('mouseenter', trail, {once: true}));

function trail(e) {
    console.log(e.target);
    this.classList.add('trail');
}
