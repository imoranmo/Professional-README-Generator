const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');



const writeFileAsync = util.promisify(fs.writeFile);


const questions = () => {
  return inquirer.prompt ([
    {
        type: 'input',
        name: 'title',
        message: 'What is the project title?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of the project.',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Please provide installation instructions.',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Please provide usage information',
      },
      {
        type: 'input',
        name: 'contribution',
        message: 'Please provide contribution guidelines',
      },
      {
        type: 'input',
        name: 'test',
        message: 'Please provide test instructions',
      },
      {
        type: 'checkbox',
        name: 'license',
        message: 'Please select license',
        choices: ['No License', 'Apache', 'Boost', 'BSD', 'Creative Commons', 'Eclipse', 'GNU', 'IBM', 'ISC', 'MIT', 'Mozilla']
      },
      {
        type: 'input',
        name: 'github',
        message: 'Please enter github username.',
      },
      {
        type: 'input',
        name: 'email',
        message: 'Please enter email address.',
      },
  ])
};

const generateREADME = (answers) => 
`# ${answers.title}

# Table of contents
* [Description](#Description)
* [Installation](#Installation)
* [Usage](#Usage)
* [Contributing](#Contributing)
* [Tests](#Tests)
* [Questions](#Questions)

# Description
${answers.description}

# Installation
${answers.installation}

# Usage
${answers.usage}

# Contributing
${answers.contribution}

# Tests
${answers.test}

#Questions
* Github: [${answers.github}](https://github.com/${answers.github})
* Email: ${answers.email}

`

const init =() => {
    questions()
    .then((answers) => writeFileAsync ('README.md', generateREADME(answers)))
    .then(() => console.log('Successfully creates README.md!'))
    .catch((err) => console.log(err));
};

init();
