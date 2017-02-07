//create grocery item ojbects
var item1 = {
  name: "milk",
  price: 3.00,
};

var item2 = {
  name: "eggs",
  price: 2.50,
};

var item3 = {
    name: "bread",
    price: 2.75,
};

//store objects in an array
var shoppingList = [item1, item2, item3];

//creating new object
var item4 = {
  name: "beer",
  price: 9.95,
};

//adding new object to array
shoppingList.push(item4);

//loop through array, print object name and price
shoppingList.forEach(function(i){
  console.log(i.name);
  var dollar = i.price;
  console.log(dollar.toLocaleString('us-US', { style: 'currency', currency: 'USD' }));
  console.log("");
});

var total = 0;

//total up the amount of the objects' combined prices
shoppingList.forEach(function(j){
  return total += j.price
});
console.log("Total = " + total.toLocaleString('us-US', { style: 'currency', currency: 'USD' }));
