// Sempre fazer as importações no começo do arquivo
// ES Module
// import {soma, multipicacao} from "./operacoes.js"

// Chamar todas as funçoes
import div, * as operacoes from "./operacoes.js"

// Common JS
// const {soma, multipicacao} = require("./soma");

// executando
operacoes.multipicacao(5, 5);
operacoes.soma(5, 5);
div(90, 3);
