var _; // globals

describe("About Applying What We Have Learnt", function() {
  var products;

  beforeEach(function () { 
    products = [
       { name: "Sonoma", ingredients: ["artichoke", "sundried tomatoes", "mushrooms"], containsNuts: false },
       { name: "Pizza Primavera", ingredients: ["roma", "sundried tomatoes", "goats cheese", "rosemary"], containsNuts: false },
       { name: "South Of The Border", ingredients: ["black beans", "jalapenos", "mushrooms"], containsNuts: false },
       { name: "Blue Moon", ingredients: ["blue cheese", "garlic", "walnuts"], containsNuts: true },
       { name: "Taste Of Athens", ingredients: ["spinach", "kalamata olives", "sesame seeds"], containsNuts: true }
    ];
  });

  /*********************************************************************************/

  it("given I'm allergic to nuts and hate mushrooms, it should find a pizza I can eat (imperative)", function () {
    var i,j,hasMushrooms, productsICanEat = [];

    for (i = 0; i < products.length; i+=1) {
        if (products[i].containsNuts === false) {
            hasMushrooms = false;
            for (j = 0; j < products[i].ingredients.length; j+=1) {
               if (products[i].ingredients[j] === "mushrooms") {
                  hasMushrooms = true;
               }
            }
            if (!hasMushrooms) productsICanEat.push(products[i]);
        }
    }

    expect(productsICanEat.length).toBe(1);
  });

  it("given I'm allergic to nuts and hate mushrooms, it should find a pizza I can eat (functional)", function () {
      var productsICanEat = [];

      /* solve using filter() & all() / any() */
      products.filter(function(pizza){
        if (!pizza.ingredients.includes('mushrooms') && pizza.containsNuts === false){
          productsICanEat.push(pizza.name)
        }
      });

      expect(_(productsICanEat).all(function(){
        if (productsICanEat[0] === "Pizza Primavera"){
          return true;
        }
      })).toBe(true)
      // expect(_(onlyEven).all(isEven)).toBe(true);
      expect(productsICanEat.length).toBe(1);
  });

  /*********************************************************************************/

  it("should add all the natural numbers below 1000 that are multiples of 3 or 5 (imperative)", function () {
    var sum = 0;

    for(var i=1; i<1000; i+=1) {
      if (i % 3 === 0 || i % 5 === 0) {
        sum += i;
      }
    }
    
    expect(sum).toBe(233168);
  });

  it("should add all the natural numbers below 1000 that are multiples of 3 or 5 (functional)", function () {
     /* try chaining range() and reduce() */

    const range = (start, end, step) => {

      return Array.from(Array.from(Array(Math.ceil((end-start)/step)).keys()), x => start+ x*step);
  
    }
    var sum = range(1,1000,1).reduce(function (accumulator, currentValue) {
      var int = 0
      if (currentValue % 3 === 0 || currentValue % 5 === 0) {
        int = currentValue
      } else {
        int = 0
      }
      return accumulator + int;
    }, 0);

    expect(233168).toBe(sum);
  });

  /*********************************************************************************/
   it("should count the ingredient occurrence (imperative)", function () {
    var ingredientCount = { "{ingredient name}": 0 };

    for (i = 0; i < products.length; i+=1) {
        var pizza = products[i]
        for (var x=0;x<pizza.ingredients.length;x++){
          if (ingredientCount.hasOwnProperty(pizza.ingredients[x])){
            ingredientCount[pizza.ingredients[x]]++
          } else {
            ingredientCount[pizza.ingredients[x]] = 1
          }
        }
    }

    expect(ingredientCount['mushrooms']).toBe(2);
  });

  it("should count the ingredient occurrence (functional)", function (topping) {
    // var ingredientCount = { "{ingredient name}": 0 };
    var ingredients = []
    products.map(function(obj){
      ingredients.push(obj.ingredients);
    })

    var arr = _.flatten(ingredients)
    
    return arr.reduce((n, x) => n + (x === topping), 0);

    expect('mushrooms').toBe(2);
    expect('sundried tomatoes').toBe(2);
  });


  /*********************************************************************************/
  /* UNCOMMENT FOR EXTRA CREDIT */
  /*
  it("should find the largest prime factor of a composite number", function () {
  
  });

  it("should find the largest palindrome made from the product of two 3 digit numbers", function () {
    
  });

  it("should find the smallest number divisible by each of the numbers 1 to 20", function () {
      
    
  });

  it("should find the difference between the sum of the squares and the square of the sums", function () {
    
  });

  it("should find the 10001st prime", function () {

  });
  */
});
