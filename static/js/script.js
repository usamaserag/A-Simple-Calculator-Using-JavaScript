

// function button on click print number innerHTML

function printnum(btn) {
    var value = btn.dataset.num;
    var numberOnScreen = document.getElementById('numbers');
    var dataOnScreen = numberOnScreen.innerHTML;
    var oprations = ['+', '-', '/', '*'];
    var lastChar = dataOnScreen[dataOnScreen.length - 1];
    if (!oprations.includes(lastChar) || !oprations.includes(value))
        numberOnScreen.innerHTML += value;
}

// clear screen

function clearScreen() {
    document.getElementById("numbers").textContent = " ";
}

// delete button

function deleteLast() {
    var numberOnScreen = document.getElementById('numbers');
    var dataOnScreen = numberOnScreen.innerHTML;
    var newData = dataOnScreen.slice(0, dataOnScreen.length - 1);
    numberOnScreen.innerHTML = newData;
}

// equal button

function equal() {
    var numberOnScreen = document.getElementById('numbers');
    var dataOnScreen = numberOnScreen.innerHTML;
    numberOnScreen.innerHTML = eval(dataOnScreen);
}



// eslam function
/*
const printnum = (btn) => {
    const value = btn.dataset.num;
    const numbersScreen = document.querySelector('#numbers');
    const dataOnScreen = numbersScreen.innerHTML;
    const lastChar = dataOnScreen[dataOnScreen.length - 1]
    const opretions = ['+', '-', '*', '/'];

    if (!opretions.includes(lastChar) || !opretions.includes(value)) {
        document.getElementById("numbers").innerHTML += value;
    } else {
        alert("cant use two opretions in a row!")
    }
}

const clearScreen = () => {
    document.getElementById("numbers").textContent = " ";
}

const equal = () => {
    const numbersScreen = document.querySelector('#numbers');
    const dataOnScreen = numbersScreen.innerHTML;
    const opretions = ['+', '-', '*', '/'];
    const lastChar = dataOnScreen[dataOnScreen.length - 1]

    if (dataOnScreen && !opretions.includes(lastChar)) {
        const result = eval(dataOnScreen);
        numbersScreen.innerHTML = result;
    } else {
        alert('data on screen isnt valid!')
    }
}

const deleteLastChar = () => {
    const numbersScreen = document.querySelector('#numbers');
    const dataOnScreen = numbersScreen.innerHTML;
    if (dataOnScreen) {
        const newData = dataOnScreen.slice(0, dataOnScreen.length - 1);
        numbersScreen.innerHTML = newData;
    }
}
*/