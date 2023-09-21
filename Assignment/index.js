const inquirer = require('inquirer');
const fs = require('fs');

const logoQuestions = ([
        {
            type: 'input',
            name: 'name',
            message: "What is your company name? Three letter maximum.",
        },
        {
            type: 'input',
            name: 'color',
            message: 'What color would you like your logo to be?',
        },
        {
            type: 'list',
            message: 'What shape would you like your logo to be in?',
            choices: ['Circle', 'Sqaure', 'Triangle'],
        }
    ]);

inquirer.prompt(logoQuestions).then((answers) => {
    const name = answers.name;
    const color = answers.color;
    const shape = answers.shape;

    const svg = `<svg viewBox = "0 0 200 200"> <${shape} fill="${color}" width = "200" height= "200" /> </svg>`;

    fs.writeFileSync('logo.svg', svg);

    console.log('Logo generated.')
});