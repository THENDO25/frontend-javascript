"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.insertRow = insertRow;
exports.deleteRow = deleteRow;
exports.updateRow = updateRow;

function insertRow(row) {
  console.log('Insert row', row);
  return Math.floor(Math.random() * Math.floor(1000));
}

function deleteRow(rowId) {
  console.log('Delete row id', rowId);
  return;
}

function updateRow(rowId, row) {
  console.log("Update row ".concat(rowId), row);
  return rowId;
}
//# sourceMappingURL=crud.dev.js.map
