var outputDiv = document.getElementById('output');

var cellDraw = function(data, width) {
    var text = data;
    for (var i = 0; i < width - data.length; i++) {
        text += "&nbsp;";
    }
    console.log(text);
    return text;
};

var draw = function(input) {
    var colWidths = getColWidths(input), // [3, 20, 4]
        output = "";
    for (var i = 0; i < input.length; i++) {
        output += drawRow(input[i], colWidths);
    } 
    return output;
};

var getColWidths = function(input) {
    var colWidths = [];
    for (var i = 0; i < input.length; i++) {
        for (var j = 0; j < input[i].length; j++) {
            var cellWidth = input[i][j].length;
            if (typeof colWidths[j] === "undefined") {
                colWidths[j] = cellWidth;
            } else {
                colWidths[j] = Math.max(colWidths[j], cellWidth);
            }
        } 
    }
    console.log(colWidths)
    return colWidths;
};

var drawRow = function(rowData, colWidths) {
    var sep = "&nbsp;&nbsp;",
        output = "";
    for (var i = 0; i < rowData.length; i++) {
        output += cellDraw(rowData[i], colWidths[i]) + sep;
    }
    output += "<br>";
    return output;
};


var data = [
    ["1", "All Nighters", "2"],
    ["2", "Turing Team", "1"],
    ["3", "The Three Musketeeers", "1"]
];

outputDiv.innerHTML = draw(data);