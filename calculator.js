const inner_container = document.querySelector('.inner-container')

function buildGrid(){
    for (let i = 1; i <= 16; i++){
        const cell = document.createElement('div')
        cell.classList.add('cell')
        cell.style.width = '83px';
        cell.style.height = '83px';
        inner_container.appendChild(cell)
    }
}

buildGrid()