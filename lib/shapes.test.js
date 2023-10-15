const {Circle, Square, Triangle} = require("./shapes.js");
describe("Shape", () => {
    describe("Circle", () => {
        const circle = new Circle("svg", "white", "black")
        test("Testing for text.", () => {
            expect(circle.text).toEqual("svg");
        })
        test("Testing for textColor.", () => {
            expect(circle.textColor).toEqual("black");
        })
        test("Testing for shapeColor.", () => {
            expect(circle.shapeColor).toEqual("white");
        })
        test("Testing the render.", () => {
            expect(circle.render()).toEqual(`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"><circle cx="150" cy="100" r="80" fill="white"/><text x="150" y="115" font-size="60" text-anchor="middle" fill="black">svg</text><link xmlns="" href="chrome-extension://lnkdbjbjpnpjeciipoaflmpcddinpjjp/mytube.css" rel="stylesheet" type="text/css"/></svg>`)
        })
    })
    describe("Square", () => {
        const square = new Square("svg", "white", "black")
        test("Testing for text.", () => {
            expect(square.text).toEqual("svg");
        })
        test("Testing for textColor.", () => {
            expect(square.textColor).toEqual("black");
        })
        test("Testing for shapeColor.", () => {
            expect(square.shapeColor).toEqual("white");
        })
        test("Testing the render.", () => {
            expect(square.render()).toEqual(`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"><rect x="10" y="10" width="300" height="200" stroke="black" fill="white" stroke-width="5"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="black">svg</text><link xmlns="" href="chrome-extension://lnkdbjbjpnpjeciipoaflmpcddinpjjp/mytube.css" rel="stylesheet" type="text/css"/></svg>`)
        })
    })
    describe("Triangle", () => {
        const triangle = new Triangle("svg", "white", "black")
        test("Testing for text.", () => {
            expect(triangle.text).toEqual("svg");
        })
        test("Testing for textColor.", () => {
            expect(triangle.textColor).toEqual("black");
        })
        test("Testing for shapeColor.", () => {
            expect(triangle.shapeColor).toEqual("white");
        })
        test("Testing the render.", () => {
            expect(triangle.render()).toEqual`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"><polygon width="300" height="200" points="150, 18 244, 182 56, 182" fill="white" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="black">svg</text><link xmlns="" href="chrome-extension://lnkdbjbjpnpjeciipoaflmpcddinpjjp/mytube.css" rel="stylesheet" type="text/css"/></svg>`
        })
    })
})