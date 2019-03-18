// We have a variable let declaring kelvin equals 293;
let kelvin = 0;

// Celsius is less than kevlin so we will subtract 273 from kelvin to have a new value.
let celsius = kelvin - 293;

// converting celsius into newton
let newton = celsius * (33/100);
newton = Math.floor(newton);
console.log(`The temperature is ${newton} degrees Newton`);

// converting celsius to fahrenheit
let fahrenheit = celsius * (9/5) + 32;

// Rounding down the decimal of fahrenheit
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);
