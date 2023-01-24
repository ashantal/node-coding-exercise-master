var fs = require('fs');
var assert = require('assert');
var cleanup = require('./cleanup.js')

//Load source schema
let raw = fs.readFileSync('mock_application.json');
let schema_in = JSON.parse(raw);
let objects_in = schema_in.versions[0].objects.length;

//Remove duplicates 
let schema_out = cleanup.Sanitize(schema_in);
let objects_out = schema_out.versions[0].objects.length;

//Validate results
console.log('In:' + objects_in + ' Out:' + objects_out);
assert(objects_in > objects_out);

//Save
let data = JSON.stringify(schema_out);
fs.writeFileSync('out.json', data);
