class Temperature {
    constructor(Celcius, Fahrenheit) {
        this._Celcius = 0;
        this._Fahrenheit = 32;
    }
    get getCelcius() {
        return this._Celcius;
    }
    set setCelcius(value) {
        if (typeof value == 'number') {
            this._Celcius += value;
            this._Fahrenheit += value * 9 / 5;
        }
        else {
            console.error("Value must be an Error");
        }
    }

    get getFahrenheit() {
        return this._Fahrenheit;
    }
    set setFahrenheit(value) {
        if (typeof value == 'number') {
            this._Fahrenheit = value;
            this._Celsius = (value - 32) * 5 / 9;
        }
        else {
            console.error("Value must be an Error");
        }
    }
}

const temperature = new Temperature()

console.log(`Initial Celcius: ${temperature.getCelcius}°C`); // Output: Initial Celcius
console.log(`Initial Fahenheit: ${temperature.getFahrenheit}°F`); // Output: Initial Fahrenheit

temperature.setCelcius = 25;
console.log(`Updated Celcius: ${temperature.getCelcius}°C`);
console.log(`Updated Fahenheit: ${temperature.getFahrenheit}°F`);

temperature.setFahrenheit = 68
console.log(`Updated Celcius: ${temperature.getCelcius}°C`);
console.log(`Updated Fahenheit: ${temperature.getFahrenheit}°F`);