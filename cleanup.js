function dedupe(list)
{
    let items = {}; //key dictionary 
    let valid_items = []; //list of valid items
    list.forEach(o=>{
        if('undefined' == typeof items[o.key]){
            valid_items.push(o);  //add only first item to the list and ignore rest
            items[o.key] = o._id; //index
        } 
        else{
            //ignore duplicate items    
            console.log('*Duplicate ' + o.key);
        } 
    })  

    return valid_items; //deduped
}

/* 
Helper function to iterate through objects and fields collections within schema.versions 
to keep only first item and ignore duplicate items
TODO : check to make sure schema is a valid object and has a version, objects and filds
*/
function Sanitize(schema){
    schema.versions.forEach(v => {  
        v.objects =  dedupe(v.objects);  
        v.objects.forEach( o => {
            o.fields = dedupe(o.fields); 
        });
    });
    return schema;
}

module.exports = {Sanitize};


