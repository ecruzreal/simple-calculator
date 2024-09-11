const inner_container = document.querySelector('.inner-container')

function buildGrid(){
    for (let i = 1; i <= 16; i++){
        const cell = document.createElement('button')
        cell.classList.add('cell')
        cell.style.width = '83px';
        cell.style.height = '83px';

        if (i === 4){
            cell.textContent = '+';
        } else if (i === 1){
            cell.textContent = '1';
        } else if (i === 2){
            cell.textContent = '2';
        } else if (i === 3){
            cell.textContent = '3';
        } else if (i === 5){
            cell.textContent = '4';
        } else if (i === 6){
            cell.textContent = '5';
        } else if (i === 7){
            cell.textContent = '6';
        } else if (i === 8){
            cell.textContent = '-';
        } else if (i === 9){
            cell.textContent = '7';
        } else if (i === 10){
            cell.textContent = '8';
        } else if (i === 11){
            cell.textContent = '9';
        } else if (i === 12){
            cell.textContent = '×';
        } else if (i === 13){
            cell.textContent = '0';
        } else if (i === 14){
            cell.textContent = '.';
        } else if (i === 15){
            cell.textContent = '=';
        } else if (i === 16){
            cell.textContent = '/';
        } 
        
        inner_container.appendChild(cell)
    }
}

buildGrid()