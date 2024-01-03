function soma(n1, n2) {
    return n1 + n2;
}

function sub (n1, n2) {
    return n1 - n2;
}

function mult (n1, n2) {
    return n1 * n2;
}

function div (n1, n2) {
    return n1 * n2;
}

function imprimir (n1, n2, operacao) {
    console.log(operacao(n1, n2))
}

imprimir(10, 5, soma);
imprimir(50, 5, sub);
imprimir(3, 10, mult);
imprimir(3, 15, div);