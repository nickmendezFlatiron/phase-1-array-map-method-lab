const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  return tutorials.map(function(element) {
    element = element.split(" ");
    for (let i = 0, n = element.length; i < n; i++) {
      element[i]= element[i][0].toUpperCase() + element[i].substring(1)
    }
    element = element.join(" ");
    return element;
    //console.log(element);
  })
}


  


/* Go Back And Ask For Help On This Function 

const judge = tutorials.map(function (element) { 
  element = element[0].toUpperCase() + element.substring(1);
  console.log(element);
  for(let i = 0, n = element.length; i < n ; i++) {
    if(element[i] === ' ') {
     element[i + 1] = element[i + 1].toUpperCase();
      console.log(element[i + 1]);
    }
  }  
})

judge;

*/