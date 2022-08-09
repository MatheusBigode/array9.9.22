/*var numbers = [2,4,9];

var roots = numbers.map(Math.sqrt);

console.log(roots)

var numeros = [1, 23, 43, 765, 4343, 535, 87, 454, 564, 43553, 6344, 23454, 23, 523, 52, 54]

var dobro = numeros.map(function dobrar(numeros){
    return numeros * 2
})

 console.log(dobro)*/

produtos = [
    {nome: "Banana", preco: 5.60},
    {nome: "Damasco", preco: 20},
    {nome: "Pera", preco: 10.50},
    {nome: "Abacate", preco: 7.80},
    {nome: "Maçã", preco: 6},
    {nome: "Uva", preco: 11.90},
    {nome: "Bergamota", preco: 6.70},
    {nome: "Romã", preco: 15.40},
]

produtos.push({nome:"Pera", preco: 10.50})
//console.table(produtos)
//produtos.map((p) => console.log("Preço: " + p.preco))

//produtosCaros = produtos.filter((p) => p.preco >= 10)
//console.log(produtosCaros)

totalProdutos = produtos.map((p) => p.preco)
                .reduce((previous, current) => previous + current)

//console.log(totalProdutos)


totalMuitoCaro = produtos.filter(p => p.preco > 10)
                .map(p => p.preco)
                .reduce((previous, current) => previous + current)

//console.log(totalMuitoCaro)

console.log(`A soma de todos os produtos é de R$${totalProdutos}!`)
console.log(`A soma dos produtos mais caros (acima de R$20,00) é de R$${totalMuitoCaro}!`)

