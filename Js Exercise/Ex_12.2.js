const candyStore = {
  candies: [
    {
      name: "mint gum",
      id: "as12f",
      price: 2,
      amount: 2,
    },
    {
      name: "twix",
      id: "5hd7y",
      price: 5,
      amount: 4,
    },
  ],
  cashRegister: 200,
};

function getCandy(candyStore, id) {
  const output = candyStore.candies.filter((candy) => {
    return candy.id === id;
  });
  return output;
}
console.log(getCandy(candyStore, "5hd7y"));

function getPrice(candyStore, id) {
  return getCandy(candyStore, id)[0].price;
}
console.log(getPrice(candyStore, "5hd7y"));

function addCandy(candyStore, id, name, price) {
  let newCandy = { name: name, id: id, price: price, omount: 1 };
  candyStore.candies.push(newCandy);
}
addCandy(candyStore, "jhbjh", "Twizlers", 5);
console.log(candyStore.candies);

function buy(candyStore, id) {
    function compare(candy) {
        return candy.id === id;
    }
    const index = candyStore.candies.findIndex(compare)
    console.log(index);
    candyStore.candies[index].amount--;
    candyStore.cashRegister += candyStore.candies[index].price;
}
buy(candyStore, "as12f");
console.log(candyStore);
