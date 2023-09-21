const inquirer = require('inquirer');
const fs = require('fs');

const logoQuestions = ([
        {
            type: 'input',
            name: 'company',
            message: "What is your company name? Three letter maximum.",
        },
        {
            type: 'input',
            name: 'color',
            message: 'What color would you like your logo to be?',
        },
        {
            type: 'list',
            name: 'shape',
            message: 'What shape would you like your logo to be in?',
            choices: ['circle', 'square', 'triangle'],
        }
    ]);

inquirer.prompt(logoQuestions).then((answers) => {
    const company = answers.company;
    const color = answers.color;
    const shape = answers.shape;

    const svg = `<svg viewBox = "0 0 200 200">
    <${shape} fill="${color}" width="200" height="200" />
    <text x="50" y="50" text-anchor="middle" font-size="24" fill="black">${company}</text>
    </svg>`;

    fs.writeFileSync('logo.svg', svg);
    console.log("Logo generated.");
});

/*
fs.writeFileSync('logo.svg', svg);

const svg2png = require('svg2png');

const svgFile = './logo.svg';
const pngFile = './logo.png';

svg2png(svgFile, pngFile)
    .then(() => {
        console.log("Logo generated.");
    })
    .catch((err) => {
        console.error(err);
    });
*/
