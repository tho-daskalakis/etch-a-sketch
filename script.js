const container = document.querySelector('#container');

function setGridSize(size=4) {
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    // Create divs in container
    for (let i = 0; i < size * size; i++) {
        let div = document.createElement('div');
        div.id = i + 1;
        container.appendChild(div);
    }

    const grid = document.querySelectorAll('div#container div');

    grid.forEach(
        box => box.addEventListener('mouseenter', trail, {once: true}));
}

setGridSize();

const btn = document.querySelector('#btn');
// console.log(btn);
btn.addEventListener('click', function(e) {
    let dim = prompt("Please enter the dimension for the new grid (1-100).");
    if (dim > 100) alert("Please input a value less than 100.");
    if (dim < 1 && 
        typeof dim == 'number') alert("Cannot have non-positive values.");
    if (dim == "") {
        setGridSize();
        return;
    }

    const children = container.querySelectorAll('div');
    children.forEach(child => container.removeChild(child));
    setGridSize(dim);
});

// console.log(grid);


function trail(e) {
    // console.log(e.target);
    this.classList.add('trail');
}
