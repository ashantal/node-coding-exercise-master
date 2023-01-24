var fs = require('fs');
let raw = fs.readFileSync('mock_application.json');

function dedupe(list)
{
    let items = {}; //key dictionary 
    let valid_items = []; //list of valid items
    list.forEach(o=>{
        if('undefined' == typeof items[o.key]){
            valid_items.push(o);  //add only first item to the list 
            items[o.key] = o._id; //index
        } 
        else{
            //ignore duplicate items    
            console.log('*Duplicate ' + o.key);
        } 
    })  

    return valid_items; //deduped
}

function Sanitize(schema){
    schema.versions.forEach(v => {  
        v.objects =  dedupe(v.objects);  
        v.objects.forEach( o => {
            o.fields = dedupe(o.fields); 
        });
    });
}


var schema = Sanitize(JSON.parse(raw));
let data = JSON.stringify(schema);
fs.writeFileSync('out.json', data);

