# Instructions

## To remove duplicate objects and fields from schema   

e.g. 

    var cleanup = require('./cleanup.js');
    let schema_out = cleanup.Sanitize(schema_in);

## Usage 

> node test.js

Reads mock_application.json and writes senitized results back to out.json

