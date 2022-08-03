const container = document.querySelector('#container');


// Create divs in container
for (let i = 0; i < 16; i++) {
    let div = document.createElement('div');
    div.id = i + 1;
    container.appendChild(div);
}
