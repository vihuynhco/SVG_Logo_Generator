//this is where you piece the components together.

// //circle
// <svg version="1.1"
//      width="300" height="200"
//      xmlns="http://www.w3.org/2000/svg">

//   <circle cx="150" cy="100" r="80" fill='${data.shapeColor}' />

//   <text x="150" y="125" font-size="60" text-anchor="middle" fill= '${data.textColor}' >${data.text}</text>

// </svg>;

// //triangle
// <svg version="1.1"
//      width="300" height="200"
//      xmlns="http://www.w3.org/2000/svg">

// <polygon points="150, 18 244, 182 56, 182" fill='${data.shapeColor}' />

// <text x="150" y="125" font-size="60" text-anchor="middle" fill= '${data.textColor}' >${data.text}</text>

// </svg>

class Shape{
    constructor(){
        this.shapeColor=""
    }
    selectedColor(shapeColor){
        this.shapeColor=shapeColor
    }
}

class Circle extends Shape{
     render(){
        return `<circle cx="150" cy="100" r="80" fill='${this.shapeColor}'/>`
    }
    
}

class Triangle extends Shape{
     render(){
        return `<polygon points="150, 18 244, 182 56, 182" fill='${this.shapeColor}'/>`
    }
    
}
class Square extends Shape{
     render(){
        return `<rect x="90" y="40" width="120" height="120" fill='${this.shapeColor}'/>`
    }
}
module.exports={Circle, Triangle, Square}