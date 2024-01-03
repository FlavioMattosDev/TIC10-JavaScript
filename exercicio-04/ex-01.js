const products = [
  {
    id: 1,
    name: "Jogo de Panelas",
    price: 54.59,
  },
  {
    id: 2,
    name: "Chocolate L",
    price: 14.99,
  },
  {
    id: 3,
    name: "Sabão Lili",
    price: 29.99,
  },
];

function showProductsInfo() {
  if (products == "") {
    console.log("A lista não possui produtos!");
  } else if (!Array.isArray(products)) {
    console.log("O parâmetro deve ser uma lista!");
  } else {
    for (let i = 0; i < products.length; i++) {
      console.log(`Id do produto: ${products[i].id}`);
      console.log(`Nome do produto: ${products[i].name}`);
      console.log(`Preço do produto: R$ ${products[i].price}`);
      console.log("-----====================-----");
    }
  }
}

showProductsInfo();

