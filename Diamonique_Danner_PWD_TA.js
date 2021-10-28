// 1.
//  Using the filter method, filter out the sedans.
// output =>
//  { brand: 'Toyota', model: 'camry', type: 'sedan' },
//   { brand: 'Hyundai', model: 'Sonata', type: 'sedan' }
const carBrands = [
    { brand: "Ford", model: "mustang", type: "convertible" },
    { brand: "Toyota", model: "camry", type: "sedan" },
    { brand: "Ram", model: "1500", type: "pickup" },
    { brand: "Hyundai", model: "Sonata", type: "sedan" },
    { brand: "Jeep", model: "wrangler", type: "suv" },
    { brand: "Nissan", model: "frontier", type: "pickup" },
  ];

_filterSedans = (arr) => arr.filter(x => x.type == "sedan");

/* 2.
 * reverseString takes a string
 * and should return the reverse of the string, you cannot use .reverse method
 * e.g., reverseString('cat') => 'tac'
 */
_reverseString = (stringParam) => 
{
    var reversedString = "";
    for(var i = 0; i < stringParam.length; i++)
    {
       reversedString += stringParam[(stringParam.length - 1) - i];
       //console.log(stringParam[(stringParam.length - 1) - i]);
    }
    return reversedString;
}
 // 3.
// Using Reduce,
// Given an array of all your wishlist items, figure out
// how much it would cost to just buy everything at once
// In other words, the total of all the prices in the array
// of objects
// The output should eqaute to 227005
let wishlist = [
    { title: "tesla", price: 90000 },
    { title: "tesla", price: 45000 },
    { title: "tesla", price: 5 },
    { title: "tesla", price: 2000 },
    { title: "tesla", price: 90000 },
  ];
  
    const reducer = (previousValue,currentValue) =>
    {
      return previousValue + currentValue.price
    }

  function shop(arr) {
      return arr.reduce(reducer, wishlist[0].price)
  }


  // 4.
//Explain recursion in your own words,
// give an example of a recursive algorithm, and explain how it works
//Make sure to detail the steps that make up a recursive algorithm
// A detailed explanation.
// Recursion is a function's ability to repeatedly call itself based on a condition programmed with the function itself. It repeats when the condition is met or exits the function when the condition fails using current case/parameters given. 