const inquirer = require('inquirer');
const fs = require('fs');
const {Circle, Square, Triangle} = require("./lib/shapes.js");

const logoQuestions = ([
        {
            type: 'input',
            name: 'text',
            message: "What is your company name? Three letter maximum.",
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'What color would you like your logo to be?',
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'What color would you like your text to be?',
        },
        {
            type: 'list',
            name: 'shape',
            message: 'What shape would you like your logo to be in?',
            choices: ['circle', 'square', 'triangle'],
        }
    ]);

inquirer.prompt(logoQuestions).then((answers) => {
    const text = answers.text;
    const shapeColor = answers.shapeColor;
    const textColor = answers.textColor;
    const shape = answers.shape;

    switch(shape){
        case "circle":
            const circle = new Circle(text, shapeColor, textColor);
            fs.writeFileSync('./examples/logo.svg', circle.render());
        break;
        
        case "square":
            const square = new Square(text, shapeColor, textColor);
            fs.writeFileSync('./examples/logo.svg', square.render());
        break;

        default:
            const triangle = new Triangle(text, shapeColor, textColor);
            fs.writeFileSync('./examples/logo.svg', triangle.render());
    }    

    
    // const svg = `<svg viewBox = "0 0 200 200">
    // <${shape} fill="${color}" width="200" height="200" />
    // <text x="50" y="50" text-anchor="middle" font-size="24" fill="black">${company}</text>
    // </svg>`;

    console.log("Logo generated.");
});