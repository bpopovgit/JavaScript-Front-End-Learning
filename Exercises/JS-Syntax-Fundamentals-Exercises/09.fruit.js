function solve(fruit, weightInGrams, pricePerKilo) {
    weightInKilos = weightInGrams / 1000; 
    moneyNeeded = pricePerKilo * weightInKilos;
    console.log(`I need $${moneyNeeded.toFixed(2)} to buy ${weightInKilos.toFixed(2)} kilograms ${fruit}.`);
}

solve('orange', 2500, 1.80);
