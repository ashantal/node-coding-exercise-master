# Instructions

## To remove duplicate objects and fields from schema   

e.g. 

    var cleanup = require('./cleanup.js');
    let schema_out = cleanup.Sanitize(schema_in);

## Usage 

> node test.js


Test.js reads source data from a mock json file and serilizes sanitized data to an output json file. 

### Steps
- Load json data from source mock_application.json 
- Iterate through list of records and discard duplicate records
- Iterate through fields withing each record and discard duplicate fields
- Serilize sanitized data to output.json


## Algorithm
Cleanup.js implements the Sanitize module that iterates through all records and the fields inside each record to discard duplicate entries. 
The Sanitize method executes dedupe helper function for list of records and feilds to drop duplicate items from the list and replaces the source list with deduped list.

## Dedupe function 
This function relies on a dictionary object to identify and drop duplicate items using item's key. 
### Steps
- takes a list of items  
- Iterates through the items and adds each item to validated list if the item's key is not found in the dictionary 
- Skips the item if it's key already exists in the dictionary othewise add item's key to dictionary 
- returns the new list back

## TO DO:
- Check for integrity of json object  while iterating through each object and field
- Add unit tests using frameworks like mocha or jasmine etc..
