
import { sodaData, computerData, sodaDataWithHeader } from './data'

import { Table, HeaderTable } from './classy_table';

var Cell = 'molecular biology';
console.log(Cell);

var output = document.getElementById('output'),
    io = document.getElementById('io'),
    headerOutput = document.getElementById('header-output');
    
var sodaTable = new Table(sodaData),
    ioTable = new Table(computerData),
    headerTable = new HeaderTable(sodaDataWithHeader);
    
output.innerHTML = sodaTable.draw();
io.innerHTML = ioTable.draw()
headerOutput.innerHTML = headerTable.draw();