var data = [
    {
        name: 'Bob Smith',
        text: 'Hello, I want to eat a pineapple.'
    },
    {
        name: 'Sally Smith',
        text: 'I lit a firework, and it went kaboom!'
    }
];
    
var test = function(data) {
    var nameList = [];
    for (var i = 0; i < data.length; i++) {
        if (data[i].text.match(/b*o*m*b|k*a*b*o*o*m*!|p*i*n*e*a*p*p*l*e p*i*z*z*a/)) {
            nameList += data[i].name + " ";
        }
    }
    
    return nameList;
}