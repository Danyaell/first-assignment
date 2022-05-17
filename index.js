/**
 * 
 * @author danos
 * @description First-Assignment
 */

const express = require('express');
const app = express();

const megabyte = 1024;
const buffer = [];
let totalSize = 0;

app.listen(3000, () => {
    console.log('Initalizating Buffer...');
    initBuffer();
    console.table(buffer, ["id", "device", "size"]);
    console.log(`Memory usage: ${Math.round(totalSize)} KB / 3072 KB`);
    deleteRows();
});

const initBuffer = () => {
    for (let i = 0; i < 500; i++) generateRow();
};

const generateRow = () => {
    let rowSize = generateSize();
    let row = new Row(generateId(), generateDevice(), rowSize);
    if ((totalSize + rowSize) < megabyte * 3) {
        totalSize += rowSize;
        buffer.push(row);
    }
};

const generateId = () => Math.round(Math.random() * (10 - 1)) + 1;
const generateDevice = () => Math.round(Math.random() * (3 - 1)) + 1;
const generateSize = () => ((Math.random() * (4 - 1)) * 4) + 6;

const deleteRows = () => {
    setInterval(() => {
        if (buffer.length != 0) {
            let i;
            while (buffer[i] == undefined) i = Math.round(Math.random() * (buffer.length - 0));
            console.log(`The process ${buffer[i].id} in the device ${buffer[i].device} ended, freed ${Math.round(buffer[i].size)} KB of memory...`);
            buffer.splice(i, 1);
        } else {
            console.log('Nothing on the buffer...')
            process.exit();
        }
    }, 3000);
};

class Row {
    constructor(id, device, size) {
        this.id = id;
        this.device = device;
        this.size = size;
    }
};