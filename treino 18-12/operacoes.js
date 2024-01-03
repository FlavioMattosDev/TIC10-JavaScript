function soma (a, b) {
    let op = a * b;
    console.log("O resultado da operação é: " + op);
}

function multipicacao (a, b){
    let op = a * b;
    console.log("O resultado da operação é: " + op);
}

// arrow function
const div = (a, b) => {
    let op = a / b;
    console.log("O resultado da operação é: " + op);
}

// Common JS
// module.exports = {soma, multipicacao}

// ES Module
export{soma, multipicacao}
export default div