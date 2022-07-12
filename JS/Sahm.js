// const stocks = [
//     {
//         name: "Electric Khodro",
//         price: 12912,
//     },
//     {
//         name: "Iran Khodro",
//         price: 15218,
//     },
//     {
//         name: "Iran arghaam",
//         price: 8853,
//     },
//     // ...
// ];


export function getHighestPrice(stocks) {
    if (stocks.length === 0) {
        return null;
    }
    var str1 = stocks[0].name;
    var price = stocks[0].price;

    for (let i = 1; i < stocks.length; i++) {
        if (stocks[i].price > price) {
            price = stocks[i].price;
            str1 = stocks[i].name;
        }
    }

    return str1;
}

// console.log(getHighestPrice(stocks)); // "Iran Khodro"