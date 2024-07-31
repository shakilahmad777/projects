// steps one if else
const isStudent = true;
if(isStudent === true) {
    console.log('he is a student')
}else{
    console.log('porashona vallagena')
}


// steps two if else

const isStudent1 = false;
let para = '';
if(isStudent1 === true) {
    para = 'he is a student';
}else{
    para = 'porashona vallagena';
}

console.log(para)

// steps three ternary operator

const isStudent2 = true;

const paragraph = (isStudent2 === true) ? "he is a student" : "he is no student";

console.log(paragraph)