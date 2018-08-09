class Cell {
    constructor(text) {
        this.text = text
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

export { Table, HeaderTable };
