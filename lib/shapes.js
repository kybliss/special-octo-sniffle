class Shape {
    constructor(text, shapeColor, textColor) {
        this.text = text;
        this.shapeColor = shapeColor;
        this.textColor = textColor;
    }
    render(){
        return "Child constructor must have a render function.";
    }
}

class Circle extends Shape {
    constructor(text, shapeColor, textColor) {
        super(text, shapeColor, textColor)
    }
    render(){
        return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"><circle cx="150" cy="100" r="80" fill="${this.shapeColor}"/><text x="150" y="115" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text><link xmlns="" href="chrome-extension://lnkdbjbjpnpjeciipoaflmpcddinpjjp/mytube.css" rel="stylesheet" type="text/css"/></svg>`
    }
}

class Square extends Shape {
    constructor(text, shapeColor, textColor) {
        super(text, shapeColor, textColor)
    }
    render(){
        return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"><rect x="10" y="10" width="300" height="200" stroke="black" fill="${this.shapeColor}" stroke-width="5"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text><link xmlns="" href="chrome-extension://lnkdbjbjpnpjeciipoaflmpcddinpjjp/mytube.css" rel="stylesheet" type="text/css"/></svg>`
    }
}

class Triangle extends Shape {
    constructor(text, shapeColor, textColor) {
        super(text, shapeColor, textColor)
    }
    render(){
        return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"><polygon width="300" height="200" points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text><link xmlns="" href="chrome-extension://lnkdbjbjpnpjeciipoaflmpcddinpjjp/mytube.css" rel="stylesheet" type="text/css"/></svg>`
    }
}

module.exports = {Circle, Square, Triangle}