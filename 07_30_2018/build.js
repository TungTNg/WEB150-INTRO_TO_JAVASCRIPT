(function () {
    'use strict';

    var sodaData = [
        ['1',    'Pepsi Cola',       '250 Calories'],
        ['2',    'Coca Cola',        '240 Calories'],
        ['3',    'Orange Juice',     '120 Calories'],
        ['4',    'Mango Tango',      '220 Calories'],
        ['5',    'Water',            '0 Calories']
        ];
        
    var sodaDataWithHeader = [
        ["Place", "Soda Brand", "Calories"],
        ['1',    'Pepsi Cola',       '250 Calories'],
        ['2',    'Coca Cola',        '240 Calories'],
        ['3',    'Orange Juice',     '120 Calories'],
        ['4',    'Mango Tango',      '220 Calories'],
        ['5',    'Water',            '0 Calories']
        ];

    var computerData = [
        ['1977',        'Apple I',      '$600'],
        ['1970',        'KayPro I',     '$1200'],
        ['1984',        'Apple II',     '$800'],
        ['1985',        'Commodore',    '$300']
        ];

    class Cell {
        constructor(text) {
            this.text = text;
        }
        
        draw() {
            return '<td>' + this.text + '</td>';
        }
    }

    class Table {
        constructor(data) {
            this.data = this.setup(data);
        }
        
        setup(data) {
        var cells = [];
        for (var i = 0; i < data.length; i++) {
            cells.push([]);
            for (var j = 0; j < data[i].length; j++) {
                var cell = new Cell(data[i][j]);
                cells[i].push(cell);
            }
        }
        return cells;
        
        }
        
        draw() {
            var output = `<table>${this.drawBody()}</table>`;
            return output;
        }
        
        drawBody() {
        var output = "<tbody>";
        for (var i = 0; i < this.data.length; i++) {
            output += this.drawRow(this.data[i]);
        }
        output += "</tbody>";
        return output;
        
        }
        
        drawRow(rowData) {
        var output = '<tr>';
        for (var i = 0; i < rowData.length; i++) {
            var cell = rowData[i];
            output += cell.draw();
        }
        output += '</tr>';
        return output;
        
        }
    }

    class HeaderTable extends Table {
        constructor(data) {
            let header = data.shift();
            super(data);
            this.header = header;
            
        }
        
        draw() {
            var output = `
            <table>
                ${this.drawHeader()}
                ${this.drawBody()}
        </table>`;
            return output;
        }   
        
        drawHeader() {
            let output = '<thead><tr>';
            for (let headerCell of this.header) {
                output += `<th>${headerCell}</th>`;   
            }
            output += '</tr></thead>';
            return output;
        }
    }

    var Cell$1 = 'molecular biology';
    console.log(Cell$1);

    var output = document.getElementById('output'),
        io = document.getElementById('io'),
        headerOutput = document.getElementById('header-output');
        
    var sodaTable = new Table(sodaData),
        ioTable = new Table(computerData),
        headerTable = new HeaderTable(sodaDataWithHeader);
        
    output.innerHTML = sodaTable.draw();
    io.innerHTML = ioTable.draw();
    headerOutput.innerHTML = headerTable.draw();

}());
