const inquirer= require('inquirer')
const { writeFile } = require('fs/promises'); //what is the difference between const fs= require('fs').promises and const fs= require('fs')??
const SVG = require('./lib/svg')
const {Circle, Triangle,Square} = require('./lib/shape')   
//const response = require('./lib/response')

const questions = [
    {   type: 'input',
        message:'Enter text for the logo. (Must not be more than 3 characters.)',
        name:'text',
        validate: (text) => {
            return text.length <= 3 || "Must not be more than 3 characters."
        }
    },
    {
        type: 'input',
        message:'Enter a text color',
        name:'textColor',
    },
   {
        type: 'list',
        message: "Select a shape for the logo",
        choices: ['Triangle', 'Circle', 'Square'],
        name: 'shape',
    },
    {
        type: 'input',
        message:'Enter a shape color',
        name:'shapeColor', 
    },
];

//function to write  file; 
function writeToFile(fileName, data) {
 fs.writeFile(fileName, data, (err) =>
err ? console.error(err) : console.log('Success!')
);
 }

function init() {
    inquirer.prompt(questions)
    .then((response) => {
        let selectedShape;
        if (response.shape == 'Triangle'){
            selectedShape = new Triangle()
        }
        else if (response.shape == 'Circle') {
            selectedShape = new Circle()
        }
        else if (response.shape == 'Square') {
            selectedShape = new Square()
        }
        selectedShape.selectedColor(response.shapeColor)
        let svg = new SVG ()
        svg.selectedShape(selectedShape)
        svg.setText(response.text, response.textColor)
    return writeFile ('./output/logo.svg', svg.render())
}).then(()=>{
    console.log ('Logo generated!')
})

}

        // created a shape object
        // set its color
        // SVG
        // create an object of svg
        // set its shape
        // use function showSvg or render
 

//Function call to initialize app TO RUN
init();