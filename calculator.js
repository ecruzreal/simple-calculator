const inner_container = document.querySelector('.inner-container')


//initalize the number pad on the calculator
function buildGrid(){
    for (let i = 1; i <= 16; i++){
        const cell = document.createElement('button')
        cell.classList.add('cell')
        cell.style.width = '75px';
        cell.style.height = '75px';

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

const display = document.querySelector('#display')
const buttons = document.querySelectorAll('.cell')
const clear = document.querySelector('#clear')
const nums = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
const operators = ['+', '-', '/', '×']
let second_num = false;

const expression_state = {num1: '', operator: '', num2: '', result: ''}

clear.addEventListener('click', () => {
    display.innerHTML = '';
    expression_state.num1 = '';
    expression_state.num2 = '';
    expression_state.operator = '';
    expression_state.result = '';
})

function handleInput(event){
    if (display.textContent === 'no can do'){
        display.innerHTML = ''
    }
    let value = event.target.textContent
    let display_num = display.innerHTML

    if (nums.includes(value) && (display_num === '0') || (display_num === '') && nums.includes(value)){
        display.textContent = value
    } else if (nums.includes(value) && expression_state.operator === ''){
        if (expression_state.result !== ''){
            display.textContent = value
            expression_state.result = ''
        } else {
            display.textContent += value
        }
    } else if (nums.includes(value)){
        if (second_num === true){
            display.innerHTML = ''
            second_num = false
        }
        display.textContent += value
        expression_state.num2 = display.textContent
    } else if (operators.includes(value)){
        if (expression_state.num1 !== '' && expression_state.operator === ''){
            expression_state.operator = value
            second_num = true
            console.log(expression_state)
        } else if (expression_state.num1 === ''){
            expression_state.num1 = display.textContent
            expression_state.operator = value
            second_num = true
            console.log(expression_state)
        } else if (expression_state.num1 !== '' && expression_state.operator !== '' &&
                    expression_state.num2 !== ''){
                console.log(expression_state)
                result = evaluateExpression(expression_state)
                second_num = true
                expression_state.num2 = ''
                expression_state.operator = value
                
                if (result !== ''){
                    display.textContent = result
                    expression_state.num1 = result
                } else {
                    expression_state.num1 = ''
                }
         }
    } else if (value === '='){
        if (expression_state.num1 !== '' && expression_state.num2 !== ''
         && expression_state.operator !== ''){
            result = evaluateExpression(expression_state)
            if (result !== ''){
                display.textContent = result
                expression_state.result = result 
            }
            expression_state.num1 = ''
            expression_state.num2 = ''
            expression_state.operator = ''
         }
    } else if (value === '.'){
        if (!(display.textContent.includes('.'))){
            display.textContent += value
        }
    }


}

function doAdd(expression){
    return Number(expression.num1) + Number(expression.num2)
}

function doSub(expression){
    return Number(expression.num1) - Number(expression.num2)
}

function doDiv(expression){
    if (expression.num2 === '0'){
        display.textContent =  'no can do'
        return ''
    }
    return Number(expression.num1) / Number(expression.num2)
}

function doMul(expression){
    return Number(expression.num1) * Number(expression.num2)
}

function evaluateExpression(expression){
    const oper = expression.operator
    let result
    if (oper === '+'){
        result = doAdd(expression)
    } else if (oper === '-'){
        result = doSub(expression)
    } else if (oper === '/'){
        result = doDiv(expression)
    } else {
        result = doMul(expression)
    }

    return result
}

buttons.forEach(button =>{
    button.addEventListener('click', handleInput)
})

