// var outputDiv = document.getElementById('output');

// var tableData = [
//     ["1", "All Nighters", "2"],
//     ["2", "Turing Team", "1"],
//     ["3", "The Three Musketeeers", "1"]
// ];

// function makeTableHTML(tableData) {
//     var result = "<table>";
//     for (var i = 0; i < tableData.length; i++) {
//         result += "<tr>";
//             for (var j = 0; j < tableData[i].length; j++) {
//                 result += "<td>" + tableData[i][j] + "</td>";
//             }
//         result += "</tr>";
//     }
//     result += "</table>";
//     console.log(result);
//     return result;
// }

// outputDiv.innerHTML = makeTableHTML(tableData);
                    
var outputDiv = document.getElementById('output');



var draw = function(input) {
    var output = "<table><tbody>";
    for (var i = 0; i < input.length; i++) {
        output += drawRow(input[i]);
    }
    output += "</tbody></table>";
    return output;
};

var drawRow = function(rowData) {
    var output = '<tr>';
    for (var i = 0; i < rowData.length; i++) {
        output += '<td>' + rowData[i] + '</td>';
    }
    output += '</tr>';
    return output;
};


var data = [
    ["Item #", "Description", "Quantity", "Amount"],
    ["283472", "Work on fancy website.", "40", "120"],
    ["8979", "Hosting Fees", "1", "50"],
    ["797080", "PCI Auditing", "8", "150"]
];


outputDiv.innerHTML = draw(data);