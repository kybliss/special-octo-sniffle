const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt([
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